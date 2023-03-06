import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";

const List = () => {
  const [lists, setLists] = useState<any>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/posts")
      .then((res) => res.json())
      .then((res) => setLists(res));
  }, []);

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
        {lists.map((list: any, idx: number) => (
          <tr key={idx}>
            <BodyNo>
              <BodyFont>
                <Link href={"/" + parseInt(list.no)}>{list.no}</Link>
              </BodyFont>
            </BodyNo>
            <BodyName>
              <BodyFont>{list.title}</BodyFont>
            </BodyName>
            <BodyNickName>
              <BodyFont>{list.nickname}</BodyFont>
            </BodyNickName>
          </tr>
        ))}
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
