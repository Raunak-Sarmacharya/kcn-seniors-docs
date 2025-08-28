'use client';

import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  username: string;
  role: string;
  lastLogin?: string;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

class AuthClient {
  private refreshInterval: NodeJS.Timeout | null = null;
  private refreshTimeout: NodeJS.Timeout | null = null;

  // Check authentication status
  async checkAuth(): Promise<User | null> {
    try {
      const response = await fetch('/api/auth/me', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        return data.user;
      }

      return null;
    } catch (error) {
      console.error('Auth check failed:', error);
      return null;
    }
  }

  // Refresh session
  async refreshSession(): Promise<boolean> {
    try {
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        credentials: 'include',
      });

      return response.ok;
    } catch (error) {
      console.error('Session refresh failed:', error);
      return false;
    }
  }

  // Logout
  async logout(): Promise<void> {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      this.stopAutoRefresh();
    }
  }

  // Start automatic session refresh
  startAutoRefresh(onAuthChange?: (user: User | null) => void): void {
    // Clear any existing intervals
    this.stopAutoRefresh();

    // Refresh session every 15 minutes
    this.refreshInterval = setInterval(async () => {
      const success = await this.refreshSession();
      if (!success) {
        // If refresh fails, check auth status
        const user = await this.checkAuth();
        if (!user) {
          // User is no longer authenticated
          onAuthChange?.(null);
          this.stopAutoRefresh();
        }
      }
    }, 15 * 60 * 1000); // 15 minutes

    // Set up a timeout to refresh session before it expires (23 hours)
    this.refreshTimeout = setTimeout(async () => {
      const success = await this.refreshSession();
      if (!success) {
        const user = await this.checkAuth();
        if (!user) {
          onAuthChange?.(null);
          this.stopAutoRefresh();
        }
      }
    }, 23 * 60 * 60 * 1000); // 23 hours
  }

  // Stop automatic session refresh
  stopAutoRefresh(): void {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
      this.refreshInterval = null;
    }
    if (this.refreshTimeout) {
      clearTimeout(this.refreshTimeout);
      this.refreshTimeout = null;
    }
  }
}

// Create a singleton instance
export const authClient = new AuthClient();

// React hook for authentication
export function useAuth() {
  const router = useRouter();

  const checkAuth = useCallback(async (): Promise<User | null> => {
    return await authClient.checkAuth();
  }, []);

  const logout = useCallback(async (): Promise<void> => {
    await authClient.logout();
    router.push('/login');
  }, [router]);

  const startAutoRefresh = useCallback((onAuthChange?: (user: User | null) => void): void => {
    authClient.startAutoRefresh(onAuthChange);
  }, []);

  const stopAutoRefresh = useCallback((): void => {
    authClient.stopAutoRefresh();
  }, []);

  return {
    checkAuth,
    logout,
    startAutoRefresh,
    stopAutoRefresh,
  };
}
