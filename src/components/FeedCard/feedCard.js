import { useNavigate } from "react-router-dom";
import { Article, SpaceBetweenDiv, Wrapper } from "./styles";
import { commentViewClickState } from "../../states/states";
import { useRecoilState } from "recoil";

export default function FeedCard() {
  const navigate = useNavigate();
  const [, setCommentViewClick] = useRecoilState(commentViewClickState);

  const handleClickComment = () => {
    setCommentViewClick(true);
  };

  return (
    <Wrapper>
      <SpaceBetweenDiv>
        <div>
          <img src="/icons/user.svg" alt="profile" />
          <span style={{ marginLeft: "10px" }}>NickName</span>
        </div>
        <div>
          <img src="/icons/more-horizontal.svg" alt="moreInfo" />
        </div>
      </SpaceBetweenDiv>

      <div>
        <img width="100%" src="images/vava.jpeg" alt="photos" />
      </div>

      <SpaceBetweenDiv>
        <div>
          <img src="/icons/heart.svg" alt="like" />
          <img
            onClick={() => {
              handleClickComment();
            }}
            style={{ marginLeft: "10px" }}
            src="/icons/message-circle.svg"
            alt="comment"
          />
          <img
            style={{ marginLeft: "10px" }}
            src="/icons/send.svg"
            alt="message"
          />
        </div>
        <div>
          <img src="/icons/bookmark.svg" alt="bookmark" />
        </div>
      </SpaceBetweenDiv>

      <Article>
        <span>좋아요 365개</span>
        <span style={{ textAlign: "left", margin: "10px 0px" }}>
          The export default keywords specify the main component in the file. If
          you’re not familiar with some piece of JavaScript syntax, MDN and
          javascript.info have great references.
        </span>
        <span>2시간 전</span>
      </Article>
    </Wrapper>
  );
}
