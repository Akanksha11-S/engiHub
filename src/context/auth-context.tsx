'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useState, useCallback } from 'react';

interface AuthContextType {
  userName: string;
  setUserName: (name: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userName, setUserNameState] = useState<string>('Aarav S.');

  const setUserName = useCallback((name: string) => {
    setUserNameState(name);
  }, []);

  const value = { userName, setUserName };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
