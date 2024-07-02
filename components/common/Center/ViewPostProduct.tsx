import React from "react";
import { useData } from "@/context/DataContext";

interface PostProps {
    postNum : number;
}

const ViewPostProduct : React.FC<PostProps> = ({postNum}) => {
    const {posts, loading} = useData();

    if(loading) {
        return <div>loading...</div>;
    }

    const post = posts.find(post => post.postNum === postNum);

    return (
        <div className="flex flex-col mb-[40px] ml-[32px] h-[320px]">
            <div className="w-full">
                {/* 메인 */}
                <div className="relative items-center flex flex-col pb-[16px] px-[20px] pt-[20px] bg-white transition-all duration-100 ease-out rounded-[20px] gap-[8px]">
                    게시글 번호 : {post?.postNum}
                    <div>댓글 수 : {post?.comments.length}</div>
                    <div>추천 : {post?.upvote}</div>
                </div>
            </div>
        </div>
    );
};

export default ViewPostProduct;