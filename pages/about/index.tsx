import { GetStaticProps } from "next";

const About = (props: {data: number[]}) => {
  return (
    <>
      <div>Hello About!</div>
      {
        props.data.map((ele: number) => {
          return (<div key={ele}>{ele}</div>)
        })
      }
    </>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const data = [1, 2, 3];
  return {
    props: {
      data: data
    },
    revalidate: 40
  }
};

export default About;