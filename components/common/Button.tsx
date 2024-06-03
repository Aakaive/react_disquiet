import React, { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({children, className}) => {
    return (
        <button className={`
                    items-start ml-2 p-3 
                    text-[14px] leading-[14px] text-black whitespace-nowrap
                    bg-[rgb(255,255,255)] border-[rgb(234,234,236)] border-[1px]
                    transition-all duration-100 delay-0 ease-out
                    rounded-[20px] ${className}
                `}
        >
            {children}
        </button>
    );
};

export default Button;