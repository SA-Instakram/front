import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styles";
import Header from "../../components/Header/header";
import FeedCard from "../../components/FeedCard/feedCard";
import { useRecoilState } from "recoil";
import Comment from "../../components/Comment/comment";
import {
  commentViewClickState,
  deleteModalState,
  feedMoreButtonClickState,
} from "../../states/states";
import OptionModal from "../../components/Modals/optionModal";
import DeleteModal from "../../components/Modals/deleteModal";
import { useEffect, useState } from "react";
import postApi from "../../api/postAPI";

export default function Main() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([
    {
      nickName: "ronaldo",
      image: "q",
      like: 1,
      content: "dummy data",
      postDate: 11,
    },
    {
      nickName: "ronaldo",
      image: "q",
      like: 1,
      content: "dummt data2",
      postDate: 11,
    },
  ]);

  useEffect(() => {
    postApi
      .getPosts()
      .then((res) => {
        setPosts(res.data);
        console.log("allposts", res);
      })
      .catch((error) => console.log(error));
  }, []);

  const [commentViewClick] = useRecoilState(commentViewClickState);

  return (
    <Wrapper>
      <Header />
      <FeedCard
        nickName={"Messi"}
        image={""}
        like={365}
        content={
          "The export default keywords specify the main component in the file. If you’re not familiar with some piece of JavaScript syntax, MDN and javascript.info have great references."
        }
        postDate={2}
      />
      {posts.map((post, idx) => (
        <FeedCard
          key={idx}
          nickName={post.member_id}
          image={post.image}
          like={post.like}
          content={post.content}
          postDate={post.created_time}
          postId={post.postId}
        />
      ))}
    </Wrapper>
  );
}
