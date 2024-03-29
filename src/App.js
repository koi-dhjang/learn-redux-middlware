import './App.css';
import { Routes, Route } from "react-router-dom";
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';

function App() {
  return (
        <>
          <Routes>
            <Route path='/' element={<PostListPage/>} />
            <Route path=':id' element={<PostPage/>} />
          </Routes>
        </>
        
  );
}

export default App;
