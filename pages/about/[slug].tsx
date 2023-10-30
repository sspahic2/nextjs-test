import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const Page: NextPage = (props: any) => {
  return(
    <>
      <h1>About {props.data}</h1>
      <div>{props.date}</div>
    </>
  )
};

export const getStaticPaths: GetStaticPaths = async() => {
  const data = [1, 2, 3];
  return {
    paths: data.map(ele => `/about/${ele}`),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async(context) => {
  const data = context.params?.slug?.toString();

  return {
    props: {
      data: data,
      date: new Date().toString()
    },
    revalidate: 10
  };
};

export default Page;