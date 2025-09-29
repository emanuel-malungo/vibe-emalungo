import React from 'react';
import Image from 'next/image';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import icon from '@/assets/images/icon.png';
import { Search, User } from 'lucide-react';

export default function Header() {
    return (
        <header className='bg-white border-b-1 border-gray-200'>
            <nav className='flex flex-items justify-between mx-auto max-w-7xl p-4'>

                <Image 
                    src={icon} 
                    alt='Vibes Emalungo' 
                    width={100} 
                />

                <div>

                </div>

                <div className='flex items-center'>
                    <a href='#' className='text-gray-800 hover:underline'>Início</a>
                    <a href='#' className='text-gray-800 hover:underline ml-4'>Categorias</a>
                    <a href='#' className='text-gray-800 hover:underline ml-4'>Sobre</a>
                    <a href='#' className='text-gray-800 hover:underline ml-4'>Contatos</a>
                </div>

                <div className='flex items-center'>
                </div>
            </nav>
        </header>
    );
}