import React from "react";

const imgLogo = "https://www.figma.com/api/mcp/asset/9be4cec6-9b5d-427f-8a01-29247089f437";
const imgOpenBook = "https://www.figma.com/api/mcp/asset/5437a700-29ed-44a9-9d06-4fa236756d90";
const imgSearch = "https://www.figma.com/api/mcp/asset/8376f474-7699-43d0-af0d-35f111fa8d31";
const imgNutSangTi = "https://www.figma.com/api/mcp/asset/46247a4e-68a5-4cee-8ff5-5379e6a32174";
const imgThongBaoIcon = "https://www.figma.com/api/mcp/asset/9dbaced7-0b92-475e-8a8d-7061ac0f354a";
const imgNguoiDung = "https://www.figma.com/api/mcp/asset/a33a2536-3008-4ac1-87af-011fd3bb59d1";

const imgFacebook = "https://www.figma.com/api/mcp/asset/9fd9aaea-1284-4c09-ba10-a807afac6270";
const imgTelegram = "https://www.figma.com/api/mcp/asset/919f5117-4fc0-484d-9e71-b8d991371972";
const imgTikTok = "https://www.figma.com/api/mcp/asset/18138309-e035-4154-ad53-e3e719aa19ca";
const imgDiscordNew = "https://www.figma.com/api/mcp/asset/cfc86f8e-c8fe-4528-a9cd-d994e7e6dd3a";

export default function ThongBao({ user, onBack, onSearchClick, onUploadClick, onFavoritesClick, onUserClick, onHistoryClick, theme, onThemeToggle }) {
  const isDark = theme === "dark";
  const APP_BG = isDark ? "#0f172a" : "#dbeafe";
  const NAV_BG = isDark ? "#131928" : "#e0e7ff";
  const CARD_BG = isDark ? "#1e293b" : "white"; 
  const TEXT_COLOR = isDark ? "white" : "#1e293b";
  const ACCENT_PURPLE = "#b3a1ff";

  const navItemStyle = { display: "flex", alignItems: "center", gap: 8, cursor: "pointer" };
  const navTextStyle = { fontSize: 15, fontWeight: 500, color: TEXT_COLOR };

  return (
    <div style={{ backgroundColor: APP_BG, minHeight: "100vh", color: TEXT_COLOR, fontFamily: "Inter, sans-serif", display: "flex", flexDirection: "column" }}>
      {/* ── NAVBAR ── */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0.8rem 2.5rem", background: NAV_BG, position: "sticky", top: 0, zIndex: 100,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={onBack}>
             <img src={imgLogo} alt="Logo" style={{ height: 40 }} />
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
             <div style={navItemStyle}>
               <img src={imgOpenBook} alt="Series" style={{ height: 20 }} />
               <span style={navTextStyle}>Series</span>
             </div>
             <span style={{ ...navTextStyle, cursor: "pointer" }}>Categories</span>
             <span style={{ ...navTextStyle, cursor: "pointer" }} onClick={onFavoritesClick}>Favorites</span>
             <span style={{ ...navTextStyle, cursor: "pointer" }} onClick={onHistoryClick}>History</span>
             {user && <span style={{ ...navTextStyle, cursor: "pointer" }} onClick={onUploadClick}>Upload</span>}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div onClick={onSearchClick} style={{ 
            background: ACCENT_PURPLE, borderRadius: 8, display: "flex", alignItems: "center", 
            padding: "0.4rem 1rem", gap: 10, width: 320, cursor: "pointer" 
          }}>
            <img src={imgSearch} alt="search" style={{ height: 18 }} />
            <span style={{ color: "#131928", fontSize: "14px", fontWeight: "600" }}>Tìm truyện ......</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
            <img src={imgNutSangTi} alt="Theme" style={{ height: 24, cursor: "pointer" }} onClick={onThemeToggle} />
            <img src={imgThongBaoIcon} alt="Notifications" style={{ height: 24, cursor: "pointer" }} />
            <div onClick={onUserClick} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
              <img src={imgNguoiDung} alt="user" style={{ height: 32 }} />
              <span style={{ fontSize: 13, fontWeight: 400 }}>{user?.email || user?.username || "User123@gmail.com"}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <main style={{ flex: 1, padding: "4rem 8%", maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "2.5rem" }}>Thông Báo</h1>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {/* Notification Card */}
          <div style={{ 
            backgroundColor: CARD_BG, 
            borderRadius: "16px", 
            padding: "2.5rem", 
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            border: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
            position: "relative",
            overflow: "hidden"
          }}>
            <p style={{ color: "#94a3b8", fontSize: "16px", fontWeight: "600", marginBottom: "0.75rem" }}>11/28/2025</p>
            <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT_COLOR }}>Thông báo truyện mới</h2>
            <p style={{ fontSize: "18px", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6" }}>Truyện tranh thỏ 7 màu ra mắt.</p>
            
            {/* Hover effect indicator like the image if any */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", backgroundColor: ACCENT_PURPLE }} />
          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{
        marginTop: "auto",
        backgroundColor: NAV_BG,
        borderTop: `6px solid ${ACCENT_PURPLE}`,
        padding: "4rem 8%",
        display: "flex",
        flexDirection: "column",
        gap: "3rem"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "3rem" }}>
          <div style={{ display: "flex", gap: "5rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <img src={imgLogo} alt="Footer Logo" style={{ height: "55px", width: "auto" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "16px", color: TEXT_COLOR, opacity: 0.9 }}>
                <span style={{ cursor: "pointer" }}>Chính sách bảo mật</span>
                <span style={{ cursor: "pointer" }}>Điều khoản sử dụng</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "16px", color: TEXT_COLOR, opacity: 0.9, paddingTop: "0.4rem" }}>
              <span style={{ cursor: "pointer" }}>Giới thiệu</span>
              <span style={{ cursor: "pointer" }}>Hỏi đáp</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "16px", color: TEXT_COLOR, opacity: 0.9, paddingTop: "0.4rem" }}>
              <span style={{ cursor: "pointer" }}>Liên hệ</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1.8rem", paddingTop: "0.5rem" }}>
            <img src={imgFacebook} alt="Facebook" style={{ height: "36px", cursor: "pointer" }} />
            <img src={imgTelegram} alt="Telegram" style={{ height: "36px", cursor: "pointer" }} />
            <img src={imgDiscordNew} alt="Discord" style={{ height: "36px", cursor: "pointer" }} />
            <img src={imgTikTok} alt="TikTok" style={{ height: "36px", cursor: "pointer" }} />
          </div>
        </div>
      </footer>
    </div>
  );
}
