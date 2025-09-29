import React, { useState} from 'react';


interface InputProps {
    className?: string;
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ReactNode;
}

export default function Input(
    { 
        className, 
        placeholder, 
        type, 
        value, 
        onChange,
        icon
    }: InputProps)
{
    return (
        <div className='flex items-center border border-gray-300 rounded-md px-3 py-2'>
            <input 
                type={type} 
                placeholder={placeholder} 
                className={className}
                value={value}
                onChange={onChange}
            />
            {icon && <span className='ml-2'>{icon}</span>}
        </div>
    )
}
