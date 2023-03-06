import styled from "styled-components";
import Edit from "@/components/main/edit";
import { useRouter } from "next/router";

const EditPage = () => {
  const router = useRouter();
  const params = router.query.id;

  return (
    <div>
      <Edit props={params} />
    </div>
  );
};

export default EditPage;
