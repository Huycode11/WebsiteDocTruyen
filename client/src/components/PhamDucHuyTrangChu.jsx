import React, { useEffect, useState } from "react";

const imgImage2 = "https://www.figma.com/api/mcp/asset/be4a6751-ce0e-487b-8a43-b93a863b6b27";
const imgImage3 = "https://www.figma.com/api/mcp/asset/d355aaac-0094-4386-aebd-130c6aa161db";
const imgImage5 = "https://www.figma.com/api/mcp/asset/dfeda891-28e0-49ce-82c8-d9826159fc86";
const imgImage6 = "https://www.figma.com/api/mcp/asset/1b7aa74d-fae9-4c1c-83aa-95cb890bfc5c";
const imgImage7 = "https://www.figma.com/api/mcp/asset/08e34b82-07cc-47b1-b24f-4f79f265d23e";
const imgImage1 = "https://www.figma.com/api/mcp/asset/9be4cec6-9b5d-427f-8a01-29247089f437";
const imgFacebook = "https://www.figma.com/api/mcp/asset/9fd9aaea-1284-4c09-ba10-a807afac6270";
const imgTelegram = "https://www.figma.com/api/mcp/asset/919f5117-4fc0-484d-9e71-b8d991371972";
const imgTikTok = "https://www.figma.com/api/mcp/asset/18138309-e035-4154-ad53-e3e719aa19ca";
const imgDiscordNew = "https://www.figma.com/api/mcp/asset/cfc86f8e-c8fe-4528-a9cd-d994e7e6dd3a";
const imgOpenBook = "https://www.figma.com/api/mcp/asset/5437a700-29ed-44a9-9d06-4fa236756d90";
const imgSearch = "https://www.figma.com/api/mcp/asset/8376f474-7699-43d0-af0d-35f111fa8d31";
const imgNutSangTi = "https://www.figma.com/api/mcp/asset/46247a4e-68a5-4cee-8ff5-5379e6a32174";
const imgThongBao = "https://www.figma.com/api/mcp/asset/9dbaced7-0b92-475e-8a8d-7061ac0f354a";
const imgNgiDung = "https://www.figma.com/api/mcp/asset/a33a2536-3008-4ac1-87af-011fd3bb59d1";
const imgImage4 = "https://www.figma.com/api/mcp/asset/166ab19c-ff41-465e-a693-ba9fe242d88b";

export default function PhamDucHuyTrangChu({ user, stories = [], favorites = [], onUserClick, onSearchClick, onCategoriesClick, onLoginClick, onLogout, onUploadClick, onFavoritesClick, onStoryClick, onNotificationClick, onHistoryClick, theme, onThemeToggle }) {
  const isDark = theme === "dark";
  const APP_BG = isDark ? "#0f172a" : "#dbeafe";
  const NAV_BG = isDark ? "#131928" : "#e0e7ff";
  const TEXT_COLOR = isDark ? "white" : "#1e293b";
  const CARD_TEXT_BG = isDark ? "#131928" : "white";
  const FOOTER_BG = isDark ? "#131928" : "#e0e7ff";

  const handleUserIconClick = () => {
    if (user) {
      onUserClick();
    } else {
      alert("Vui lòng đăng nhập để xem thông tin cá nhân!");
      onLoginClick();
    }
  };

  return (
    <div style={{ backgroundColor: APP_BG, minHeight: "100vh", color: TEXT_COLOR, fontFamily: "Inter, sans-serif" }}>
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
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <img src={imgImage1} alt="Logo" style={{ height: "45px", cursor: "pointer" }} />

          <div style={{ display: "flex", gap: "1.2rem", alignItems: "center", color: TEXT_COLOR, fontSize: "15px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
              <img src={imgOpenBook} alt="Series" style={{ height: "20px" }} />
              <span>Series</span>
            </div>
            <span style={{ cursor: "pointer" }} onClick={onCategoriesClick}>Categories</span>
            <span style={{ cursor: "pointer" }} onClick={onFavoritesClick}>Favorites</span>
            <span style={{ cursor: "pointer" }} onClick={onHistoryClick}>History</span>
            {user && <span style={{ cursor: "pointer" }} onClick={onUploadClick}>Upload</span>}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <div onClick={onSearchClick} style={{ 
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
            <span style={{ color: "black", opacity: 0.6, fontSize: "14px" }}>Tìm truyện ......</span>
          </div>

          <img src={imgNutSangTi} alt="Theme Toggle" style={{ height: "24px", cursor: "pointer" }} onClick={onThemeToggle} />
          <img 
            src={imgThongBao} 
            alt="Notifications" 
            style={{ height: "24px", cursor: "pointer" }} 
            onClick={onNotificationClick}
          />
          
          <div onClick={handleUserIconClick} style={{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer" }}>
            <img src={imgNgiDung} alt="User" style={{ height: "32px" }} />
            {user && (
              <span style={{ fontSize: "13px", fontWeight: 400, color: "white" }}>
                {user.email || user.username}
              </span>
            )}
          </div>

          {user ? (
            <button 
              onClick={onLogout} 
              style={{ backgroundColor: "#ef4444", border: "none", color: "white", padding: "0.35rem 0.8rem", borderRadius: "5px", fontWeight: "bold", cursor: "pointer", fontSize: "13px" }}
            >
              Đăng xuất
            </button>
          ) : (
            <button 
              onClick={onLoginClick} 
              style={{ backgroundColor: "#2563eb", border: "none", color: "white", padding: "0.35rem 0.8rem", borderRadius: "5px", fontWeight: "bold", cursor: "pointer", fontSize: "13px" }}
            >
              Đăng nhập
            </button>
          )}
        </div>
      </nav>

      {/* Main Content - Story Grid */}
      <main style={{ padding: "2rem 8%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "2rem"
        }}>
          {stories.map(story => (
            <div key={story.id}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                position: "relative",
                backgroundColor: "rgba(217, 217, 217, 0.05)"
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-10px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ position: "relative", aspectRatio: "167/239", overflow: "hidden" }}>
                <img
                  src={story.img}
                  alt={story.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onClick={() => onStoryClick(story)}
                />
                {story.hd && (
                  <div style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    color: "white",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    fontSize: "11px",
                    fontWeight: "bold",
                    border: "1px solid rgba(255,255,255,0.2)"
                  }}>HD</div>
                )}
                {/* Visual Overlay like the image */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                }} />
              </div>
              <div style={{ padding: "0.75rem 0.5rem", backgroundColor: CARD_TEXT_BG }}>
                <p style={{ margin: 0, fontWeight: "500", fontSize: "16px", textAlign: "center", color: TEXT_COLOR }}>
                  {story.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        marginTop: "auto",
        backgroundColor: FOOTER_BG,
        borderTop: "6px solid #b3a1ff",
        padding: "4rem 8%",
        display: "flex",
        flexDirection: "column",
        gap: "3rem"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "3rem" }}>
          <div style={{ display: "flex", gap: "5rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <img src={imgImage1} alt="Footer Logo" style={{ height: "55px", width: "auto" }} />
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

          <div style={{ display: "flex", gap: "1.5rem", paddingTop: "0.5rem" }}>
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
