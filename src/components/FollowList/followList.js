import { useNavigate } from "react-router-dom";
import { CloseButton, Wrapper } from "./styles";
import { useRecoilState } from "recoil";
import { followListClickState } from "../../states/states";
import UserRow from "./userRow";

export default function FollowList() {
  const navigate = useNavigate();
  const [, setFollowListClick] = useRecoilState(followListClickState);

  const clickExitButton = () => {
    setFollowListClick(false);
  };

  const followList = [
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Neymar Jr Kylian Mbappé",
    "Kylian Mbappé",
    "Sergio Ramos",
    "Kevin De Bruyne",
    "Mohamed Salah",
    "Harry Kane",
    "Erling Haaland",
    "Robert Lewandowski",
    "Luka Modrić",
    "Karim Benzema",
    "Gianluigi Buffon",
    "Andres Iniesta",
    "Xavi Hernandez",
    "David Beckham",
    "Zinedine Zidane",
  ];

  return (
    <Wrapper>
      <div>
        <CloseButton
          src="/icons/x-circle.svg"
          onClick={() => {
            clickExitButton();
          }}
        />
        {followList.map((key, idx) => {
          return <UserRow name={key} />;
        })}
      </div>
    </Wrapper>
  );
}
