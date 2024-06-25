'use client';

import React, {useState, useEffect} from "react";
import Link from "next/link";
import JoinMakerItem from "@/components/common/Right/JoinMakerItem"

interface Post {
    link: string;
    image: string;
    name: string;
    role: string;
}

const JoinMaker = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/data/post.json');
            const data: Post[] = await response.json();
            setPosts(data);
            setLoading(false);
        };
    
        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="flex flex-col mb-[20px] gap-[14px]">
            {/* 배너3 */}
            <div>
                {/* 헤더 */}
                <div className="items-center flex flex-row h-[13px] w-full text-[13px] leading-[13px] font-medium gap-[4px]">
                    <div>🐣</div>
                    <div>새로 조인한 메이커</div>
                </div>
            </div>

            <div className="flex flex-col p-1 bg-white rounded-[14px] gap-[4px]">
                {/* 메이커 리스트(리스트 랲퍼)) */}
                {posts.map((post) => (
                    // posts는 json으로부터 가져 온 데이터셋의 집합이므로 아래 컴포넌트 호출은 모든 데이터셋을 각기 전달한 컴포넌트를 호출함.
                    // json에 작성된 데이터셋이 2개라면, 해당 컴포넌트는 두번 호출되고, 3개라면 3번 호출됨.
                    <JoinMakerItem key={post.name} link={post.link} image={post.image} name={post.name} role={post.role} />
                ))}
                <Link href="#"
                    className="m-[6px] p-[6px] text-[12px] leading-[12px] text-center
                        decoration-[rgb(109,85,255)] whitespace-nowrap text-[rgb(109,85,255)]
                        bg-[rgb(240,238,255)] border-[1px] border-[rgba(109,85,255,0)]
                        transition-all transition-delay-0 transition-duration-100 ease-out
                        rounded-[8px]
                        hover:shadow-[0_0_0_3px_rgba(109,85,255,0.4)]
                    "
                >
                    더보기
                </Link>
            </div>
        </div>
    );
};

export default JoinMaker;