import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";

const endpoint = "api/vi/";

type Blog = {
  title: string;
  body: string;
};

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  console.log(props.contents[0].title);

  return <div className="text-blue-500">Hello!</div>;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: data,
  };
};
