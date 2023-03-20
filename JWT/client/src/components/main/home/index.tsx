import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

const fetcher = (url: string | URL) => {
  return fetch(url, { method: "GET", credentials: "include" }).then((res) =>
    res.json()
  );
};

const Home = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    "http://localhost:3001/api/checkTokens",
    fetcher
  );

  const Logout = () => {
    fetch("http://localhost:3001/api/logout", {
      method: "GET",
      credentials: "include",
    }).then(() => router.push("/login"));
  };

  if (error) return <div>Faild to load</div>;
  else if (!data) return <div>loading..</div>;
  return (
    <div>
      <div>{data.message}</div>
      <button onClick={() => Logout()}>로그아웃</button>
    </div>
  );
};

export default Home;
