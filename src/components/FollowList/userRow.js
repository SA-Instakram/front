import { useNavigate } from "react-router-dom";
import { EachUserRow } from "./styles";

export default function UserRow(props) {
  const navigate = useNavigate();

  return (
    <EachUserRow>
      <div>
        <img
          width="44px"
          height="44px"
          src="/images/default_profile.jpeg"
          alt="profile"
        />
        <div style={{ marginLeft: "10px" }}>
          <span>{props.name}</span>
          <span style={{ textAlign: "left", margin: "10px 0px" }}>
            {props.name}
          </span>
        </div>
      </div>
      <div>
        <button style={{ marginLeft: "10px" }}>삭제</button>
      </div>
    </EachUserRow>
  );
}
