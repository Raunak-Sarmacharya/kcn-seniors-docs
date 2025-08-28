import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromCookie, AuthDAL, setSessionCookie } from '@/app/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Clean up expired sessions
    await AuthDAL.cleanupExpiredSessions();
    
    const sessionId = getSessionFromCookie();
    
    if (!sessionId) {
      return NextResponse.json(
        { error: 'No session found' },
        { status: 401 }
      );
    }

    const session = await AuthDAL.getSession(sessionId);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Invalid or expired session' },
        { status: 401 }
      );
    }

    // Refresh the session
    const refreshedSession = await AuthDAL.refreshSession(sessionId);
    
    if (!refreshedSession) {
      return NextResponse.json(
        { error: 'Failed to refresh session' },
        { status: 500 }
      );
    }

    // Create response
    const response = NextResponse.json({
      success: true,
      message: 'Session refreshed successfully'
    });

    // Set the refreshed session cookie
    setSessionCookie(refreshedSession.id, response);

    return response;
  } catch (error) {
    console.error('Session refresh error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
