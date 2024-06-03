import React, { FC, ReactNode } from "react";
import Link from 'next/link';

interface HoverLinkProps {
    children: ReactNode;
    className?: string;
    href: string;
}

const HoverLink: FC<HoverLinkProps> = ({children, className, href}) => {
    return (
        <Link href={href} className={`items-center flex ml-4 pt-[16px] pb-[15px] text-[13px] leading-[1.6em]
                text-[rgb(112,112,112)] border-b-[rgba(0,0,0,0)] border-b-[2px]
                whitespace-nowrap cursor-pointer 
                transition-all duration-100 delay-0 ease-out gap-0.5 ${className}
                hover:decoration-[rgb(109,85,255)] hover:text-[rgb(109,85,255)] hover:border-b-[rgba(109,85,255,1)]
            `}
        >
            {children}
        </Link>
    );
};



export default HoverLink;