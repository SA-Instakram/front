import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styles";
import Header from "../../components/Header/header";
import FeedCard from "../../components/FeedCard/feedCard";
import { useRecoilState } from "recoil";
import Comment from "../../components/Comment/comment";
import {
  commentViewClickState,
  feedMoreButtonClickState,
} from "../../states/states";
import OptionModal from "../../components/Modals/optionModal";

export default function Main() {
  const navigate = useNavigate();

  const [commentViewClick] = useRecoilState(commentViewClickState);
  const [feedMoreButtonClick] = useRecoilState(feedMoreButtonClickState);

  return (
    <Wrapper>
      <Header />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      {commentViewClick ? <Comment /> : null}
      {feedMoreButtonClick ? <OptionModal /> : null}
    </Wrapper>
  );
}
