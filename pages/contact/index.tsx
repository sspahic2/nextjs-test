import { GetServerSideProps, NextPage } from "next";

const Contact: NextPage = (props: any) => {
  return (
    <>
      <h1>Contact page</h1>
      <div>{props.data}</div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async(context) => {
  return {
    props: {
      data: "Some data as you can see. " + context.locale
    }
  }
}

export default Contact;