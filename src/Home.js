import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "How to make chocolate chip cookies",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Anusha",
      id: 1,
    },
    {
      title: "How to make oatmeal cookies",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Hari",
      id: 2,
    },
    {
      title: "How to make macaron cookies",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Vandana",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2> {blog.title}</h2>
          <p>Written by {blog.author} </p>
        </div>
      ))}
    </div>
  );
};

export default Home;

{
  /* Click events */
}
{
  /* <button onClick={handleClick()}>Click me</button>
      <button
        onClick={() => {
          handleClickAgain("Anusha");
        }}
      >
        Click again
      </button> */
}

//  Usestate
// // const handleClickAgain = (name) => {
// //   console.log("hello " + name);
// // };

// // let name = "Anusha";
// const [name, setName] = useState("Anusha");
// const [age, setAge] = useState(25);

// const handleClick = () => {
//   setName("CookiePi");
//   setAge(1);
// };
//  {/* <p>
//       {name} is {age} years old
//     </p>
/* <button onClick={handleClick}>Click me</button> */
