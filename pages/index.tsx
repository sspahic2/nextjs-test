import { GetStaticProps } from "next";

const Home = (props: { data: string[], date: string }) => {
  return (
    <>
      <div>Hello World! Again!</div>
      <div>
        {
          props.data.map((ele: string) => {
            return (<div key={ele}>{ele}</div>)
          })
        }
      </div>
      <div>{props.date}</div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async() => {
  const date = new Date();
  return {
    props: {
      data: ['a', 'b', 'c', 'd'],
      date: date.toString()
    },
    revalidate: 10
  }
}

export default Home;