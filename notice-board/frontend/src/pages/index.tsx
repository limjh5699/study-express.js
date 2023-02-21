import styled from "styled-components";
import List from "@/components/notice-list/list";

const Main = () => {
  return (
    <Layout>
      <Size>
        <List />
      </Size>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Size = styled.div`
  width: 85vw;
  height: 80vh;
  /* background-color: blue; */
`;

export default Main;
