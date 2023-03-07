import styled from "styled-components";

const Login = () => {
  return (
    <Group>
      <TextArea>
        <Title>JWT 연습</Title>
      </TextArea>
      <InputArea>
        <Input type="text" placeholder="아이디를 입력하세요" />
        <Input type="password" placeholder="비밀번호를 입력하세요" />
      </InputArea>
      <ButtonArea>
        <Button>로그인</Button>
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
