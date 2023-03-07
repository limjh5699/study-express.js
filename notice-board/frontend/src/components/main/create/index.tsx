import { useState } from "react";
import styled from "styled-components";

const Create = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const onClickHandler = () => {
    fetch("http://localhost:3001/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        detail: detail,
        nickname: nickname,
        password: password,
      }),
    }).then(() => {
      alert("성공");
      window.location.href = "/";
    });
  };

  return (
    <div>
      <h1>글 생성</h1>
      <br />
      <div>
        제목{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        별명{" "}
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </div>
      <div>
        글 내용{" "}
        <input
          type="text"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
      </div>
      <div>
        비밀번호{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button onClick={onClickHandler}>버튼</Button>
    </div>
  );
};

const Button = styled.button`
  width: 50px;
  height: 30px;
`;

export default Create;
