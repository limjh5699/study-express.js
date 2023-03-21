import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";

const Login = () => {
  const router = useRouter();

  const [cookie, setCookie] = useCookies(["accessToken"]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickHandler = () => {
    fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 201) {
          router.push("/");
        } else if (data.code === 401) {
          alert(data.message);
        }
      });
  };

  if (cookie.accessToken) router.push("/");

  return (
    <Group>
      <TextArea>
        <Title>JWT 연습</Title>
      </TextArea>
      <InputArea>
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력하세요"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />
      </InputArea>
      <ButtonArea>
        <Button onClick={() => onClickHandler()}>로그인</Button>
      </ButtonArea>
    </Group>
  );
};

const Group = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid #000;
  border-radius: 30px;
`;

const TextArea = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 30px;
`;

const InputArea = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled.input`
  width: 450px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 15px;
  padding: 0px 15px;

  :focus {
    outline: none;
  }
`;

const ButtonArea = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 150px;
  height: 60px;
`;

export default Login;
