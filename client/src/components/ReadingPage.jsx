import React from "react";

const imgLogo = "https://www.figma.com/api/mcp/asset/9be4cec6-9b5d-427f-8a01-29247089f437";
const imgFacebook = "https://www.figma.com/api/mcp/asset/9fd9aaea-1284-4c09-ba10-a807afac6270";
const imgTelegram = "https://www.figma.com/api/mcp/asset/919f5117-4fc0-484d-9e71-b8d991371972";
const imgTikTok = "https://www.figma.com/api/mcp/asset/18138309-e035-4154-ad53-e3e719aa19ca";
const imgDiscord = "https://www.figma.com/api/mcp/asset/cfc86f8e-c8fe-4528-a9cd-d994e7e6dd3a";
const imgSearch = "https://www.figma.com/api/mcp/asset/8376f474-7699-43d0-af0d-35f111fa8d31";
const imgOpenBook = "https://www.figma.com/api/mcp/asset/5437a700-29ed-44a9-9d06-4fa236756d90";
const imgThemeToggle = "https://www.figma.com/api/mcp/asset/46247a4e-68a5-4cee-8ff5-5379e6a32174";
const imgNotification = "https://www.figma.com/api/mcp/asset/9dbaced7-0b92-475e-8a8d-7061ac0f354a";
import anh1 from "../anh1.png";

const imgUser = "https://www.figma.com/api/mcp/asset/a33a2536-3008-4ac1-87af-011fd3bb59d1";

// Simple comic panel: only anh1.png as requested
const comicPanels = [anh1];

export default function ReadingPage({ user, onHomeClick, onFavoritesClick, onCategoriesClick, onHistoryClick, onUserClick, onNotificationClick, theme, onThemeToggle }) {
  const isDark = theme === "dark";
  const BG_COLOR = isDark ? "#0f172a" : "#f1f5f9";
  const NAV_BG = isDark ? "#131928" : "#e0e7ff";
  const TEXT_COLOR = isDark ? "white" : "#1e293b";
  const TABLE_BG = isDark ? "#334155" : "#e2e8f0";
  const ROW_BG = isDark ? "#131928" : "white";
  const ACCENT_PURPLE = "#b3a1ff";

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
            <span style={{ cursor: "pointer" }} onClick={onCategoriesClick}>Categories</span>
            <span style={{ cursor: "pointer" }} onClick={onFavoritesClick}>Favorites</span>
            <span style={{ cursor: "pointer" }} onClick={onHistoryClick}>History</span>
            {user && <span style={{ cursor: "pointer" }}>Upload</span>}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <div style={{ background: ACCENT_PURPLE, borderRadius: 8, display: "flex", alignItems: "center", padding: "0.4rem 1rem", gap: 10, width: 330 }}>
            <img src={imgSearch} alt="Search" style={{ height: "18px" }} />
            <input type="text" placeholder="Tìm truyện ......" style={{ background: "transparent", border: "none", outline: "none", color: "#131928", fontWeight: 600, width: "100%" }} />
          </div>
          <img src={imgThemeToggle} alt="Theme" style={{ height: "24px", cursor: "pointer" }} onClick={onThemeToggle} />
          <img src={imgNotification} alt="Notifications" style={{ height: "24px", cursor: "pointer" }} onClick={onNotificationClick} />
          <div onClick={onUserClick} style={{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer" }}>
            <img src={imgUser} alt="User" style={{ height: "32px" }} />
            <span style={{ fontSize: "13px" }}>{user?.email || user?.username || "Guest"}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "2rem 8%", display: "flex", flexDirection: "column", gap: "0" }}>
        {/* Info Bar */}
        <div style={{ backgroundColor: "#3b4452", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", color: "white", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <span style={{ fontSize: "16px", fontWeight: "bold" }}>Danh sách chương urer đã updoad</span>
          <span style={{ fontSize: "16px", fontWeight: "bold" }}>Tổng chương: 1</span>
        </div>

        {/* Table Header */}
        <div style={{ backgroundColor: "#3b4452", padding: "1.5rem 2rem", display: "grid", gridTemplateColumns: "80px 250px 250px 1fr", color: "white", alignItems: "center" }}>
          <span style={{ fontSize: "15px", fontWeight: "500", opacity: 0.9 }}>#</span>
          <span style={{ fontSize: "15px", fontWeight: "500", opacity: 0.9 }}>Tiêu đề chương</span>
          <span style={{ fontSize: "15px", fontWeight: "500", opacity: 0.9 }}>Mã chương</span>
          <span style={{ fontSize: "15px", fontWeight: "500", opacity: 0.9 }}>Kiểu nội dung</span>
        </div>

        {/* Table Row */}
        <div style={{ backgroundColor: "#3b4452", padding: "1.5rem 2rem", display: "grid", gridTemplateColumns: "80px 250px 250px 1fr", color: "white", alignItems: "center" }}>
          <span style={{ fontSize: "16px" }}>1</span>
          <span style={{ fontSize: "16px" }}>Chapter</span>
          <span style={{ fontSize: "16px" }}></span>
          <span style={{ fontSize: "16px" }}>5 Ảnh</span>
        </div>

        {/* Comic Panels Stack */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0", marginTop: "2rem", backgroundColor: isDark ? "#0f172a" : "#cbd5e1", padding: "2rem 0" }}>
           {comicPanels.map((img, idx) => (
             <img 
               key={idx} 
               src={img} 
               alt={`Panel ${idx + 1}`} 
               style={{ width: "800px", maxWidth: "95%" }} 
             />
           ))}
           {/* Adding the main panel from screenshot if needed, but the mock ones will do */}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ marginTop: "auto", backgroundColor: NAV_BG, borderTop: `6px solid ${ACCENT_PURPLE}`, padding: "3rem 8%", display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "3rem" }}>
          <div style={{ display: "flex", gap: "5rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <img src={imgLogo} alt="Logo" style={{ height: "55px" }} />
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
}
