import { useEffect, useState } from "react";
import PhamDucHuyTrangChu from "./components/PhamDucHuyTrangChu";
import DangKy from "./components/DangKy";
import DangNhap from "./components/DangNhap";
import CommentsRatingPage from "./pages/CommentsRatingPage";

function pathToView(pathname) {
  if (pathname === "/comments") return "comments";
  if (pathname === "/register") return "register";
  if (pathname === "/login") return "login";
  return "home";
}

function App() {
  const [view, setView] = useState(() => pathToView(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setView(pathToView(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (next) => {
    setView(next);
    const nextPath =
      next === "comments" ? "/comments" : next === "register" ? "/register" : next === "login" ? "/login" : "/";
    window.history.pushState({}, "", nextPath);
  };

  if (view === "comments") {
    return <CommentsRatingPage onBack={() => navigate("home")} />;
  }

  if (view === "register") {
    return <DangKy onBack={() => navigate("login")} />;
  }

  if (view === "login") {
    return (
      <DangNhap
        onBack={() => navigate("home")}
        onRegister={() => navigate("register")}
        onSuccess={() => navigate("comments")}
      />
    );
  }

  return <PhamDucHuyTrangChu onUserClick={() => navigate("login")} />;
}

export default App;