import "./App.css";
import CodeEditorPage from "./pages/CodeEditorPage";
import HomeComponent from "./pages/HomeComponent";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/code" element={<CodeEditorPage />} />
      </Routes>
    </>
  );
}

export default App;
