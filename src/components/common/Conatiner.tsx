import React, { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }, className?: string) {
    return (
        <main className={`bg-gray-200 ${className}`}>
            {children}
        </main>
    );
}