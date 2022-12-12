import React from "react";
import { HashRouter,Routes, Route } from "react-router-dom";
import { BlogPage } from "./BlogPage";
import { HomePage } from "./HomePage";
import { ProfilePage } from "./ProgilePage";

function App() {
  return(
    <>
    <HashRouter>
      <Menu>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="*"  element={<p>Not Found </p>}/>
        </Routes>

      </Menu>
    </HashRouter>
    </>
  )
  
}

export default App;
