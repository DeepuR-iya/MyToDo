import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import InputAdd from "./Components/InputAdd";

const App = () => {
  return (
    <div>
      <h1 className="text-center mt-5 mb-3">My TO-DO List</h1>
      <InputAdd />
    </div>
  );
};

export default App;
