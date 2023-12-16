import { useRecoilState } from "recoil";
import {
  deleteModalState,
  feedMoreButtonClickState,
} from "../../states/states";
import { Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./deleteModal";

export default function OptionModal(props) {
  const [, setFeedMoreButtonClick] = useRecoilState(feedMoreButtonClickState);
  const [deleteModal, setDeleteModalState] = useRecoilState(deleteModalState);

  const navigate = useNavigate();

  const handleModifyClick = () => {
    const data = {
      image: props.image,
      content: props.content,
      postId: props.postId,
    };
    navigate("/newFeed", { state: { data: data } });
  };

  return (
    <Wrapper>
      <div>
        <label
          onClick={() => {
            setFeedMoreButtonClick(false);
            setDeleteModalState(true);
          }}
        >
          삭제
        </label>
        <div></div>
        <label
          onClick={() => {
            handleModifyClick();
            setFeedMoreButtonClick(false);
          }}
        >
          수정
        </label>
        <div></div>
        <label
          onClick={() => {
            setFeedMoreButtonClick(false);
          }}
        >
          취소
        </label>
      </div>
    </Wrapper>
  );
}
