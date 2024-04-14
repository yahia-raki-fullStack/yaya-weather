import Header from "../../UI/Header";

/* eslint-disable react/no-unescaped-entities */
function About() {
  return (
    <>
      {" "}
      <Header />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p className="text-lg mb-4">
          Welcome to my weather app! This is my first React project, and I'm
          excited to share it with you.
        </p>
        <p className="text-lg mb-4">
          I kept the functionality and features minimal for this project as I
          wanted to focus on learning React and testing my skills. However, with
          each project, I'm committed to challenging myself and adding more
          features to create even better applications.
        </p>
        <p className="text-lg mb-4">
          Thank you for visiting, and I hope you enjoy using my weather app!
        </p>
      </div>
    </>
  );
}

export default About;
