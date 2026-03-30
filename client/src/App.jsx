import { useState } from "react";
import PhamDucHuyTrangChu from "./components/PhamDucHuyTrangChu";
import DangKy from "./components/DangKy";
import DangNhap from "./components/DangNhap";
import ThongTinUser from "./components/ThongTinUser";
import TimKiem from "./components/TimKiem";

function App() {
  const [view, setView] = useState("home");

  if (view === "register") {
    return <DangKy onBack={() => setView("login")} />;
  }

  if (view === "login") {
    return <DangNhap onBack={() => setView("home")} onRegister={() => setView("register")} onSuccess={() => setView("home")} />;
  }

  if (view === "profile") {
    return <ThongTinUser onBack={() => setView("home")} />;
  }

  if (view === "search") {
    return <TimKiem onBackHome={() => setView("home")} onUserClick={() => setView("profile")} />;
  }

  return <PhamDucHuyTrangChu onUserClick={() => setView("profile")} onSearchClick={() => setView("search")} />;
}

export default App;
