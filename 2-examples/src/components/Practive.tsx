import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DetailUser from "./DetailUser";
import ListPage from "./ListPage";
import Navi from "./Navi";

// BrowserRouter
// Routes
// Route
// Navigation

// Khoi tao 3 cpn: (fuctional cpn)
// cpn ListPage.tsx -> <h1>List page</h1>
// cpn Form.tsx     -> bt Form hom bua
// cpn Detail.tsx   -> <h1>Detail page</h1>

// path = /         -> render cpn ListPage
// path = /form     -> render cpn Form
// path = /detail   -> render cpn Detail

function Practive() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      {/* <Link to={"/"}>List</Link>
      <Link to={"/form"}>Form</Link>
      <Link to={"/detail"}>Detail</Link> */}
      <Navi />

      {/* Routes config */}
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/form" element={<div>Form page</div>} />
        <Route path="/detail/:id" element={<DetailUser />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404 Page not found 😂😂😂</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Practive;
