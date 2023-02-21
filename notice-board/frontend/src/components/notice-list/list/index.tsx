import styled from "styled-components";

const List = () => {
  return (
    <Table>
      <thead>
        <tr>
          <HeadNo>
            <HeadFont>No</HeadFont>
          </HeadNo>
          <HeadName>
            <HeadFont>제목</HeadFont>
          </HeadName>
          <HeadNickName>
            <HeadFont>닉네임</HeadFont>
          </HeadNickName>
        </tr>
      </thead>
      <tbody>
        <tr>
          <BodyNo>
            <BodyFont>1</BodyFont>
          </BodyNo>
          <BodyName>
            <BodyFont>김</BodyFont>
          </BodyName>
          <BodyNickName>
            <BodyFont>임</BodyFont>
          </BodyNickName>
        </tr>
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
`;

const HeadNo = styled.th`
  width: 30%;
  border: 1px solid black;
`;

const HeadName = styled.th`
  width: 40%;
  border: 1px solid black;
`;

const HeadNickName = styled.th`
  width: 30%;
  border: 1px solid black;
`;

const HeadFont = styled.p`
  color: #55c9ff;
  font-size: 30px;
`;

const BodyNo = styled.td`
  width: 30%;
  border: 1px solid black;
  text-align: center;
`;

const BodyName = styled.td`
  width: 40%;
  border: 1px solid black;
  text-align: center;
`;

const BodyNickName = styled.td`
  width: 30%;
  border: 1px solid black;
  text-align: center;
`;

const BodyFont = styled.p`
  color: black;
  font-size: 30px;
`;

export default List;
