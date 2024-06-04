import React, { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({children, className}) => {
    return (
        <button className={`
                    items-start ml-2 p-3 
                    text-[14px] leading-[14px] text-black whitespace-nowrap
                    bg-[rgb(255,255,255)] border-[1px] border-[rgb(234,234,236)]
                    transition-all duration-100 delay-0 ease-out
                    rounded-[20px] ${className} 
                    max-lg:m-0 max-lg:p-[12px] max-lg:w-full
                    max-lg:text-[13px] max-lg:leading-[13px]
                    max-lg:rounded-[12px]
                `}
        >
            {children}
        </button>
    );
};

export default Button;