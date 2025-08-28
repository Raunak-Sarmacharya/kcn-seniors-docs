import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';

export interface User {
  id: string;
  username: string;
  passwordHash: string;
  role: 'admin' | 'editor' | 'viewer';
  lastLogin?: Date;
  createdAt: Date;
}

export interface Session {
  id: string;
  userId: string;
  username: string;
  role: string;
  expiresAt: Date;
  createdAt: Date;
}

// In-memory storage for demo purposes
// In production, use a proper database
const users: User[] = [
  {
    id: '1',
    username: 'kcn_admin',
    passwordHash: '$2a$12$WwfRozPUfs.MqZ/7u6YdoeC6IJ0jpe8wWl0WsU3R2R8MrE/mu/v.y', // SecureKCN2025!
    role: 'admin',
    createdAt: new Date('2025-01-01'),
  },
];

const sessions: Session[] = [];

export class AuthDAL {
  static async validateCredentials(username: string, password: string): Promise<User | null> {
    const user = users.find(u => u.username === username);
    if (!user) return null;

    const isValid = await bcrypt.compare(password, user.passwordHash);
    return isValid ? user : null;
  }

  static async createSession(user: User): Promise<Session> {
    const session: Session = {
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      userId: user.id,
      username: user.username,
      role: user.role,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      createdAt: new Date(),
    };

    sessions.push(session);
    return session;
  }

  static async getSession(sessionId: string): Promise<Session | null> {
    const session = sessions.find(s => s.id === sessionId);
    if (!session) return null;

    // Check if session is expired
    if (session.expiresAt < new Date()) {
      this.deleteSession(sessionId);
      return null;
    }

    return session;
  }

  static async deleteSession(sessionId: string): Promise<void> {
    const index = sessions.findIndex(s => s.id === sessionId);
    if (index !== -1) {
      sessions.splice(index, 1);
    }
  }

  static async refreshSession(sessionId: string): Promise<Session | null> {
    const session = await this.getSession(sessionId);
    if (!session) return null;

    // Extend session by 24 hours
    session.expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
    return session;
  }

  static async getUserById(userId: string): Promise<User | null> {
    return users.find(u => u.id === userId) || null;
  }

  static async updateLastLogin(userId: string): Promise<void> {
    const user = users.find(u => u.id === userId);
    if (user) {
      user.lastLogin = new Date();
    }
  }
}

// Cookie management utilities
export const COOKIE_NAME = 'kcn_session';

export function getSessionFromCookie(): string | null {
  const cookieStore = cookies();
  return cookieStore.get(COOKIE_NAME)?.value || null;
}

export function setSessionCookie(sessionId: string, response: NextResponse): void {
  response.cookies.set(COOKIE_NAME, sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 24 * 60 * 60, // 24 hours
    path: '/',
  });
}

export function deleteSessionCookie(response: NextResponse): void {
  response.cookies.delete(COOKIE_NAME);
}

// Authentication middleware helpers
export async function getCurrentUser(): Promise<User | null> {
  const sessionId = getSessionFromCookie();
  if (!sessionId) return null;

  const session = await AuthDAL.getSession(sessionId);
  if (!session) return null;

  return await AuthDAL.getUserById(session.userId);
}

export async function requireAuth(): Promise<User> {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error('Authentication required');
  }
  return user;
}

export async function requireRole(requiredRole: string): Promise<User> {
  const user = await requireAuth();
  if (user.role !== requiredRole && user.role !== 'admin') {
    throw new Error('Insufficient permissions');
  }
  return user;
}
