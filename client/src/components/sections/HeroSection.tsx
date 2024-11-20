const HeroSection = () => {
  return (
    <div className="w-8/12 mx-auto py-60 flex gap-4 items-center">
      <div className="w-1/2 mx-auto">
        <h1 className="geologica-bold text-4xl pb-5">Hello, this is Akshat.</h1>
        <div className="source-code-pro-regular">
          <span>
            I’m a CLI and web developer crafting purposeful products. Currently
            contributing to an open-source community and I’m open to exciting
            work opportunities.
          </span>
          <span></span>
        </div>
      </div>
      <img
        src={
          "https://images.unsplash.com/photo-1536057222397-e51989d3cb8a?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={"profile"}
        className="w-3/12 mx-auto drop-shadow-2xl"
      />
    </div>
  );
};

export default HeroSection;
