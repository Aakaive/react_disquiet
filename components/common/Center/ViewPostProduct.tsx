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
        <div className="flex flex-col mb-[40px] ml-[32px]">
            <div className="relative w-full">
                <div className="items-center flex flex-col p-[16px] bg-white transition-all duration-100 ease-out rounded-[24px] gap-[16px]
                    hover:shadow-[6px_8px_16px_rgba(0,0,0,0.08)] hover:bg-[rgb(253,253,255)] hover:translate-y-[-2px]">
                    <div className="items-center flex w-full gap-[14px]">
                        <div className="h-[80px] min-w-[80px] w-[80px] bg-[rgb(234,234,236)] bg-center bg-cover rounded-[16px]">

                        </div>
                        <div className="flex flex-col h-full justify-between w-full">
                        <h3>{post?.title}</h3>
                        </div>
                    </div>
                    <div className="relative items-center flex flex-wrap justify-between w-full min-w-0 gap-[4px]">
                        <div className="items-center flex basis-0 grow-[0.5] shrink h-[28px] justify-center max-h-[28px] text-[14px] leading-[14px] text-[rgb(172,172,172)] align-center rounded-[8px] outline-none
                            hover:bg-[rgba(142,142,142,0.1)]">
                            {/* 댓글 */}
                            <span className="relative items-center flex h-fit justify-center">
                                <div className="items-center flex justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
                                        className="h-[20px] mr-[4px] overflow-hidden w-[20px] fill-[rgb(172,172,172)] align-middle">
                                        <path d="M8.39141 20.1035C7.93187 20.1035 7.6682 19.7871 7.6682 19.2899V17.1052H6.84705C5.06161 17.1052 3.91652 15.9526 3.91652 14.1219V7.53013C3.91652 5.68443 5.08421 4.59961 6.89978 4.59961H17.0926C18.976 4.59961 20.0834 5.68443 20.0834 7.53013V14.1219C20.0834 15.9601 18.976 17.1052 17.0926 17.1052H12.0979L9.31803 19.6138C8.94135 19.9528 8.70782 20.1035 8.39141 20.1035Z"></path>
                                    </svg>
                                    <div className="min-w-0 overflow-hidden ellipsis whitespace-nowrap">
                                        {post?.comments.length}
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className="relative items-center flex basis-0 grow shrink h-[28px] justify-center max-h-[28px] bg-[rgba(0,0,0,0)] border-[1px] border-[rgba(0,0,0,0)] transition-all duration-100 ease-out rounded-[8px] gap-[4px]
                            hover:bg-[rgba(229,57,127,0.1)] group">
                            {/* 반응 */}
                            <span className="relative items-center flex h-fit justify-center ">
                                <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" 
                                className="h-[22px] overflow-hidden w-[22px] align-middle transition-all duration-100 ease-out fill-[rgb(172,172,172)]
                                    group-hover:fill-[rgb(229,57,127)]">
                                    <path d="M13.9952 24C19.4761 24 24 19.4739 24 14C24 8.52611 19.4664 4 13.9855 4C8.51426 4 4 8.52611 4 14C4 19.4739 8.52392 24 13.9952 24ZM11.0759 13.0522C10.4766 13.0522 9.98357 12.5203 9.98357 11.7853C9.98357 11.0309 10.4766 10.5087 11.0759 10.5087C11.6655 10.5087 12.1682 11.0309 12.1682 11.7853C12.1682 12.5203 11.6655 13.0522 11.0759 13.0522ZM16.9531 13.0522C16.3538 13.0522 15.8705 12.5203 15.8705 11.7853C15.8705 11.0309 16.3538 10.5087 16.9531 10.5087C17.5428 10.5087 18.0551 11.0309 18.0551 11.7853C18.0551 12.5203 17.5428 13.0522 16.9531 13.0522ZM10.4476 16.8433C10.4476 16.6015 10.6892 16.4855 10.9212 16.5919C11.6559 16.9787 12.5162 17.4236 13.9855 17.4236C15.4645 17.4236 16.3248 16.9691 17.0594 16.5919C17.2818 16.4855 17.5331 16.6015 17.5331 16.8433C17.5331 17.5203 16.1121 18.9323 13.9855 18.9323C11.8685 18.9323 10.4476 17.5203 10.4476 16.8433Z"></path>
                                </svg>
                                <div className="min-w-0 overflow-hidden text-[14px] leading-[16px] ellipsis whitespace-nowrap text-[rgb(172,172,172)] transition-all duration-100 ease-out
                                    group-hover:text-[rgb(229,57,127)]">
                                    0
                                </div>
                            </span>
                        </div>
                        <div className="items-center flex basis-0 grow shrink h-[28px] justify-center m-0 p-0 text-[16px] font-medium align-center text-black bg-[rgba(0,0,0,0)] border-[1px] border-[rgba(0,0,0,0)] transition-all duration-100 ease-out rounded-[8px] gap-[4px
                            hover:bg-[rgba(27,206,107,0.1)] group">
                            {/* 업보트(추천) */}
                            <span className="relative items-center flex h-fit justify-center">
                                <div className="items-center flex justfy-center p-0 transition-all duration-100 ease-out rounded-[10px] gap-[4px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
                                        className="overflow-hidden align-middle transition-all duration-100 ease-out fill-[rgb(172,172,172)]
                                            group-hover:fill-[rgb(27,206,107)]">
                                        <path d="M11.9957 21C16.9285 21 21 16.9265 21 12C21 7.0735 16.9198 3 11.987 3C7.06283 3 3 7.0735 3 12C3 16.9265 7.07153 21 11.9957 21ZM11.9957 16.5783C11.5259 16.5783 11.1779 16.2476 11.1779 15.7776V11.5474L11.2649 9.68472L10.4558 10.6944L9.45529 11.7476C9.31609 11.8956 9.116 11.9826 8.8985 11.9826C8.46351 11.9826 8.14161 11.6692 8.14161 11.2427C8.14161 11.0251 8.21121 10.8511 8.35911 10.6944L11.3519 7.66538C11.552 7.44778 11.7521 7.35203 11.9957 7.35203C12.2566 7.35203 12.4567 7.45648 12.6568 7.66538L15.6322 10.6944C15.7888 10.8511 15.8584 11.0251 15.8584 11.2427C15.8584 11.6692 15.5365 11.9826 15.1015 11.9826C14.884 11.9826 14.6839 11.9043 14.5447 11.7476L13.5529 10.7031L12.7351 9.67602L12.8221 11.5474V15.7776C12.8221 16.2476 12.4741 16.5783 11.9957 16.5783Z"></path>
                                    </svg>
                                    <div className="text-[13px] leading-[15.6px] align-middle text-[rgb(172,172,172)] transition-all duration-100 ease-out
                                        group-hover:text-[rgb(27,206,107)]">
                                        0
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className="items-center flex basis-0 grow-[0.75] shrink h-[28px] justify-center max-h-[28px] text-[14px] leading-[14px] text-[rgb(172,172,172)] rounded-[8px]">
                            {/* 조회수 */}
                            <div className="relative items-center flex h-fit justify-center">
                                <div className="items-center flex h-[28px] justify-center max-h-[28px] rounded-[8px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" strokeWidth="2" stroke="currentColor" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12l3 0"></path><path d="M12 3l0 3"></path><path d="M7.8 7.8l-2.2 -2.2"></path><path d="M16.2 7.8l2.2 -2.2"></path><path d="M7.8 16.2l-2.2 2.2"></path><path d="M12 12l9 3l-4 2l-2 4l-3 -9"></path>
                                    </svg>
                                    <div className="min-w=0 overflow-hidden">
                                        {post?.view}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewPostProduct;