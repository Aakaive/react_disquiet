import React from "react";
import Link from "next/link";

interface MakerLogProps {
    link : string;
    rank : string;
    image : string;
    name : string;
    tag : string;
    title : string;
}

const MakerLog: React.FC<MakerLogProps> = ({link, rank, image, name, tag, title}) => {
    return (
        <Link href={link}
            className="flex justify-between py-[10px] px-[8px] bg-[rgba(0,0,0,0)] cursor-pointer transition-all transition-delay-0 transition-duration-100 ease-out"
        >
            <div className="flex flex-row w-full">
                {/* 랲퍼 */}
                <div>
                    {/* 랭크 */}
                    {rank}
                </div>
                <div>
                    {/* 콘텐츠 랲퍼 */}
                    <div>
                        {/* 프로필 정보 */}
                        <div style={{backgroundImage: `url(${image})`}}>
                            {/* 프로필 사진 */}
                        </div>
                        <div>
                            {/* 프로필 정보 */}
                            <div>
                                {/* 이름 */}
                                {name}
                            </div>
                            님의
                            <div>
                                {/* 태그 */}
                                {tag}
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* 콘텐츠 정보 */}
                        <div>
                            {/* 메이커로그 타이틀 */}
                            {title}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};