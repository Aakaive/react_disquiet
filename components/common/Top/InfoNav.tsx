import React, {AnchorHTMLAttributes, FC} from "react";

interface InfoNavProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const InfoNav: FC<InfoNavProps> = ({children, className, ...props }) => {
    return (
        <a className={`
                itmes-center flex py-[6px] px-2 text-[13px] leading-[15.6px]
                whitespace-nowrap
                text-[rgb(142,142,142)]
                transition-all duration-100 delay-0 ease-out
                rounded-[8px] gap-[2px]
                hover:bg-[rgba(0,0,0,0.04)]
                ${className}
            `}
        {...props}
        >
            {children}
        </a>
    );
};

export default InfoNav;