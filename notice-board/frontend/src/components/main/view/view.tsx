import styled from "styled-components";
import { useEffect, useState } from "react";

const View = ({ props }: { props?: string | string[] }) => {
  const id = props;
  const [post, setPost] = useState<any>();

  useEffect(() => {
    fetch("http://localhost:3001/api/posts/" + id)
      .then((res) => res.json())
      .then((res) => setPost(res[0]));
  }, [id]);

  const gotoEdit = () => {
    window.location.href = "/edit/" + id;
  };

  const deletePost = () => {
    if (confirm("정말 삭제하시겠습니까?")) {
      fetch("http://localhost:3001/api/posts/" + id, {
        method: "DELETE",
      })
        .then(() => alert("삭제되었습니다."))
        .then(() => {
          window.location.href = "/";
        });
    } else {
      return;
    }
  };

  if (post == undefined) {
    return <div>로딩중</div>;
  } else {
    return (
      <div>
        <TitleFont>{post.title}</TitleFont>
        <NormalFont>{post.nickname}</NormalFont>
        <NormalFont>{post.detail}</NormalFont>
        <div>
          <Button type="button" value={"수정"} onClick={gotoEdit} />
          <Button type="button" value={"삭제"} onClick={deletePost} />
        </div>
      </div>
    );
  }
};

const TitleFont = styled.h1`
  font-size: 30px;
`;

const NormalFont = styled.p`
  font-size: 20px;
`;

const Button = styled.input`
  width: 100px;
  height: 30px;
`;

export default View;
