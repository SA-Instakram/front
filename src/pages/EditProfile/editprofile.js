import { useNavigate } from "react-router-dom";
import {
  HeadWrapper,
  Wrapper,
  InputWrapper,
  Label,
  Input,
  ImagePreview,
} from "./styles";
import { useState } from "react";
import profileAPI from "../../api/profileAPI";

export default function EditProfile() {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(
    "/images/default_profile.jpeg"
  );
  const [isImageChanged, setIsImageChanged] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setIsImageChanged(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleModifyProfile = () => {
    const data = {
      instaId: "ji-hunc",
      introduce: "aaaa",
      image: "image",
      name: "qwe",
    };

    profileAPI
      .editProfile(data)
      .then((res) => {
        console.log(res);
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <HeadWrapper>
        <img
          style={{ marginLeft: "16px" }}
          src={"/icons/leftarrow.svg"}
          alt="exit editprofile"
          onClick={() => {
            navigate(-1);
          }}
        />
        <label style={{ fontWeight: "bold", marginRight: "180px" }}>
          프로필 편집
        </label>
        <img
          style={{ marginLeft: "16px" }}
          src={"/icons/check.svg"}
          alt="succes editprofile"
          onClick={() => {
            navigate(-1);
            handleModifyProfile();
          }}
        ></img>
      </HeadWrapper>
      <InputWrapper>
        {isImageChanged ? (
          <ImagePreview src={imagePreview} alt="Selected Preview" />
        ) : (
          <ImagePreview src={imagePreview} alt="Default Preview" />
        )}
        <label
          htmlFor="fileInput"
          style={{ color: "blue", textAlign: "center" }}
        >
          사진 수정
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <Label>이름</Label>
        <Input></Input>
        <Label>사용자 이름</Label>
        <Input></Input>
        <Label>소개</Label>
        <Input></Input>
      </InputWrapper>
    </Wrapper>
  );
}
