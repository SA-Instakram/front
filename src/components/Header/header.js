import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styles";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>Instakram</h1>
      <div>
        <span>검색</span>
        <img src={"../public/icons/newFeed.svg"} />
        <span>글쓰기</span>
        <span
          onClick={() => {
            navigate("/profile");
          }}
        >
          프로필
        </span>
      </div>
    </Wrapper>
  );
}
