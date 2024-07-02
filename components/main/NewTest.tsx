'use client';

import React, {useState, useEffect, use} from "react";
import { Virtuoso } from "react-virtuoso";
import PublishPost from "../common/Center/PublishPost";
import ViewPost from "../common/Center/ViewPost";
import { useData } from "@/context/DataContext";
import { useRouter, useSearchParams } from "next/navigation";
import { set } from "date-fns";

type Category = 'all' | 'product' | 'makerlog' | 'club';

const Center = () => {
    const { users, posts, loading } = useData();
    const [items, setItems] = useState<any[]>([]);
    const [sort, setSort] = useState<string>('best');
    const [category, setCategory] = useState<Category>('all');
    const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();

    const updateUrlParams = (newParams: { [key:string]: string}) => {
        const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
        Object.keys(newParams).forEach(key => {
            currentParams.set(key, newParams[key]);
        });
        const newUrl = `${window.location.pathname}?${currentParams.toString()}`;
        router.push(newUrl);
    };

    const setCategoryAll = () => {
        setCategory('all');
        updateUrlParams({category: 'all'});
    };
    const setCategoryProduct = () => {
        setCategory('product');
        updateUrlParams({category: 'product'});
    };
    const setCategoryMakerlog = () => {
        setCategory('makerlog');
        updateUrlParams({category: 'makerlog'});
    }
    const setCategoryClub = () => {
        setCategory('club');
        updateUrlParams({category: 'club'});
    };

    const categorySlider = (category:Category) => {
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

    const handleSortbest = () => {
        setSort('best');
        updateUrlParams({sort: 'best'});
    };

    const handleSortNewest = () => {
        setSort('newest');
        updateUrlParams({sort: 'newest'});
    };

    useEffect(() => {
        const selectedCategory = searchParams.get('category');
        const selectedSort = searchParams.get('sort');

        if(selectedCategory) {
            setCategory(selectedCategory as Category);
        }

        if(selectedSort) {
            setSort(selectedSort);
        }
        
        let filtered = [...posts];

        if(selectedCategory && selectedCategory !== 'all') {
            filtered = filtered.filter(post => post.category === selectedCategory);
        }

        if(selectedSort === 'best') {
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
        <div></div>
    )
};