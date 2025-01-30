import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type: 'submit' | 'button' | 'reset';
    children: React.ReactNode;
    className?: string;
}

export default function Button({ type, children, className, ...props }: ButtonProps) {
    return (
        <button type={type} {...props} className={`bg-black text-white hover:bg-white hover:text-black border border-black py-2 px-2 rounded transition-colors ${className}`}>
            {children}
        </button>
    );

}
