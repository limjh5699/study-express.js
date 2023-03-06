import { useRouter } from "next/router";
import styled from "styled-components";
import Component from "@/components/main/view/view";

const View = () => {
  const router = useRouter();
  const params = router.query.id;

  return <Component props={params}></Component>;
};

export default View;
