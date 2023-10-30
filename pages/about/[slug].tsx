import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const Page: NextPage = (props: any) => {
  return(
    <>
      <h1>About {props.data}</h1>
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
      revalidate: 6
    }
  };
};

export default Page;