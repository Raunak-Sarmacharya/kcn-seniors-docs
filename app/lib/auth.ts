// Simple authentication for development
// In production, this would integrate with your actual auth system

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export async function getCurrentUser(): Promise<User | null> {
  // For development, return a mock user
  // In production, this would check session/token
  return {
    id: '1',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'administrator'
  };
}
