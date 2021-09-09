import { useState } from "react";

function App() {

  const [value, setValue] = useState('text')

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
          <div>
            Js is a programming language
          </div>
        </div>
        <div className="post_btns">
            <button>Delete</button>
          </div>
      </div>
    </div>
  );
}

export default App;
