import { useNavigate, useLocation } from "react-router-dom";
import { ContentBox, HeadWrapper, PhotoBox, Wrapper } from "./styles";
import { useEffect, useState } from "react";
import postApi from "../../api/postAPI";
import Comment from "../../components/Comment/comment";
import { useRecoilState } from "recoil";
import { commentViewClickState } from "../../states/states";
import { userInfoState } from "../../states/userStates";

export default function NewFeed() {
  const location = useLocation();
  const navigate = useNavigate();
  const modifyInfo = location.state ? location.state.data : null;

  const [isUpload, setIsUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64Image, setBase64Image] = useState(null);
  const [content, setContent] = useState("");
  const [userInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    if (location.state) {
      console.log("location.state", location.state);
      setBase64Image(location.state.data.image);
      setContent(location.state.data.content);
      setIsUpload(true);
    }
  }, []);

  const handleFileChange = (event) => {
    console.log("event", event);
    setIsUpload(true);

    const file = event.target.files[0]; // 선택한 파일

    setSelectedFile(file);

    // 파일을 읽고 이미지 미리보기 생성
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBase64Image(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setBase64Image(null);
    }
  };

  const handlePost = () => {
    if (modifyInfo) {
      // 게시글 수정 모드
      const data = {
        writer: userInfo.userId,
        image: base64Image,
        content: content,
      };
      postApi
        .modifyPost(location.state.data.postId, data)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // 게시글 최초 작성 모드
      if (base64Image || content) {
        const data = {
          writer: userInfo.userId,
          image: base64Image,
          content: content,
        };

        console.log("data", data);
        postApi
          .requestPost(data)
          .then((res) => {
            console.log(res);
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  };

  const handleChangeContent = (event) => {
    setContent(event.currentTarget.value);
  };

  return (
    <Wrapper>
      <HeadWrapper>
        <img
          style={{ marginLeft: "16px" }}
          src={"/icons/x.svg"}
          alt="exit newFeed"
          onClick={() => {
            navigate(-1);
          }}
        />
        <label>새 게시글 작성</label>
        <label
          onClick={handlePost}
          style={{ color: "#0095F6", marginRight: "16px" }}
        >
          {modifyInfo ? "수정" : "게시"}
        </label>
      </HeadWrapper>

      <PhotoBox>
        <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
          {isUpload ? (
            <div style={{ padding: "10px" }}>
              <img
                src={base64Image}
                alt="Preview"
                style={{ maxWidth: "100%" }}
              />
            </div>
          ) : (
            <div style={{ padding: "120px" }}>
              <img width="100%" src="/icons/camera.svg" alt="Select a file" />
            </div>
          )}
        </label>
        <input
          id="fileInput"
          type="file"
          accept=".jpg, .jpeg, .png, .gif"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </PhotoBox>
      <ContentBox
        value={content}
        placeholder="내용을 작성해주세요"
        onChange={handleChangeContent}
      ></ContentBox>
    </Wrapper>
  );
}
