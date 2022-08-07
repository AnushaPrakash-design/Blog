import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // const person = { name: "Anusha", age: 30 }; cannot output objects, booleans
  // can only output array,strings, nunmbers
  // react converts numbers into strings in output
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
