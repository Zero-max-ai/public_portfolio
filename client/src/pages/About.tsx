import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="w-1/2 max-md:w-9/12 max-sm:w-11/12 mx-auto py-36 max-sm:py-10 flex max-md:flex-col gap-10 items-center">
        <img
          src={
            "https://images.unsplash.com/photo-1536057222397-e51989d3cb8a?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={"profile"}
          className="w-3/12 max-md:w-1/2 rounded-md mx-auto"
        />
        <div>
          <h1 className="geologica-bold text-5xl">Hello, this is Akshat.</h1>
          <div className="flex flex-col gap-6 leading-8 open-sans text-lg py-10">
            <span>
              Hi! I’m from New Delhi, India, and I recently finished my
              Bachelor’s in Computer Applications, with a major in Data Science.
              Tech has always been my thing—I love diving into new challenges
              and figuring out creative solutions.
            </span>
            <span>
              I’m really into Data Science, Go, and C++. Most of my time goes
              into open-source projects, but when I get a break, I like messing
              around with my Arch Linux setup and making it look awesome.
            </span>
            <span>
              Right now, I’m freelancing and always on the lookout for cool,
              challenging projects. Got an idea? Let’s chat and make something
              amazing!
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
