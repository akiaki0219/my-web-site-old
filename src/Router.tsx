import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Top from './Top/Top';
import Video from './Video/Video';
import VideoPage from './Video/VideoPage';
import Blog from './Blog';
import Contact from './Contact';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Top />} />
      <Route path="/top" element={<Top />} />
      <Route path="/video" element={<Video />} />
      <Route path="/video/:id" element={<VideoPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </>
  )
);

export default Router;
