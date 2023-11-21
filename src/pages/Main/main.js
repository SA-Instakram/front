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

export default function Main() {
  const navigate = useNavigate();

  const [commentViewClick] = useRecoilState(commentViewClickState);
  const [feedMoreButtonClick] = useRecoilState(feedMoreButtonClickState);
  const [deleteModal] = useRecoilState(deleteModalState);

  return (
    <Wrapper>
      <Header />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      {commentViewClick ? <Comment /> : null}
      {feedMoreButtonClick ? <OptionModal /> : null}
      {deleteModal ? <DeleteModal /> : null}
    </Wrapper>
  );
}
