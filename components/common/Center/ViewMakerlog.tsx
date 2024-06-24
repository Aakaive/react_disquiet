import React from "react";
import ViewPostHeader from "./ViewPostHeader";

interface PostProps {
    PostId : string;
}

const ViewMakerlog : React.FC<PostProps> = ({PostId}) => {
    return (
        <div className="flex flex-col w-full cursor-pointer">
            <ViewPostHeader />
            <div className="h-[200px] w-full">
                {/* 메인 */}
                {PostId}
            </div>
        </div>
    );
};

export default ViewMakerlog;