import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styles";
// import newFeedIcon from "../../../public/icons/newFeed.svg";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>Instakram</h1>
      <div>
        <img src={"/icons/search.svg"}></img>
        <img src={"/icons/plus-square.svg"} />
        <img
          src={"/icons/user.svg"}
          onClick={() => {
            navigate("/profile");
          }}
        />
      </div>
    </Wrapper>
  );
}
