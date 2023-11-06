import { useNavigate } from "react-router-dom";
import { EachComment, Wrapper } from "./styles";
import { useRecoilState } from "recoil";
import { commentViewClickState } from "../../states/states";

export default function UserComment(props) {
  const navigate = useNavigate();
  const [, setCommentViewClick] = useRecoilState(commentViewClickState);

  const clickCancelCommentButton = () => {
    setCommentViewClick(false);
  };

  return (
    <EachComment>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img src="/icons/user.svg" alt="profile" />
        <div>
          <span>NickName</span>
          <span style={{ textAlign: "left", margin: "10px 0px" }}>
            {props.comment}
          </span>
          <div style={{ display: "flex" }}>
            <span>좋아요 365개</span>
            <span style={{ marginLeft: "10px" }}>답글달기</span>
          </div>
        </div>
      </div>
    </EachComment>
  );
}
