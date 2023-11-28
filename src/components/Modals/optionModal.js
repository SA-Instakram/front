import { useRecoilState } from "recoil";
import {
  deleteModalState,
  feedMoreButtonClickState,
} from "../../states/states";
import { Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";

export default function OptionModal() {
  const [, setFeedMoreButtonClick] = useRecoilState(feedMoreButtonClickState);
  const [, setDeleteModalState] = useRecoilState(deleteModalState);

  const navigate = useNavigate();

  const handleLabelClick = () => {
    navigate("/modifyfeed"); // '/edit' 페이지로 이동
  };

  return (
    <Wrapper>
      <div>
        <label
          onClick={() => {
            setDeleteModalState(true);
            setFeedMoreButtonClick(false);
          }}
        >
          삭제
        </label>
        <div></div>
        <label onClick={handleLabelClick}>수정</label>
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
