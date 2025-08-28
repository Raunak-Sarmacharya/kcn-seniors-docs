import { NextRequest, NextResponse } from 'next/server';
import { AuthDAL, setSessionCookie } from '@/app/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Validate credentials
    const user = await AuthDAL.validateCredentials(username, password);
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }

    // Create session
    const session = await AuthDAL.createSession(user);
    
    // Update last login
    await AuthDAL.updateLastLogin(user.id);

    // Create response
    const response = NextResponse.json(
      { 
        success: true, 
        user: {
          id: user.id,
          username: user.username,
          role: user.role,
        }
      },
      { status: 200 }
    );

    // Set session cookie
    setSessionCookie(session.id, response);

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
