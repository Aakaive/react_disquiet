import React, { ButtonHTMLAttributes, FC } from 'react';

interface TopicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

const TopicButton: FC<TopicButtonProps> = ({children, className}) => {
    return (
        <button className="relative items-start flex m-0 py-[8px] pr-[8px] pl-[10px] w-[calc(100%-2px)]
                text-[12px] leading-[12px] text-left text-[rgb(112,112,112)] cursor-pointer
                transition-all transition-delay-0 transition-duration-100 ease-out
                rounded-[10px] gap-[8px]
                hover:bg-[rgb(245,245,247)]
            "
        >
            {children}
        </button>
    );
};

export default TopicButton;