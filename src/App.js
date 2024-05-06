
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { GallerySplash } from './Components/GallerySplash/GallerySplash';
import { Title } from './Components/Title/Title';
import { Info } from './Components/Info/Info';
import { Post } from './Features/Post/Post';
import { Footer } from './Components/Footer/Footer';
import { useSelector } from 'react-redux';
import { selectPost } from './Features/Post/PostSlice';
import { MediaTags } from './Features/Post/Helmet/Helmet';
import { ReleaseNotes } from './Features/ReleaseNotes/ReleaseNotes';

function App() {

    const post = useSelector(selectPost);

    return (
      <div className="App">
        <MediaTags user={post?.user} post={post?.message} />
        
        <BrowserRouter>
          <Title />
          <Routes>
            
            <Route element={
            <>
            <GallerySplash />
            <Info />
            </>
            } path="/" />
            <Route path="/release-notes" element={<ReleaseNotes />} />
            <Route key={window.location.pathname} element={<Post key={window.location.pathname} />}
            path="/post/*"
            />
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    );
}

export default App;
