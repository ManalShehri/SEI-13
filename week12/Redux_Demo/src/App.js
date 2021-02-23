import './App.css';
import Post from "./components/Post";
import AddPost from "./components/AddPost"
import Photos from "./components/Photos"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useSelector } from "react-redux";

function App() {

  const allPosts = useSelector((state) => state.posts)

  const comments = [
    {
      id: 1,
      description: 'idjqodkqo oqwkdokqod oqkdoqkdo qk'
    },
    {
      id: 2,
      description: 'kopgewkfkfq ofdkqdiod jqoidqd koqpk'
    },
  ]

  const posts = [
    {
      id: 1,
      title: "Working on the Final project",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora ducimus",
      comments: comments,
      likes: 3
    }
  ]

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/photos">Photos</Link>
      </nav>
      <Switch>
        <Route path='/photos'>
          <Photos/>
        </Route>
        <Route path='/'>
          <div className="App">
            <AddPost/>
            {allPosts.map(post=>{
              return <Post key={post.id} post={post}/> 
            })}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
