import { useNavigate } from "react-router-dom";
import { ContentBox, HeadWrapper, PhotoBox, Wrapper } from "./styles";
import { useState } from "react";

export default function NewFeed() {
  const navigate = useNavigate();

  const [isUpload, setIsUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    console.log("event", event);
    setIsUpload(true);

    const file = event.target.files[0]; // 선택한 파일

    setSelectedFile(file);

    // 파일을 읽고 이미지 미리보기 생성
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
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
          onClick={() => {
            navigate("/");
          }}
          style={{ color: "#0095F6", marginRight: "16px" }}
        >
          게시
        </label>
      </HeadWrapper>

      <PhotoBox>
        <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
          {isUpload ? (
            <div style={{ padding: "10px" }}>
              <img
                src={imagePreview}
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
      <ContentBox></ContentBox>
    </Wrapper>
  );
}
