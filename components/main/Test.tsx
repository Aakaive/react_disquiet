'use client';

import React, {useState, useEffect } from "react";
import { Virtuoso } from "react-virtuoso";
import MakePost from "../common/Center/PublishPost";
import ViewPost from "../common/Center/ViewPost";
import { useData } from "@/context/DataContext";
import { useRouter, useSearchParams } from "next/navigation";

type Category = 'all' | 'product' | 'makerlog' | 'club';

const Center = () => {
    const { users, posts, loading } = useData();
    const [ items, setItems ] = useState<any[]>([]);
    const [ sort, setSort ] = useState<boolean>(true);
    const [ category, setCategory ] = useState<Category>('all');

    const router = useRouter();
    const searchParams = useSearchParams();

    const updateUrlParams = (newParams: { [key: string]: string}) => {
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

    const categorySlider = (category : Category) => {
        switch(category) {
            case 'all' :
                return 'left-[0px] w-[20.74px]';
            case 'product' :
                return 'left-[44.74px] w-[41.48px]';
            case 'makerlog' :
                return 'left-[110.22px] w-[51.86px]';
            case 'club' :
                return 'left-[186.08px] w-[20.74px]';
        }
    };

    const handleSortBest = () => {
        setSort(true);
        updateUrlParams({ sort: 'best' });
    }

    const handleSortNewest = () => {
        setSort(false);
        updateUrlParams({ sort: 'newest' });
    }

    useEffect(() => {
        const selectedCategory = searchParams.get('category');
        if (selectedCategory) {
            setCategory(selectedCategory as Category);
        }
    }, [searchParams]);

    useEffect(() => {
        if(!loading) {
            setItems(posts.slice(0,2));
        }
    }, [loading, posts]);

    const loadMoreItems = (endIndex: number) => {
        setItems(prevItems => [
            ...prevItems, 
            ...posts.slice(prevItems.length, prevItems.length + 1)
        ]);
    };

    if(loading) {
        return <div>loading...</div>;
    }
}