import React from 'react';

interface TopicButtonProps {
    icon: string;
    text: string;
    isSelected: boolean;
    onClick: () => void;
}

const TopicButton: React.FC<TopicButtonProps> = ({icon, text, isSelected, onClick}) => {
    return (
        <button onClick={onClick}
            className={`relative items-start flex m-0 py-[8px] pr-[8px] pl-[10px] w-[calc(100%-2px)]
                text-[12px] leading-[12px] text-left text-[rgb(112,112,112)] cursor-pointer
                transition-all transition-delay-0 transition-duration-100 ease-out
                rounded-[10px] gap-[8px]
                hover:bg-[rgb(245,245,247)]
                ${isSelected? "bg-[rgb(245,245,247)]" : "bg-white"}
            `}
        >
            <span>{icon}</span>{text}
        </button>
    );
};

export default TopicButton;