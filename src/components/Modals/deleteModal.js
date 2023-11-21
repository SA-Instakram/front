import { useRecoilState } from "recoil";
import { deleteModalState } from "../../states/states";
import { Wrapper } from "./styles";

export default function DeleteModal() {
  const [, setDeleteModalState] = useRecoilState(deleteModalState);

  return (
    <Wrapper>
      <div>
        <p style={{ margin: "30px 0px" }}>정말 삭제하시겠습니까?</p>
        <div></div>
        <label
          style={{ color: "red", fontWeight: "bold" }}
          onClick={() => {
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
