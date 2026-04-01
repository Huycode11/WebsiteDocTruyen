import React from "react";

const imgImage1 = "https://www.figma.com/api/mcp/asset/9be4cec6-9b5d-427f-8a01-29247089f437";
const imgOpenBook = "https://www.figma.com/api/mcp/asset/5437a700-29ed-44a9-9d06-4fa236756d90";
const imgSearch = "https://www.figma.com/api/mcp/asset/8376f474-7699-43d0-af0d-35f111fa8d31";
const imgNutSangTi = "https://www.figma.com/api/mcp/asset/46247a4e-68a5-4cee-8ff5-5379e6a32174";
const imgThongBao = "https://www.figma.com/api/mcp/asset/9dbaced7-0b92-475e-8a8d-7061ac0f354a";
const imgNgiDung = "https://www.figma.com/api/mcp/asset/a33a2536-3008-4ac1-87af-011fd3bb59d1";
const imgFacebook = "https://www.figma.com/api/mcp/asset/9fd9aaea-1284-4c09-ba10-a807afac6270";
const imgTelegram = "https://www.figma.com/api/mcp/asset/919f5117-4fc0-484d-9e71-b8d991371972";
const imgTikTok = "https://www.figma.com/api/mcp/asset/18138309-e035-4154-ad53-e3e719aa19ca";
const imgDiscordNew = "https://www.figma.com/api/mcp/asset/cfc86f8e-c8fe-4528-a9cd-d994e7e6dd3a";

const stories = [
  {
    id: 1,
    title: "Toàn trí độc giả",
    img: "https://www.figma.com/api/mcp/asset/be4a6751-ce0e-487b-8a43-b93a863b6b27"
  },
  {
    id: 2,
    title: "Đại tượng vô hình",
    img: "https://www.figma.com/api/mcp/asset/166ab19c-ff41-465e-a693-ba9fe242d88b"
  }
];

export default function FavoritesPage({ user, onHomeClick, onUploadClick, onNotificationClick, onUserClick, onHistoryClick, onStoryClick, theme, onThemeToggle }) {
  const isDark = theme === "dark";
  const APP_BG = isDark ? "#0f172a" : "#dbeafe";
  const NAV_BG = isDark ? "#131928" : "#e0e7ff";
  const TEXT_COLOR = isDark ? "white" : "#1e293b";
  const CARD_BG = isDark ? "#252d40" : "#ffffff";

  return (
    <div style={{ backgroundColor: APP_BG, color: TEXT_COLOR, minHeight: "100vh", fontFamily: "Inter, sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: NAV_BG,
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        justifyContent: "space-between"
      }}>
        {/* Left: Logo & Menu */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          <div onClick={onHomeClick} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            <img src={imgImage1} alt="Logo" style={{ height: "45px" }} />
          </div>

          <div style={{ display: "flex", gap: "1.2rem", alignItems: "center", color: TEXT_COLOR, fontSize: "15px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
              <img src={imgOpenBook} alt="Series" style={{ height: "20px" }} />
              <span>Series</span>
            </div>
            <span style={{ cursor: "pointer" }}>Categories</span>
            <span style={{ cursor: "pointer", color: "#818cf8" }}>Favorites</span>
            <span style={{ cursor: "pointer" }} onClick={onHistoryClick}>History</span>
            {user && <span style={{ cursor: "pointer" }} onClick={onUploadClick}>Upload</span>}
          </div>
        </div>

        {/* Right: Search & Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "0.5rem", 
            backgroundColor: "#a594f9", 
            padding: "0.4rem 1rem", 
            borderRadius: "6px", 
            cursor: "pointer",
            width: "320px"
          }}>
            <img src={imgSearch} alt="Search" style={{ height: "18px" }} />
            <input 
              type="text" 
              placeholder="Tìm truyện ......" 
              style={{ background: "transparent", border: "none", outline: "none", color: "black", opacity: 0.8, fontSize: "14px", width: "100%" }} 
            />
          </div>

          <img src={imgNutSangTi} alt="Theme Toggle" style={{ height: "24px", cursor: "pointer" }} onClick={onThemeToggle} />
          <img 
            src={imgThongBao} 
            alt="Notifications" 
            style={{ height: "24px", cursor: "pointer" }} 
            onClick={onNotificationClick}
          />
          
          <div onClick={onUserClick} style={{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer" }}>
            <img src={imgNgiDung} alt="User" style={{ height: "32px" }} />
            <span style={{ fontSize: "13px", fontWeight: 400, color: TEXT_COLOR }}>
              {user?.email || user?.username || "Guest"}
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: "3rem 8%", flex: 1 }}>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "2rem" }}>Danh sách yêu thích</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "2.5rem"
        }}>
          {stories.map(story => (
            <div key={story.id} style={{
              backgroundColor: CARD_BG,
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
              display: "flex",
              flexDirection: "column"
            }}>
              <div style={{ position: "relative", height: "320px", cursor: "pointer" }} onClick={() => onStoryClick(story)}>
                <img
                  src={story.img}
                  alt={story.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.8rem", flexShrink: 0 }}>
                <div style={{ fontSize: "14px", fontWeight: "600", color: TEXT_COLOR }}>{story.title}</div>
                <button style={{
                  backgroundColor: "rgba(239, 68, 68, 0.7)",
                  color: "white",
                  border: "none",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "background 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(239, 68, 68, 0.9)"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "rgba(239, 68, 68, 0.7)"}
                >
                  Xoá khỏi yêu thích
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        marginTop: "auto",
        backgroundColor: NAV_BG,
        borderTop: "6px solid #b3a1ff",
        padding: "3rem 8%",
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "3rem" }}>
          <div style={{ display: "flex", gap: "5rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={onHomeClick}>
                <img src={imgImage1} alt="Footer Logo" style={{ height: "55px" }} />
              </div>
              <div style={{ display: "flex", gap: "2rem" }}>
                <img src={imgFacebook} alt="FB" style={{ height: "32px", cursor: "pointer" }} />
                <img src={imgTelegram} alt="TG" style={{ height: "32px", cursor: "pointer" }} />
                <img src={imgDiscordNew} alt="DS" style={{ height: "32px", cursor: "pointer" }} />
                <img src={imgTikTok} alt="TK" style={{ height: "32px", cursor: "pointer" }} />
              </div>
            </div>

            <div style={{ display: "flex", gap: "4rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", fontSize: "15px", fontWeight: "500" }}>
                <span style={{ cursor: "pointer" }}>Chính sách bảo mật</span>
                <span style={{ cursor: "pointer" }}>Điều khoản sử dụng</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", fontSize: "15px", fontWeight: "500" }}>
                <span style={{ cursor: "pointer" }}>Giới thiệu</span>
                <span style={{ cursor: "pointer" }}>Hỏi đáp</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", fontSize: "15px", fontWeight: "500" }}>
                <span style={{ cursor: "pointer" }}>Liên hệ</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

