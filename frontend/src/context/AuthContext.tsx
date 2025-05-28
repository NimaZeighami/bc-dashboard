import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Role = 'admin' | 'client' | 'freelancer' | null;

export enum RoleEnum {
    Admin = 'admin',
    Client = 'client',
    Freelancer = 'freelancer',
    None = 'none'  // enum members can't be null, so use a string like 'none'
  }

interface AuthContextType {
    role: Role;
    setRole: (role: Role) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [role, setRoleState] = useState<Role>(null);

    useEffect(() => {
        const storedRole = localStorage.getItem('role') as Role;
        if (storedRole) {
            setRoleState(storedRole);
        }
    }, []);

    const setRole = (newRole: Role) => {
        setRoleState(newRole);
        if (newRole) {
            localStorage.setItem('role', newRole);
        } else {
            localStorage.removeItem('role');
        }
    };

    return (
        <AuthContext.Provider value={{ role, setRole }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
