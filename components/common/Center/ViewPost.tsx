import React from "react";
import ViewMakerlog from "./ViewMakerlog";
import ViewPostHeader from "./ViewPostHeader";

interface PostProps {
    PostId : string;
}

const ViewPost : React.FC<PostProps> = ({PostId}) => {
    return (
        <div>
            {/* 전체 랲퍼 */}
            <ViewPostHeader />
            <ViewMakerlog PostId={PostId} />
                {/* 메인은 카테고리(프로덕트, 메이커로그, 클럽 개설)에 맞는 뷰 컴포넌트 호출(프롭스 전달) */}
                {/* 게시글 데이터 모델이 공통인지 개별인데 다 같이 표시되는건지 물어보기(그냥 공통으로 만들어서 해도 될듯)*/}
                {/* 
                    게시글 어트리뷰트
                    1. PostId(게시글 고유 식별자)
                    2. 카테고리(프로덕트/메이커로그/클럽)
                    3. 태그(메이커로그 태그)
                    4. 작성자 프로필(프로필 사진, 이름, 직무 등)
                    5. 게시글 제목
                    6. 게시글 내용
                    7. 게시글 어태치먼트(댓글, 업보트 등)
                */}
        </div>
    );
};

export default ViewPost;