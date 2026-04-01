import React from "react";

const categories = [
  "Sát thủ",
  "Kinh dị",
  "Hài Hước",
  "Tình Cảm"
];

const imgLogo = "https://www.figma.com/api/mcp/asset/9be4cec6-9b5d-427f-8a01-29247089f437";
const imgOpenBook = "https://www.figma.com/api/mcp/asset/5437a700-29ed-44a9-9d06-4fa236756d90";
const imgSearch = "https://www.figma.com/api/mcp/asset/8376f474-7699-43d0-af0d-35f111fa8d31";
const imgThemeToggle = "https://www.figma.com/api/mcp/asset/46247a4e-68a5-4cee-8ff5-5379e6a32174";
const imgNotification = "https://www.figma.com/api/mcp/asset/9dbaced7-0b92-475e-8a8d-7061ac0f354a";
const imgUser = "https://www.figma.com/api/mcp/asset/a33a2536-3008-4ac1-87af-011fd3bb59d1";
const imgFacebook = "https://www.figma.com/api/mcp/asset/9fd9aaea-1284-4c09-ba10-a807afac6270";
const imgTelegram = "https://www.figma.com/api/mcp/asset/919f5117-4fc0-484d-9e71-b8d991371972";
const imgTikTok = "https://www.figma.com/api/mcp/asset/18138309-e035-4154-ad53-e3e719aa19ca";
const imgDiscord = "https://www.figma.com/api/mcp/asset/cfc86f8e-c8fe-4528-a9cd-d994e7e6dd3a";

const TheLoai = ({ user, onHomeClick, onFavoritesClick, onCategoriesClick, onUserClick, onHistoryClick, onNotificationClick, onUploadClick, theme, onThemeToggle }) => {
  const isDark = theme === "dark";
  const BG_COLOR = isDark ? "#0f172a" : "#f1f5f9";
  const NAV_BG = isDark ? "#131928" : "#e0e7ff";
  const TEXT_COLOR = isDark ? "white" : "#1e293b";
  const ACCENT_PURPLE = "#b3a1ff";
  const CARD_BG = isDark ? "#3b4452" : "#e2e8f0";

  return (
    <div style={{ backgroundColor: BG_COLOR, color: TEXT_COLOR, minHeight: "100vh", fontFamily: "Inter, sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <nav style={{ display: "flex", alignItems: "center", padding: "1rem 2rem", backgroundColor: NAV_BG, position: "sticky", top: 0, zIndex: 100, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          <div onClick={onHomeClick} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            <img src={imgLogo} alt="Logo" style={{ height: "45px" }} />
          </div>
          <div style={{ display: "flex", gap: "1.2rem", alignItems: "center", fontSize: "15px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
              <img src={imgOpenBook} alt="Series" style={{ height: "20px" }} />
              <span>Series</span>
            </div>
            <span style={{ cursor: "pointer", fontWeight: "bold" }} onClick={onCategoriesClick}>Categories</span>
            <span style={{ cursor: "pointer" }} onClick={onFavoritesClick}>Favorites</span>
            <span style={{ cursor: "pointer" }} onClick={onHistoryClick}>History</span>
            {user && <span style={{ cursor: "pointer" }} onClick={onUploadClick}>Upload</span>}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <div style={{ background: "#a594f9", borderRadius: 8, display: "flex", alignItems: "center", padding: "0.4rem 1rem", gap: 10, width: 330 }}>
            <img src={imgSearch} alt="Search" style={{ height: "18px" }} />
            <input type="text" placeholder="Tìm truyện ......" style={{ background: "transparent", border: "none", outline: "none", color: "#131928", fontWeight: 600, width: "100%" }} />
          </div>
          <img src={imgThemeToggle} alt="Theme Toggle" style={{ height: "24px", cursor: "pointer" }} onClick={onThemeToggle} />
          <img src={imgNotification} alt="Notifications" style={{ height: "24px", cursor: "pointer" }} onClick={onNotificationClick} />
          <div onClick={onUserClick} style={{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer" }}>
            <img src={imgUser} alt="User" style={{ height: "32px" }} />
            <span style={{ fontSize: "13px" }}>{user?.email || user?.username || "Guest"}</span>
          </div>
        </div>
      </nav>

      {/* Categories Block */}
      <main style={{ flex: 1, padding: "2rem 8%", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h1 style={{ 
          fontSize: "36px", 
          fontWeight: "bold", 
          margin: "0 0 0.5rem 0", 
          color: "white",
          letterSpacing: "-0.02em"
        }}>
          Thể Loại
        </h1>

        <div style={{ 
          backgroundColor: "#3b4452", 
          padding: "2.5rem 3rem", 
          borderRadius: "20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          rowGap: "2rem",
          columnGap: "4rem",
          maxWidth: "800px"
        }}>
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              style={{ 
                fontSize: "18px", 
                fontWeight: "bold", 
                color: "white",
                cursor: "pointer",
                transition: "opacity 0.2s"
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = 0.7}
              onMouseLeave={e => e.currentTarget.style.opacity = 1}
            >
              {cat}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: NAV_BG, borderTop: `6px solid ${ACCENT_PURPLE}`, padding: "3rem 8%", display: "flex", flexDirection: "column", gap: "2rem", marginTop: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "3rem" }}>
          <div style={{ display: "flex", gap: "5rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <img src={imgLogo} alt="Footer Logo" style={{ height: "55px", width: "auto" }} />
              <div style={{ display: "flex", gap: "2rem" }}>
                <img src={imgFacebook} alt="FB" style={{ height: "32px", cursor: "pointer" }} />
                <img src={imgTelegram} alt="TG" style={{ height: "32px", cursor: "pointer" }} />
                <img src={imgDiscord} alt="DS" style={{ height: "32px", cursor: "pointer" }} />
                <img src={imgTikTok} alt="TK" style={{ height: "32px", cursor: "pointer" }} />
              </div>
            </div>
            <div style={{ display: "flex", gap: "4rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", fontSize: "15px", fontWeight: "500" }}>
                <span style={{ cursor: "pointer" }}>Chính sách bảo mật</span>
                <span style={{ cursor: "pointer" }}>Điều khoản sử dụng</span>
                <span style={{ cursor: "pointer" }}>Liên hệ</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", fontSize: "15px", fontWeight: "500" }}>
                <span style={{ cursor: "pointer" }}>Giới thiệu</span>
                <span style={{ cursor: "pointer" }}>Hỏi đáp</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TheLoai;
