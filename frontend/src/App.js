import './App.css';

import React from "react";
import{
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";


import NotFound from "./components/NotFound";
import Main from "./components/Main";
// import Footer from "./components/Footer";
import Editor from "./components/Editor";
import Result from "./components/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/readme" element={<Main />}></Route>
        <Route path="/readme/editor" element={<EditorRouter />}> </Route>
        <Route path="/readme/result" element={<Result />}> </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function EditorRouter() {
  const location = useLocation();

  if (location.hash) {
    return <NotFound />;
  } else {
    return <Editor />;
  }
}

export default App;
