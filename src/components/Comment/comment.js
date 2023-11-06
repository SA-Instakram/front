import { useNavigate } from "react-router-dom";
import {
  ArticleContext,
  CloseButton,
  CommentInput,
  NewCommentBox,
  Wrapper,
} from "./styles";
import { useRecoilState } from "recoil";
import { commentViewClickState } from "../../states/states";
import UserComment from "./userComment";

export default function Comment() {
  const navigate = useNavigate();
  const [, setCommentViewClick] = useRecoilState(commentViewClickState);

  const clickCancelCommentButton = () => {
    setCommentViewClick(false);
  };

  const commonComments = [
    "Awesome!",
    "Love it!",
    "Followed!",
    "Looks amazing!",
  ];

  return (
    <Wrapper>
      <div>
        <CloseButton
          src="/icons/x-circle.svg"
          onClick={() => {
            clickCancelCommentButton();
          }}
        />
        <ArticleContext>
          <img src="/icons/user.svg" alt="profile" />
          <div>
            <span>NickName</span>
            <span style={{ textAlign: "left", margin: "10px 0px" }}>
              The export default keywords specify the main component in the
              file. If you’re not familiar with some piece of JavaScript syntax,
              MDN and javascript.info have great references.
            </span>
          </div>
        </ArticleContext>
        {commonComments.map((key, idx) => {
          return <UserComment comment={key} />;
        })}
        <NewCommentBox>
          <img src="/icons/user.svg" alt="profile" />
          <CommentInput />
          <label style={{ color: "#0000ff" }}>게시</label>
        </NewCommentBox>
      </div>
    </Wrapper>
  );
}
