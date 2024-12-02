import Layout from "../components/layout/Layout";

import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <motion.div className="py-44 max-lg:py-20">
        <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto flex max-lg:flex-col max-lg:gap-5 items-center justify-between">
          <img
            src={
              "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV    ufDB8fHx8fA%3D%3D"
            }
            className="w-2/12 mx-auto shadow lg:hidden"
          />
          <div className="w-9/12 flex flex-col gap-3">
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="geologica-medium">About Me</h1>
              <span className="source-code-pro-normal">
                Hi, I’m Akshat Gangi! I’m currently pursuing a Master’s in Data
                Science and diving deep into the world of software development.
                Alongside my studies, I’m actively contributing to the
                open-source community, building tools, and collaborating with
                others to improve software and share knowledge. I’m passionate
                about learning new technologies, and I’m always looking for ways
                to apply what I learn in practical, impactful projects.
              </span>
            </motion.div>
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.85 }}
            >
              <h1 className="geologica-medium">Current Focus</h1>
              <span className="source-code-pro-normal">
                I’m currently grasping my knowledge in Data Science to learn
                more about analytical aspect of data and diving deep into Docker
                and Zustand to enhance my development skills. I'm passionate
                about building efficient applications and learning the tools
                that can take my work to the next level. One of my ongoing
                projects is a web application designed specifically for
                developers to streamline their workflow and boost productivity.
                The app combines task management, Pomodoro timers, note-taking,
                and markdown support to help developers stay organized and
                focused. It’s built to integrate seamlessly into their daily
                tasks, enabling quick task tracking, efficient time management,
                and easy documentation—creating an all-in-one solution for
                better performance and productivity.
              </span>
            </motion.div>
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h1 className="geologica-medium">Personal Life</h1>
              <span className="source-code-pro-normal">
                Outside of coding and studies, I enjoy unwinding by watching
                anime and exploring new tech trends. I’m always up for picking
                up new hobbies, and right now, I’m balancing my time between
                learning, building projects, and sharing my journey with others.
              </span>
            </motion.div>
          </div>
          <motion.img
            src={
              "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="w-2/12 mx-auto shadow max-lg:hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </div>
      </motion.div>
    </Layout>
  );
};

export default About;
