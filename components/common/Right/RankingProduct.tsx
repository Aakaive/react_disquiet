import React from "react";
import Link from "next/link";

interface ChildComponentProps {
    link: string;
    rank: number;
    profile: string;
    title: string;
    description: string;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ link, rank, profile, title, description }) => {
    return (
        <Link href={link}
            className="items-center flex flex-col justify-between py-[6px] px-[8px] 
                text-black bg-[rgba(0,0,0,0)] cursor-pointer 
                transition-all transition-delay-0 transition-duration-100 ease-out
                rounded-[12px]
                hover:bg-[rgb(246,246,248)]
            "
        >
            <div className="items-center flex flex-row w-full cursor-pointer">
                {/* 컨텐츠 이너 랲퍼 */}
                <div className="w-[9px] mr-[6px] text-[14px] leading-[21px] text-[rgb(142,142,142)] cursor-pointer">
                    {/* 랭크 */}
                    {rank}
                </div>
                <div className="h-[32px] w-[32px] mr-[8px] min-w-[32px] bg-[rgb(234,234,236)] cursor-pointer rounded-[10px] fill-[drop-shadow(rgba(0,0,0,0.1)_0px_0px_2px)]"
                style={{backgroundImage: `url(${profile})`}}>
                    {/* 프로필 사진 */}
                </div>
                <div className="items-center flex w-[calc(100%-3.5rem)] cursor-pointer">
                    {/* 컨텐츠 랲퍼 */}
                    <div className="overflow-hidden text-[13px] font-medium leading-[15.6px] whitespace-nowrap cursor-pointer">
                        {/* 제목 */}
                        {title}
                    </div>
                    <div className="hidden">
                        {/* 내용 */}
                        {description}
                    </div>
                </div>
            </div>
        </Link>
    );
};
  
export default ChildComponent;
