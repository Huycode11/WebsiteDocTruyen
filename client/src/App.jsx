import { useState, useEffect } from "react";
import PhamDucHuyTrangChu from "./components/PhamDucHuyTrangChu";
import DangKy from "./components/DangKy";
import DangNhap from "./components/DangNhap";
import ThongTinUser from "./components/ThongTinUser";
import TimKiem from "./components/TimKiem";

function App() {
  const [view, setView] = useState("home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setView("home");
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setView("home");
  };

  if (view === "register") {
    return <DangKy onBack={() => setView("login")} />;
  }

  if (view === "login") {
    return <DangNhap onBack={() => setView("home")} onRegister={() => setView("register")} onSuccess={handleLoginSuccess} />;
  }

  if (view === "profile") {
    return <ThongTinUser user={user} onBack={() => setView("home")} />;
  }

  if (view === "search") {
    return <TimKiem onBackHome={() => setView("home")} onUserClick={() => setView("profile")} />;
  }

  return <PhamDucHuyTrangChu 
    user={user} 
    onUserClick={() => setView("profile")} 
    onSearchClick={() => setView("search")} 
    onLoginClick={() => setView("login")}
    onLogout={handleLogout}
  />;
}

export default App;
