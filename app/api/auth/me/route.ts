import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser, getSessionFromCookie, AuthDAL, setSessionCookie } from '@/app/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Clean up expired sessions
    await AuthDAL.cleanupExpiredSessions();
    
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Get the current session to check if it was refreshed
    const sessionId = getSessionFromCookie();
    const session = sessionId ? await AuthDAL.getSession(sessionId) : null;
    
    // Create response
    const response = NextResponse.json({
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt,
      }
    });

    // If session was refreshed, update the cookie
    if (session && session.expiresAt > new Date(Date.now() + 23 * 60 * 60 * 1000)) {
      setSessionCookie(session.id, response);
    }

    return response;
  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
