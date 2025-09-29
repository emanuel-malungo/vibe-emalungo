import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
    return (
        <button 
            className={className} 
            onClick={onClick}
        >
            {children}
        </button>
    );
}