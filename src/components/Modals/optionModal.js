import { useRecoilState } from "recoil";
import { feedMoreButtonClickState } from "../../states/states";
import { ArticleContext, Wrapper } from "./styles";

export default function OptionModal() {
  const [, setFeedMoreButtonClick] = useRecoilState(feedMoreButtonClickState);

  return (
    <Wrapper>
      <div>
        <label>삭제</label>
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
