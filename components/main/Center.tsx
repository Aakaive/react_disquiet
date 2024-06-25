'use client';

import React, { useState } from "react";
import { Virtuoso } from 'react-virtuoso';
import MakePost from "../common/Center/PublishPost";
import ViewPost from "../common/Center/ViewPost";

const loadMoreItems = (startIndex: number, endIndex: number, setItems: React.Dispatch<React.SetStateAction<string[]>>) => {
    const newItems = Array.from({ length: endIndex - startIndex }, (_, index) => `Item ${startIndex + index + 1}`);
    setItems((prevItems) => [...prevItems, ...newItems]);
};

const Center = () => {
    const [items, setItems] = useState<string[]>(Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`));

    return (
        <div className="relative mt-[32px] min-w-[478px] max-md:min-w-0">
            {/* 중앙 */}
            <MakePost />
            <div className="relative flex flex-col w-full">
                {/* 포스트 분류 및 정렬 */}
                <div className="relative items-center flex justify-between">
                    {/* 탭 랲퍼 */}
                    <div className="relative items-center flex gap-[24px]">
                        {/* 좌측 랲퍼 */}
                        <div className={`items-center flex justify-center py-[12px] text-[12px] leading-[12px] whitespace-nowrap
                                text-[rgb(142,142,142)] cursor-pointer
                                transition-all transition-delay-0 transition-duration-100 ease-out
                                hover:text-[rgb(109,85,255)] 
                            `}>전체</div>
                        <div className={`items-center flex justify-center py-[12px] text-[12px] leading-[12px] whitespace-nowrap
                                text-[rgb(142,142,142)] cursor-pointer
                                transition-all transition-delay-0 transition-duration-100 ease-out 
                                hover:text-[rgb(109,85,255)] 
                            `}>프로덕트</div>
                        <div className={`items-center flex justify-center py-[12px] text-[12px] leading-[12px] whitespace-nowrap
                                text-[rgb(142,142,142)] cursor-pointer
                                transition-all transition-delay-0 transition-duration-100 ease-out 
                                hover:text-[rgb(109,85,255)] 
                            `}>메이커로그</div>
                        <div className={`items-center flex justify-center py-[12px] text-[12px] leading-[12px] whitespace-nowrap
                                text-[rgb(142,142,142)] cursor-pointer
                                transition-all transition-delay-0 transition-duration-100 ease-out 
                                hover:text-[rgb(109,85,255)] 
                            `}>클럽</div>
                    </div>
                    <div className="relative items-center flex">
                        {/* 우측 랲퍼 */}
                        <button className="relative flex py-[4px] text-[16px] text-start text-[rgb(0,0,0)] rounded-[8px] cursor-default">
                            <div className={`relative items-center flex justify-center py-[4px] px-[6px] z-1
                                    text-[12px] font-medium leading-[13.2px] whitespace-nowrap text-[rgba(0,0,0,0.4)] cursor-pointer rounded-[6px]
                                    transtion-all transition-delay-0 transition-duration-100 ease-out
                                `}>추천</div>
                            <div className={`relative items-center flex justify-center py-[4px] px-[6px] z-1
                                    text-[12px] font-medium leading-[13.2px] whitespace-nowrap text-[rgba(0,0,0,0.4)] cursor-pointer rounded-[6px]
                                    transtion-all transition-delay-0 transition-duration-100 ease-out
                                `}>최신</div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-[32px] mx-0">
                {/* 메인 포스트 */}
                <Virtuoso
                    useWindowScroll
                    style={{ height: '100%', width: '100%' }}
                    totalCount={items.length}
                    itemContent={(index) => <ViewPost PostId={items[index]} />}
                    endReached={(endIndex) => loadMoreItems(endIndex, endIndex + 20, setItems)}
                    // 데이터를 가져와서 하나씩 전달하고, 해당 데이터셋의 타입에 따라 해당 컴포넌트 내에서 각기 다른 컴포넌트 호출
                />

                {/* 
                    1. 게시글 데이터 모델 정하기
                        [게시글 어트리뷰트]
                        1. PostId(게시글 고유 식별자)
                        2. 카테고리(프로덕트/메이커로그/클럽)
                        3. 태그(메이커로그 태그)
                        4. 작성자 프로필(프로필 사진, 이름, 직무 등)
                        5. 게시글 제목
                        6. 게시글 내용
                        7. 게시글 어태치먼트(댓글, 업보트 등)
                    2. fetch한 데이터를 data, setData로 이루어진 리액트 훅에 저장.(배열인듯?)
                    3. virtuoso로 무한스크롤 구현.
                        1. 스크롤은 useWindowScroll 적용
                        2. itemContent를 통해서 가져 온 데이터를 적용. 로직도 여기에 적용.
                */}
            </div>
        </div>
    );
};

export default Center;
