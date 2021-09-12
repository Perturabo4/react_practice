import { useState } from "react";
import PostList from "./components/PostList.js";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, name: 'JS', body: 'JS is a programming language' },
    { id: 2, name: 'JS', body: 'JS is a programming language 2' }
  ])

  return (
    <div className="App">
      <PostList posts={posts} title='Post list 1' />
    </div>
  );
}

export default App;
