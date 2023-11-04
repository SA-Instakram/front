import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styles";
import Header from "../../components/Header/header";
import FeedCard from "../../components/FeedCard/feedCard";

export default function Main() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </Wrapper>
  );
}
