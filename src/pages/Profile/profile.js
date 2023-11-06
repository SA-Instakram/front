import Header from "../../components/Header/header";
import { Wrapper } from "./styles";

export default function Profile() {
  const images = [
    "vava.jpeg",
    "vava1.jpeg",
    "vava2.jpeg",
    "vava.jpeg",
    "vava1.jpeg",
    "vava2.jpeg",
  ];

  return (
    <Wrapper>
      <Header />
      <div style={{ padding: "16px" }}>
        <div style={{ display: "flex" }}>
          <img
            width="80px"
            height="80px"
            src="/images/default_profile.jpeg"
            alt="profile"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "30px",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <label>Messi is GOD</label>
            <button style={{ marginTop: "10px" }}>프로필 편집 or 팔로우</button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
            alignItems: "start",
          }}
        >
          <label>리오넬 메시</label>
          <label>KMU SOFTWARE 19</label>
          <a href="https://github.com/SA-Instakram/front">github.com</a>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-around",
          borderTop: "1.4px solid #dbdbdb",
          borderBottom: " 1.4px solid #dbdbdb",
          padding: "12px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>게시물</label>
          <label>3</label>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>팔로워</label>
          <label>31</label>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>팔로우</label>
          <label>31</label>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
          gridGap: "10px",
        }}
      >
        {images.map((key, idx) => {
          return <img width={110} src={`/images/${key}`} />;
        })}
      </div>
    </Wrapper>
  );
}
