import { useState, useEffect } from "react";
import PhamDucHuyTrangChu from "./components/PhamDucHuyTrangChu";
import DangKy from "./components/DangKy";
import DangNhap from "./components/DangNhap";
import UploadStory from "./components/UploadStory";
import ChiTietTruyen from "./components/ChiTietTruyen";
import ThongTinUser from "./components/ThongTinUser";
import TimKiem from "./components/TimKiem";
import CommentsRatingPage from "./pages/CommentsRatingPage";

function App() {
  // Read initial view from URL path (e.g., /upload -> "upload")
  const getInitialView = () => {
    const path = window.location.pathname.replace(/^\/+/, ""); // remove leading slash
    const view = path.toLowerCase() || "home";
    // Basic validation for deep links
    const validViews = ["home", "login", "register", "upload", "chitiettruyen", "profile", "search", "rating"];
    return validViews.includes(view) ? view : "home";
  };

  const [view, setView] = useState(getInitialView());
  const [user, setUser] = useState(null);

  // Update URL whenever view state changes
  useEffect(() => {
    if (view === "home") {
      window.history.replaceState(null, "", "/");
    } else {
      window.history.replaceState(null, "", `/${view}`);
    }
  }, [view]);

  // Navigate using State
  const goTo = (newView) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    goTo("home");
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    goTo("home");
  };

  if (view === "register") {
    return <DangKy onBack={() => goTo("login")} />;
  }

  if (view === "login") {
    return (
      <DangNhap 
        onBack={() => goTo("home")} 
        onRegister={() => goTo("register")} 
        onSuccess={handleLoginSuccess} 
      />
    );
  }

  if (view === "upload") {
    return (
      <UploadStory 
        onHomeClick={() => goTo("home")} 
        onFavoritesClick={() => goTo("upload")}
        onUserClick={() => goTo(user ? "profile" : "login")}
      />
    );
  }

  if (view === "chitiettruyen") {
    return (
      <ChiTietTruyen 
        onHomeClick={() => goTo("home")} 
        onFavoritesClick={() => goTo("upload")}
        onUserClick={() => goTo(user ? "profile" : "login")}
        onRatingClick={() => goTo("rating")}
      />
    );
  }

  if (view === "profile") {
    return <ThongTinUser user={user} onBack={() => goTo("home")} />;
  }

  if (view === "search") {
    return (
      <TimKiem 
        onBackHome={() => goTo("home")} 
        onUserClick={() => goTo(user ? "profile" : "login")} 
        onFavoritesClick={() => goTo("upload")}
      />
    );
  }

  if (view === "rating") {
    return <CommentsRatingPage onBack={() => goTo("chitiettruyen")} />;
  }

  return (
    <PhamDucHuyTrangChu 
      user={user}
      onUserClick={() => goTo("profile")} 
      onLoginClick={() => goTo("login")} 
      onLogout={handleLogout}
      onUploadClick={() => goTo("upload")}
      onSearchClick={() => goTo("search")}
      onStoryClick={() => goTo("chitiettruyen")}
    />
  );
}

export default App;