import { GetServerSideProps, NextPage } from "next";

const Contact: NextPage = (props: any) => {
  return (
    <>
      <h1>Contact page</h1>
      <div>{props.data}</div>
      <img alt="Some alt" src="https://images.unsplash.com/photo-1520004434532-668416a08753?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
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