import { useNavigate } from "react-router-dom";
import { Article, SpaceBetweenDiv, Wrapper } from "./styles";
import {
  commentViewClickState,
  deleteModalState,
  feedMoreButtonClickState,
} from "../../states/states";
import { useRecoilState } from "recoil";
import { useState } from "react";
import commentAPI from "../../api/commentAPI";
import Comment from "../Comment/comment";
import OptionModal from "../Modals/optionModal";
import DeleteModal from "../Modals/deleteModal";

export default function FeedCard(props) {
  const navigate = useNavigate();

  const [, setCommentViewClick] = useRecoilState(commentViewClickState);
  const [, setFeedMoreButtonClick] = useRecoilState(feedMoreButtonClickState);
  const [commentViewClick] = useRecoilState(commentViewClickState);
  const [isHeartClick, setIsHeartClick] = useState(false);
  const [comments, setComments] = useState();
  const [feedMoreButtonClick] = useRecoilState(feedMoreButtonClickState);
  const [deleteModal, setDeleteModalState] = useRecoilState(deleteModalState);

  const handleClickComment = () => {
    commentAPI
      .getComment(props.postId)
      .then((res) => {
        console.log(res);
        setComments(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setCommentViewClick(true);
    console.log(11);
  };

  return (
    <Wrapper>
      {commentViewClick ? (
        <Comment comments={comments} postId={props.postId} />
      ) : null}
      {feedMoreButtonClick ? (
        <OptionModal
          image={props.image}
          content={props.content}
          postId={props.postId}
        />
      ) : null}
      {deleteModal ? <DeleteModal postId={props.postId} /> : null}
      <SpaceBetweenDiv>
        <div>
          <img
            onClick={() => {
              // TODO navigate userId로 바꿔야함
              navigate(`profile/${props.nickName}`);
            }}
            src="/icons/user.svg"
            alt="profile"
          />
          <span
            onClick={() => {
              // TODO navigate userId로 바꿔야함
              navigate(`profile/${props.nickName}`);
            }}
            style={{ marginLeft: "10px" }}
          >
            {props.nickName}
          </span>
        </div>
        <div>
          <img
            onClick={() => {
              setFeedMoreButtonClick(true);
            }}
            src="/icons/more-horizontal.svg"
            alt="moreInfo"
          />
        </div>
      </SpaceBetweenDiv>

      <div>
        <img width="100%" src={props.image} alt="photos" />
      </div>

      <SpaceBetweenDiv>
        <div>
          {isHeartClick ? (
            <img
              onClick={() => {
                setIsHeartClick(false);
              }}
              src="/icons/heart_fill.svg"
              alt="like_fill"
            />
          ) : (
            <img
              onClick={() => {
                setIsHeartClick(true);
              }}
              src="/icons/heart.svg"
              alt="like"
            />
          )}

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
        <span>좋아요 {props.like}개</span>
        <span style={{ textAlign: "left", margin: "10px 0px" }}>
          {props.content}
        </span>
        <span>{props.postDate}시간 전</span>
      </Article>
    </Wrapper>
  );
}
