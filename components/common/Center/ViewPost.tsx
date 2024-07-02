import React from "react";
import ViewPostMakerlog from "./ViewPostMakerlog";
import ViewPostHeader from "./ViewPostHeader";
import { useData } from "@/context/DataContext";
import ViewPostProduct from "./ViewPostProduct";

interface PostProps {
    postNum : number;
}

const ViewPost : React.FC<PostProps> = ({postNum}) => {
    const { users, posts, loading } = useData();

    const post = posts.find(post => post.postNum === postNum);
    const user = users.find(user => user.userId === post?.userId);

    const callViewer = () => {
        if(post?.category === 'makerlog'){
            return <ViewPostMakerlog postNum={postNum} />;
        }
        else if(post?.category === 'product'){
            return <ViewPostProduct postNum={postNum} />;
        }
    };



    if(loading) {
        return <div>loading...</div>;
    }

    return (
        <div className="cursor-pointer">
            <ViewPostHeader postNum={postNum} />
            {callViewer()}
        </div>
    );
};

export default ViewPost;