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
            className="flex flex-col"
        >
            <div className="items-center flex flex-row w-full cursor-pointer">
                {/* 컨텐츠 이너 랲퍼 */}
                <div className="">
                    {/* 랭크 */}
                    {rank}
                </div>
                <div style={{backgroundImage: `url(${profile})`}}>
                    {/* 프로필 사진 */}
                </div>
                <div>
                    {/* 컨텐츠 랲퍼 */}
                    <div>
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
