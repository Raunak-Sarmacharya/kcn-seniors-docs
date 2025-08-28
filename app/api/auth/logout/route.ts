import { NextRequest, NextResponse } from 'next/server';
import { AuthDAL, getSessionFromCookie, deleteSessionCookie } from '@/app/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Get current session
    const sessionId = getSessionFromCookie();
    
    if (sessionId) {
      // Delete session from storage
      await AuthDAL.deleteSession(sessionId);
    }

    // Create response
    const response = NextResponse.json(
      { success: true },
      { status: 200 }
    );

    // Delete session cookie
    deleteSessionCookie(response);

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
