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
        <img
          width="100%"
          src="https://scontent-ssn1-1.cdninstagram.com/v/t39.30808-6/399151431_18320227459106835_8366770210443339126_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=-hQz_ROJ9H4AX-V75C8&edm=AJ9x6zYAAAAA&ccb=7-5&ig_cache_key=MzIyODU1NTkzNzM4ODU3NzIxOQ%3D%3D.2-ccb7-5&oh=00_AfDiuIQwpMKnOw6fDM0m_w72pbQgspg99uB7oQbrxSAtOw&oe=654AF2DA&_nc_sid=65462d"
          alt="photos"
        />
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
