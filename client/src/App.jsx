import { useState, useEffect } from "react";
import PhamDucHuyTrangChu from "./components/PhamDucHuyTrangChu";
import DangKy from "./components/DangKy";
import DangNhap from "./components/DangNhap";
import UploadStory from "./components/UploadStory";
import ChiTietTruyen from "./components/ChiTietTruyen";
import ThongTinUser from "./components/ThongTinUser";
import TimKiem from "./components/TimKiem";
import History from "./components/History";
import CommentsRatingPage from "./pages/CommentsRatingPage";
import ReadingPage from "./components/ReadingPage";
import TheLoai from "./components/TheLoai";
import ThongBao from "./components/ThongBao";
import FavoritesPage from "./pages/FavoritesPage";
import DanhSachChuong from "./components/DanhSachChuong";

const sampleStories = [
  { id: 1, title: "Chàng trai năm ấy", img: "https://www.figma.com/api/mcp/asset/be4a6751-ce0e-487b-8a43-b93a863b6b27", hd: true },
  { id: 2, title: "Nữ quỷ vương", img: "https://www.figma.com/api/mcp/asset/d355aaac-0094-4386-aebd-130c6aa161db", hd: false },
  { id: 3, title: "Người thầy của tôi (hết)", img: "https://www.figma.com/api/mcp/asset/dfeda891-28e0-49ce-82c8-d9826159fc86", hd: true },
  { id: 4, title: "Lục Đào", img: "https://www.figma.com/api/mcp/asset/1b7aa74d-fae9-4c1c-83aa-95cb890bfc5c", hd: false },
  { id: 5, title: "Vị thần bảo hộ", img: "https://www.figma.com/api/mcp/asset/166ab19c-ff41-465e-a693-ba9fe242d88b", hd: true },
];

function App() {
  // Read initial view from URL path (e.g., /upload -> "upload")
  const getInitialView = () => {
    const path = window.location.pathname.replace(/^\/+/, ""); // remove leading slash
    const view = path.toLowerCase() || "home";
    // Basic validation for deep links
    const validViews = ["home", "login", "register", "upload", "chitiettruyen", "profile", "search", "rating", "notification", "history", "favorites", "reading", "categories"];
    return validViews.includes(view) ? view : "home";
  };

  const [view, setView] = useState(getInitialView());
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem("app-theme") || "dark");
  const [stories] = useState(sampleStories);
  const [favorites, setFavorites] = useState([]);

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

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
  };

  if (view === "register") {
    return <DangKy onBack={() => goTo("login")} theme={theme} onThemeToggle={toggleTheme} />;
  }

  if (view === "login") {
    return (
      <DangNhap 
        onBack={() => goTo("home")} 
        onRegister={() => goTo("register")} 
        onSuccess={(userData) => { setUser(userData); goTo("home"); }}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
    );
  }

  if (view === "upload") {
    return (
      <UploadStory 
        onHomeClick={() => goTo("home")} 
        onFavoritesClick={() => goTo("favorites")}
        onUserClick={() => goTo(user ? "profile" : "login")}
        onHistoryClick={() => goTo("history")}
        onNotificationClick={() => goTo("notification")}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
    );
  }

  if (view === "chitiettruyen") {
    return (
      <ChiTietTruyen 
        user={user}
        onHomeClick={() => goTo("home")} 
        onFavoritesClick={() => goTo("favorites")}
        onCategoriesClick={() => goTo("categories")}
        onUserClick={() => goTo(user ? "profile" : "login")}
        onRatingClick={() => goTo("rating")}
        onChapterClick={() => goTo("reading")}
        onHistoryClick={() => goTo("history")}
        onNotificationClick={() => goTo("notification")}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
    );
  }

  if (view === "reading") {
    return (
      <ReadingPage 
        user={user}
        onHomeClick={() => goTo("home")}
        onFavoritesClick={() => goTo("favorites")}
        onCategoriesClick={() => goTo("categories")}
        onUserClick={() => goTo(user ? "profile" : "login")}
        onHistoryClick={() => goTo("history")}
        onNotificationClick={() => goTo("notification")}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
    );
  }

  if (view === "categories") {
    return (
      <TheLoai 
        user={user}
        onHomeClick={() => goTo("home")} 
        onFavoritesClick={() => goTo("favorites")}
        onCategoriesClick={() => goTo("categories")}
        onUserClick={() => goTo(user ? "profile" : "login")}
        onHistoryClick={() => goTo("history")}
        onNotificationClick={() => goTo("notification")}
        onUploadClick={() => goTo("upload")}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
    );
  }



  if (view === "profile") {
    return <ThongTinUser user={user} onBack={() => goTo("home")} onHistoryClick={() => goTo("history")} theme={theme} onThemeToggle={toggleTheme} />;
  }

  if (view === "search") {
    return (
      <TimKiem 
        onBackHome={() => goTo("home")} 
        onUserClick={() => goTo(user ? "profile" : "login")} 
        onFavoritesClick={() => goTo("favorites")}
        onHistoryClick={() => goTo("history")}
        onNotificationClick={() => goTo("notification")}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
    );
  }

  if (view === "rating") {
    return <CommentsRatingPage onBack={() => goTo("chitiettruyen")} onHistoryClick={() => goTo("history")} theme={theme} onThemeToggle={toggleTheme} />;
  }

  if (view === "notification") {
    return (
      <ThongBao 
        user={user} 
        onBack={() => goTo("home")} 
        onSearchClick={() => goTo("search")}
        onFavoritesClick={() => goTo("favorites")}
        onUserClick={() => goTo(user ? "profile" : "login")}
        onHistoryClick={() => goTo("history")}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
    );
  }

  if (view === "history") {
    return (
      <History 
        user={user} 
        onBack={() => goTo("home")} 
        onSearchClick={() => goTo("search")}
        onFavoritesClick={() => goTo("favorites")}
        onUserClick={() => goTo(user ? "profile" : "login")}
        onNotificationClick={() => goTo("notification")}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
    );
  }

  if (view === "favorites") {
    return (
       <FavoritesPage 
          user={user}
          onHomeClick={() => goTo("home")}
          onUploadClick={() => goTo("upload")}
          onUserClick={() => goTo(user ? "profile" : "login")}
          onNotificationClick={() => goTo("notification")}
          onHistoryClick={() => goTo("history")}
          onCategoriesClick={() => goTo("categories")}
          onStoryClick={() => goTo("chitiettruyen")}
          theme={theme}
          onThemeToggle={toggleTheme}
       />
    );
  }

  return (
    <PhamDucHuyTrangChu 
      user={user}
      stories={stories}
      favorites={favorites}
      onUserClick={() => goTo("profile")} 
      onLoginClick={() => goTo("login")} 
      onLogout={handleLogout}
      onUploadClick={() => goTo("upload")}
      onSearchClick={() => goTo("search")}
      onCategoriesClick={() => goTo("categories")}
      onStoryClick={() => goTo("chitiettruyen")}
      onNotificationClick={() => goTo("notification")}
      onHistoryClick={() => goTo("history")}
      onFavoritesClick={() => goTo("favorites")}
      theme={theme}
      onThemeToggle={toggleTheme}
    />
  );
}

export default App;