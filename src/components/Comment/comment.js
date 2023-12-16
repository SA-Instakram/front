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
import { useEffect, useState } from "react";
import commentAPI from "../../api/commentAPI";
import { userInfoState } from "../../states/userStates";

export default function Comment(props) {
  const navigate = useNavigate();

  const [userInfo] = useRecoilState(userInfoState);
  const [, setCommentViewClick] = useRecoilState(commentViewClickState);
  const [content, setContent] = useState();

  const clickCancelCommentButton = () => {
    setCommentViewClick(false);
  };

  const handlePostComment = () => {
    const data = {
      userName: userInfo.userId,
      content: content,
      postId: props.postId,
    };
    console.log(data);
    commentAPI
      .postComment(data)
      .then((res) => {
        console.log(res);
      })
      .then((error) => console.log(error));
  };

  const handleChangeInput = (event) => {
    setContent(event.currentTarget.value);
  };

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
        {props.comments
          ? props.comments.map((comment, idx) => {
              return (
                <UserComment
                  nickName={comment.nickName}
                  comment={comment.content}
                />
              );
            })
          : null}
        <NewCommentBox>
          <img src="/icons/user.svg" alt="profile" />
          <CommentInput onChange={handleChangeInput} />
          <label onClick={handlePostComment} style={{ color: "#0000ff" }}>
            게시
          </label>
        </NewCommentBox>
      </div>
    </Wrapper>
  );
}
