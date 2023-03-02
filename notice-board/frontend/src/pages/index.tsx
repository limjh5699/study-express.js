import styled from "styled-components";
import List from "@/components/main/list";
import Writing from "@/components/main/view";

const Main = () => {
  return (
    <Layout>
      <Size>
        <List />
        {/* <Writing /> */}
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
