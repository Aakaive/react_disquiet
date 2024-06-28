import React from 'react';
import Link from 'next/link';
import JoinMakerItem from '@/components/common/Right/JoinMakerItem';
import { useData } from '@/context/DataContext';

const JoinMaker = () => {
  const { data, loading } = useData();

  if (loading) {
    return <div>Loading...</div>;
  }

  const ThreeItems = data.slice(0,3);

  return (
    <div className="flex flex-col mb-[20px] gap-[14px]">
      <div>
        <div className="items-center flex flex-row h-[13px] w-full text-[13px] leading-[13px] font-medium gap-[4px]">
          <div>🐣</div>
          <div>새로 조인한 메이커</div>
        </div>
      </div>

      <div className="flex flex-col p-1 bg-white rounded-[14px] gap-[4px]">
        {ThreeItems.map(item => (
          <JoinMakerItem key={item.userId} link="#" image={item.profileImage} name={item.name} role={item.task} />
        ))}
        <Link href="#"
          className="m-[6px] p-[6px] text-[12px] leading-[12px] text-center
          decoration-[rgb(109,85,255)] whitespace-nowrap text-[rgb(109,85,255)]
          bg-[rgb(240,238,255)] border-[1px] border-[rgba(109,85,255,0)]
          transition-all transition-delay-0 transition-duration-100 ease-out
          rounded-[8px]
          hover:shadow-[0_0_0_3px_rgba(109,85,255,0.4)]"
        >
          더보기
        </Link>
      </div>
    </div>
  );
};

export default JoinMaker;
