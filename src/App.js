import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // const person = { name: "Anusha", age: 30 }; cannot output objects, booleans
  // can only output array,strings, nunmbers
  // react converts numbers into strings in output
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p> liked {likes} times. yay!</p>
      </div>
    </div>
  );
}

export default App;
