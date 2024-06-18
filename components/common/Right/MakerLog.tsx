import React from "react";
import Link from "next/link";

interface MakerLogProps {
    link : string;
    rank : number;
    image : string;
    name : string;
    tag : string;
    title : string;
}

const MakerLog: React.FC<MakerLogProps> = ({link, rank, image, name, tag, title}) => {
    return (
        <Link href={link}
            className="flex justify-between py-[10px] px-[8px] bg-[rgba(0,0,0,0)] cursor-pointer transition-all transition-delay-0 transition-duration-100 ease-out hover:bg-[rgb(246,246,248)]"
        >
            <div className="flex flex-row w-full">
                {/* 랲퍼 */}
                <div className="mr-[6px] pt-[2px] w-[9px] text-[14px] leading-[21px] text-[rgb(142,142,142)] cursor-pointer">
                    {/* 랭크 */}
                    {rank}
                </div>
                <div className="flex flex-col min-w-0 gap-[4px]">
                    {/* 콘텐츠 랲퍼 */}
                    <div className="items-center flex gap-[4px]">
                        {/* 프로필 정보 */}
                        <div className="h-[20px] w-[20px] min-w-[20px] bg-center bg-cover rounded-[20px]"
                            style={{backgroundImage: `url(${image})`}}
                        >
                            {/* 프로필 사진 */}
                        </div>
                        <div className="overflow-hidden text-[13px] leading-[15.6px] text-ellipsis break-normal whitespace-nowrap text-[rgb(51,51,51)]">
                            {/* 프로필 정보 */}
                            <span className="mr-[2px]">
                                {/* 이름 */}
                                {name}
                            </span>
                            {"님의 "} 
                            <span className="leading-[13px] font-medium">
                                {/* 태그 */}
                                {tag}
                            </span>
                        </div>
                    </div>
                    <div className="items-center">
                        {/* 콘텐츠 정보 */}
                        <div className="overflow-hidden text-[15px] font-medium leading-[22.5px] text-ellipsis">
                            {/* 메이커로그 타이틀 */}
                            {title}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MakerLog;