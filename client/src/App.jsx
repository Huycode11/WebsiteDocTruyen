import { useState } from "react";
import PhamDucHuyTrangChu from "./components/PhamDucHuyTrangChu";
import DangKy from "./components/DangKy";
import DangNhap from "./components/DangNhap";

function App() {
  const [view, setView] = useState("home");

  if (view === "register") {
    return <DangKy onBack={() => setView("login")} />;
  }

  if (view === "login") {
    return <DangNhap onBack={() => setView("home")} onRegister={() => setView("register")} onSuccess={() => setView("home")} />;
  }

  return <PhamDucHuyTrangChu onUserClick={() => setView("login")} />;
}

export default App;