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

export default function History({ user, onBack, onSearchClick, onUploadClick, onFavoritesClick, onUserClick, onNotificationClick, theme, onThemeToggle }) {
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
             <span style={{ fontSize: 16, fontWeight: 500, color: TEXT_COLOR, cursor: "pointer" }}>Categories</span>
             <span style={{ fontSize: 16, fontWeight: 500, color: TEXT_COLOR, cursor: "pointer" }} onClick={onFavoritesClick}>Favorites</span>
             {user && <span style={{ fontSize: 16, fontWeight: 500, color: TEXT_COLOR, cursor: "pointer" }} onClick={onUploadClick}>Upload</span>}
             <span style={{ ...navTextStyle, cursor: "pointer" }}>History</span>
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
            <img src={imgThongBaoIcon} alt="Notifications" style={{ height: 24, cursor: "pointer" }} onClick={onNotificationClick} />
            <div onClick={onUserClick} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
              <img src={imgNguoiDung} alt="user" style={{ height: 32 }} />
              <span style={{ fontSize: 13, fontWeight: 400 }}>{user?.email || user?.username || "User123@gmail.com"}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <main style={{ flex: 1, padding: "4rem 8%", maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "2.5rem" }}>Lịch sử xem phim</h1>
        
        {/* Tab Selection like in screenshot */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "1.5rem", 
          background: isDark ? "#1e293b" : "white", 
          padding: "1rem 2rem", 
          borderRadius: "16px",
          width: "fit-content",
          marginBottom: "2rem",
          cursor: "pointer",
          border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
          boxShadow: isDark ? "none" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
        }}>
           <img src={imgOpenBook} alt="Store" style={{ height: "30px", filter: isDark ? "invert(1)" : "none" }} />
           <span style={{ fontSize: "24px", fontWeight: "bold", color: isDark ? "#60a5fa" : "#2563eb" }}>Truyện (1)</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* History List Item */}
          <div style={{ 
            backgroundColor: CARD_BG, 
            borderRadius: "16px", 
            padding: "2rem", 
            boxShadow: isDark ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)" : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
            border: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
               {/* Left: Book Icon */}
               <div style={{ background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)", padding: "1rem", borderRadius: "12px" }}>
                 <img src={imgOpenBook} alt="Open Book" style={{ height: "40px", filter: isDark ? "invert(1) sepia(1) saturate(5) hue-rotate(100deg)" : "sepia(1) saturate(2) hue-rotate(100deg)" }} />
               </div>

               {/* Center: Info */}
               <div>
                  <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "0.5rem", color: TEXT_COLOR }}>Lớp học sát thủ</h2>
                  <p style={{ fontSize: "14px", color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)" }}>15/3/2026, 8:25 AM (Chương 1)</p>
               </div>
            </div>

            {/* Right: Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
               <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                  <span style={{ fontSize: "26px", fontWeight: "bold", color: isDark ? "#3b82f6" : "#2563eb" }}>Đọc tiếp</span>
                  <span style={{ fontSize: "26px", color: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}>→</span>
                  <span style={{ fontSize: "26px", color: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}>Chương 1</span>
               </div>
               <button style={{ 
                 background: "transparent", 
                 border: "none", 
                 color: "#ef4444", 
                 fontSize: "26px", 
                 fontWeight: "bold", 
                 cursor: "pointer" 
               }}>Xóa</button>
            </div>
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