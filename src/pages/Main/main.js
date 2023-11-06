import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styles";
import Header from "../../components/Header/header";
import FeedCard from "../../components/FeedCard/feedCard";
import { useRecoilState } from "recoil";
import Comment from "../../components/Comment/comment";
import { commentViewClickState } from "../../states/states";

export default function Main() {
  const navigate = useNavigate();

  const [commentViewClick, setCommentViewClick] = useRecoilState(
    commentViewClickState
  );

  return (
    <Wrapper>
      <Header />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      {commentViewClick ? <Comment /> : null}
    </Wrapper>
  );
}
