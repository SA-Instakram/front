import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styles";
import Header from "../../components/Header/header";

export default function Main() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}
