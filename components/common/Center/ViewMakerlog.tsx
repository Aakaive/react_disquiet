import React from "react";

interface PostProps {
    PostId : string;
}

const ViewMakerlog : React.FC<PostProps> = ({PostId}) => {
    return (
        <div className="flex flex-col mb-[40px] ml-[32px] h-[320px]">
            <div className="w-full">
                {/* 메인 */}
                <div className="relative items-center flex flex-col pb-[16px] px-[20px] pt-[20px] bg-white transition-all duration-100 ease-out rounded-[20px] gap-[8px]">
                    {PostId}
                </div>
            </div>
        </div>
    );
};

export default ViewMakerlog;