import { useRecoilState } from "recoil";
import {
  deleteModalState,
  feedMoreButtonClickState,
} from "../../states/states";
import { Wrapper } from "./styles";

export default function OptionModal() {
  const [, setFeedMoreButtonClick] = useRecoilState(feedMoreButtonClickState);
  const [, setDeleteModalState] = useRecoilState(deleteModalState);

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
        <label>수정</label>
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
