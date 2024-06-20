import React from "react";
import Link from "next/link";

interface JoinMakerProps {
    link : string;
    image : string;
    name : string;
    role : string;
}

const JoinMaker: React.FC<JoinMakerProps> = ({link, image, name, role}) => {
    return (
        <Link href={link} className="relative flex basis-0 grow shrink min-w-0 p-[8px] bg-white
            transition-all transtion-delay-0 transition-duration-150 ease-in-out cursor-pointer
            rounded-[12px]
            hover:bg-[rgba(0,0,0,0.04)]
        ">
            <div className="relative items-center flex justify-between w-full z-1 gap-[8px] cursor-pointer"> 
                {/* 랲퍼 */}
                <div className="items-center flex basis-0 grow shrink min-w-0 w-full gap-[8px] cursor-pointer">
                    {/* 프로필 랲퍼 */}
                    <div className="h-[32px] w-[32px] min-w-[32px] bg-center bg-cover rounded-[40px] cursor-pointer"
                    style={{backgroundImage: `url(${image})`}}>
                        {/* 프로필 사진 */}
                    </div>
                    <div className="flex flex-col min-w-0 w-full gap-[4px] cursor-pointer">
                        {/* 프로필 정보 */}
                        <div className="min-w-0 overflow-hidden w-full text-[14px] leading-[21px] whitespace-nowrap cursor-pointer">
                            {/* 이름 */}
                            {name}
                        </div>
                        <div className="min-w-0 overflow-hidden w-full text-[12px] leading-[15.6px] whitespace-nowrap text-[rgb(142,142,142)] cursor-pointer">
                            {/* 직무 */}
                            {role}
                        </div>
                    </div>
                </div>
                <span className="relative items-center h-fit justify-center cursor-pointer">
                    {/* 박수 아이콘 */}
                    <div className="items-center flex justify-center min-h-[24px] min-w-[24px] text-[14px] leading-[21px] bg-[rgb(241,238,252)] border-[1px] border-[rgb(234,234,236)] transition-all transition-delay-0 transition-duration-100 ease-out rounded-[32px] cursor-pointer hover:border-[rgb(109,85,255)] hover:shadow-[0_0_0_3px_rgba(109,85,255,0.4)]">🙌</div>
                </span>
            </div>
        </Link>
    );
};

export default JoinMaker;