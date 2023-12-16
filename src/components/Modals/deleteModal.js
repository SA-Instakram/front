import { useRecoilState } from "recoil";
import { deleteModalState } from "../../states/states";
import { Wrapper } from "./styles";
import postAPI from "../../api/postAPI";

export default function DeleteModal(props) {
  const [, setDeleteModalState] = useRecoilState(deleteModalState);

  const handleDeleteButtonClick = (postId) => {
    postAPI
      .deletePost(postId)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <div>
        <p style={{ margin: "30px 0px" }}>정말 삭제하시겠습니까?</p>
        <div></div>
        <label
          style={{ color: "red", fontWeight: "bold" }}
          onClick={() => {
            handleDeleteButtonClick(props.postId);
            setDeleteModalState(false);
          }}
        >
          삭제
        </label>
        <div></div>
        <label
          onClick={() => {
            setDeleteModalState(false);
          }}
        >
          취소
        </label>
      </div>
    </Wrapper>
  );
}
