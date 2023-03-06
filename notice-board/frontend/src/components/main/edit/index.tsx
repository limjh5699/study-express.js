import { useEffect, useState } from "react";
import styled from "styled-components";

const Edit = ({ props }: { props?: string | string[] }) => {
  const id = props;
  const [title, setTitle] = useState<string>();
  const [nickname, setNickname] = useState<string>();
  const [detail, setDetail] = useState<string>();
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3001/api/posts/" + id)
      .then((res) => res.json())
      .then((res) => {
        if (res.length == 1) {
          setTitle(res[0].title);
          setNickname(res[0].nickname);
          setDetail(res[0].detail);
        }
      });
  }, [id]);

  const checkPassword = () => {
    fetch("http://localhost:3001/api/checkPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        password: password,
      }),
    }).then((res) => {
      if (res.status == 200) {
        alert("성공");
        editPost();
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    });
  };

  const editPost = () => {
    fetch("http://localhost:3001/api/posts/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        title: title,
        detail: detail,
        nickname: nickname,
      }),
    }).then((res) => {
      window.location.href = "/";
    });
  };

  if (title == undefined) {
    return <div>로딩중</div>;
  } else {
    return (
      <div>
        <h1>글 수정</h1>
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
          비밀번호 확인{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button onClick={checkPassword}>버튼</Button>
      </div>
    );
  }
};

const Button = styled.button`
  width: 50px;
  height: 30px;
`;

export default Edit;
