import { useState } from "react";
import PhamDucHuyTrangChu from "./components/PhamDucHuyTrangChu";
import DangKy from "./components/DangKy";

function App() {
  const [view, setView] = useState("home");

  if (view === "register") {
    return <DangKy onBack={() => setView("home")} />;
  }

  return <PhamDucHuyTrangChu onUserClick={() => setView("register")} />;
}

export default App;