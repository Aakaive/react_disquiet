'use client';

import React, { useState, useEffect } from "react";
import { Virtuoso } from 'react-virtuoso';
import MakePost from "../common/Center/PublishPost";
import ViewPost from "../common/Center/ViewPost";
import { useData } from "@/context/DataContext";
import { useRouter, useSearchParams } from 'next/navigation';

type Category = 'all' | 'product' | 'makerlog' | 'club';

const Center = () => {
    const { users, posts, loading } = useData();
    const [items, setItems] = useState<any[]>([]);
    const [sort, setSort] = useState<string>('best');
    const [category, setCategory] = useState<Category>('all');
    const [filteredPosts, setFilteredPosts] = useState<any[]>([]);

    const router = useRouter();
    const searchParams = useSearchParams();

    const updateUrlParams = (newParams: { [key: string]: string }) => {
        const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
        Object.keys(newParams).forEach(key => {
            currentParams.set(key, newParams[key]);
        });
        const newUrl = `${window.location.pathname}?${currentParams.toString()}`;
        router.push(newUrl);
    };

    const setCategoryAll = () => {
        setCategory('all');
        updateUrlParams({ category: 'all' });
    };
    const setCategoryProduct = () => {
        setCategory('product');
        updateUrlParams({ category: 'product' });
    };
    const setCategoryMakerlog = () => {
        setCategory('makerlog');
        updateUrlParams({ category: 'makerlog' });
    };
    const setCategoryClub = () => {
        setCategory('club');
        updateUrlParams({ category: 'club' });
    };

    const categorySlider = (category: Category) => {
        switch (category) {
            case 'all':
                return 'left-[0px] w-[20.74px]';
            case 'product':
                return 'left-[44.74px] w-[41.48px]';
            case 'makerlog':
                return 'left-[110.22px] w-[51.86px]';
            case 'club':
                return 'left-[186.08px] w-[20.74px]';
        }
    };

    const handleSortBest = () => {
        setSort('best');
        updateUrlParams({ sort: 'best' });
    };

    const handleSortNewest = () => {
        setSort('newest');
        updateUrlParams({ sort: 'newest' });
    };

    useEffect(() => {
        const selectedCategory = searchParams.get('category');
        const selectedSort = searchParams.get('sort');

        if (selectedCategory) {
            setCategory(selectedCategory as Category);
        }
        if (selectedSort) {
            setSort(selectedSort);
        }

        let filtered = [...posts];

        if (selectedCategory && selectedCategory !== 'all') {
            filtered = filtered.filter(post => post.category === selectedCategory);
        }

        if (selectedSort === 'best') {
            filtered.sort((a, b) => b.upvote - a.upvote);
        } else {
            filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        }

        setFilteredPosts(filtered);
        setItems(filtered.slice(0, 2));
        
    }, [searchParams, posts]);

    const loadMoreItems = () => {
        setItems(prevItems => [
            ...prevItems,
            ...filteredPosts.slice(prevItems.length, prevItems.length + 2)
        ]);
    };

    if (loading) {
        return <div>loading...</div>;
    }

    return (
        <div className="relative mt-[32px] min-w-[478px] max-md:min-w-0">
            <MakePost />
            <div className="relative flex flex-col w-full">
                <div className="relative items-center flex justify-between">
                    <div className="relative items-center flex gap-[24px]">
                        <div onClick={setCategoryAll}
                            className={`items-center flex justify-center py-[12px] text-[12px] leading-[12px] whitespace-nowrap
                                cursor-pointer
                                transition-all transition-delay-0 transition-duration-100 ease-out
                                hover:text-[rgb(109,85,255)] 
                                ${category === 'all' ? "text-[rgb(109,85,255)]" : "text-[rgb(142,142,142)]"}
                            `}>전체</div>
                        <div onClick={setCategoryProduct}
                            className={`items-center flex justify-center py-[12px] text-[12px] leading-[12px] whitespace-nowrap
                                cursor-pointer
                                transition-all transition-delay-0 transition-duration-100 ease-out 
                                hover:text-[rgb(109,85,255)] 
                                ${category === 'product' ? "text-[rgb(109,85,255)]" : "text-[rgb(142,142,142)]"}
                            `}>프로덕트</div>
                        <div onClick={setCategoryMakerlog}
                            className={`items-center flex justify-center py-[12px] text-[12px] leading-[12px] whitespace-nowrap
                                cursor-pointer
                                transition-all transition-delay-0 transition-duration-100 ease-out 
                                hover:text-[rgb(109,85,255)] 
                                ${category === 'makerlog' ? "text-[rgb(109,85,255)]" : "text-[rgb(142,142,142)]"}
                            `}>메이커로그</div>
                        <div onClick={setCategoryClub}
                            className={`items-center flex justify-center py-[12px] text-[12px] leading-[12px] whitespace-nowrap
                                cursor-pointer
                                transition-all transition-delay-0 transition-duration-100 ease-out 
                                hover:text-[rgb(109,85,255)] 
                                ${category === 'club' ? "text-[rgb(109,85,255)]" : "text-[rgb(142,142,142)]"}
                            `}>클럽</div>
                        <div className={`${categorySlider(category)} absolute bottom-[0px] h-[2px] z-[4] bg-[rgb(109,85,255)] transition-all duration-250 ease-in-out`}></div>
                    </div>
                    <div className="relative items-center flex">
                        <button className="relative flex py-[4px] text-[16px] text-start text-[rgb(0,0,0)] rounded-[8px] cursor-default">
                            <div onClick={handleSortBest} className={`relative items-center flex justify-center py-[4px] px-[6px] z-[1]
                                    text-[12px] font-medium leading-[13.2px] whitespace-nowrap text-[rgba(0,0,0,0.4)] cursor-pointer rounded-[6px]
                                    transtion-all transition-delay-0 transition-duration-100 ease-out
                                `}>추천</div>
                            <div onClick={handleSortNewest} className={`relative items-center flex justify-center py-[4px] px-[6px] z-[1]
                                    text-[12px] font-medium leading-[13.2px] whitespace-nowrap text-[rgba(0,0,0,0.4)] cursor-pointer rounded-[6px]
                                    transtion-all transition-delay-0 transition-duration-100 ease-out
                                `}>최신</div>
                            <div className={`${sort === 'best' ? "left-0" : "left-[50%]"} absolute h-[calc(100%-8px)] top-[4px] w-[calc(50%)] bg-white transition-all duration-100 ease-out rounded-[6px]`}>
                                
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-[32px] mx-0">
                <Virtuoso
                    useWindowScroll
                    style={{ height: '100%', width: '100%' }}
                    totalCount={items.length}
                    itemContent={(index) => <ViewPost postNum={items[index].postNum} />}
                    endReached={loadMoreItems}
                />
            </div>
        </div>
    );
};

export default Center;
