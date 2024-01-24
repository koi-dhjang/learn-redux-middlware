import CounterContainer from './containers/CounterContainer';
import './App.css';
import PostListContainer from './containers/PostListContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';

function App() {
  return (
      // <CounterContainer/>
      // <PostListContainer/>
        <Routes>
          <Route path='/' element={<PostListPage/>} exact={true}>
            <Route path=':id' element={<PostPage/>} />
          </Route>
        </Routes>
  );
}

export default App;
