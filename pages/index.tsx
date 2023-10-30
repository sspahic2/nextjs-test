import { GetStaticProps } from "next";

const Home = (props: any) => {
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
    </>
  );
};

export const getStaticProps: GetStaticProps = async() => {
  return {
    props: {
      data: ['a', 'b', 'c', 'd']
    }
  }
}

export default Home;