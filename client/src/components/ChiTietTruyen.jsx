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
const imgUser = "https://www.figma.com/api/mcp/asset/a33a2536-3008-4ac1-87af-011fd3bb59d1";
const imgCoverDefault = "https://www.figma.com/api/mcp/asset/be4a6751-ce0e-487b-8a43-b93a863b6b27";

const chapters = [
  { id: 1, title: "Chương 1: Gặp gỡ bí ẩn", time: "1 tháng trước" },
  { id: 2, title: "Chương 2: Bí ẩn quá khứ", time: "1 tháng trước" },
  { id: 3, title: "Chương 3: Lời hẹn ước", time: "1 tháng trước" },
  { id: 4, title: "Chương 4: Quyết định cuối cùng", time: "1 tháng trước" },
  { id: 5, title: "Chương 5: Hành trình mới", time: "1 tháng trước" },
  { id: 6, title: "Chương 6: Kết thúc hay bắt đầu", time: "1 tháng trước" },
];

export default function ChiTietTruyen({ user, onHomeClick, onFavoritesClick, onCategoriesClick, onHistoryClick, onUserClick, onNotificationClick, onRatingClick, onChapterClick, theme, onThemeToggle }) {
  const isDark = theme === "dark";
  const BG_COLOR = isDark ? "#0f172a" : "#f1f5f9";
  const NAV_BG = isDark ? "#131928" : "#e0e7ff";
  const TEXT_COLOR = isDark ? "white" : "#1e293b";
  const ROW_BG = isDark ? "#131928" : "#f8fafc";
  const ACCENT_PURPLE = "#b3a1ff";

  return (
    <div style={{ backgroundColor: BG_COLOR, color: TEXT_COLOR, minHeight: "100vh", fontFamily: "Inter, sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <nav style={{ display: "flex", alignItems: "center", padding: "1rem 2rem", backgroundColor: NAV_BG, position: "sticky", top: 0, zIndex: 50, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", justifyContent: "space-between" }}>
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
          <div style={{ background: ACCENT_PURPLE, borderRadius: 8, display: "flex", alignItems: "center", padding: "0.4rem 1rem", gap: 10, width: 300 }}>
            <img src={imgSearch} alt="Search" style={{ height: "18px" }} />
            <span style={{ color: "black", opacity: 0.6, fontSize: "14px" }}>Tìm truyện ......</span>
          </div>
          <img src={imgThemeToggle} alt="Theme Toggle" style={{ height: "24px", cursor: "pointer" }} onClick={onThemeToggle} />
          <img src={imgNotification} alt="Notifications" style={{ height: "24px", cursor: "pointer" }} onClick={onNotificationClick} />
          <div onClick={onUserClick} style={{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer" }}>
            <img src={imgUser} alt="User" style={{ height: "32px" }} />
            <span style={{ fontSize: "13px" }}>{user?.email || user?.username || "Guest"}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: "3rem 8%", display: "flex", gap: "3rem", flex: 1 }}>
        {/* Sidebar */}
        <aside style={{ width: "300px", display: "flex", flexDirection: "column", gap: "2rem" }}>
          <img src={imgCoverDefault} alt="Cover" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)" }} />
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", color: "#3b82f6" }}>
              <span style={{ fontSize: "40px" }}>▶</span>
              <span style={{ fontSize: "20px", fontWeight: "bold", color: TEXT_COLOR }}>Đọc chương mới nhất</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", color: "#3b82f6" }}>
              <span style={{ fontSize: "40px" }}>💙</span>
              <span style={{ fontSize: "20px", fontWeight: "bold", color: TEXT_COLOR }}>Theo dõi/ Yêu thích</span>
            </div>
            {/* Added Rating Button here */}
             <button
              onClick={onRatingClick}
              style={{
                marginTop: "1rem",
                padding: "16px 20px",
                backgroundColor: ACCENT_PURPLE,
                color: "#131928",
                border: "none",
                borderRadius: 12,
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.2s, background-color 0.2s",
                boxShadow: "0 4px 15px rgba(179, 161, 255, 0.4)"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "#c4b5ff";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = ACCENT_PURPLE;
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Đánh giá truyện
            </button>
          </div>
        </aside>

        {/* Chapter List Area */}
        <section style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
            <div>
              <h1 style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}>Đại Tượng Vô Hình</h1>
              <p style={{ fontSize: "20px", fontWeight: 500, marginTop: "1rem" }}>Danh sách chương: 100 Chap....</p>
            </div>
            <div style={{ border: "1px solid #475569", padding: "0.5rem 1rem", borderRadius: "8px", fontSize: "18px", fontWeight: "bold", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
              Mới cập nhật <span>▼</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: isDark ? "#334155" : "#e2e8f0", borderRadius: "8px", overflow: "hidden" }}>
            {chapters.map(ch => (
              <div 
                key={ch.id} 
                onClick={onChapterClick}
                style={{ backgroundColor: ROW_BG, padding: "1.2rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = isDark ? "#1e293b" : "#f1f5f9"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = ROW_BG}
              >
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>{ch.title}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
                  <span style={{ fontSize: "16px", color: "#94a3b8" }}>{ch.time}</span>
                  <span style={{ fontSize: "24px", color: "#3b82f6", fontWeight: "bold" }}>›</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem", marginTop: "3rem", fontSize: "24px", fontWeight: "bold" }}>
             <span style={{ cursor: "pointer" }}>‹</span>
             <span style={{ color: "#3b82f6", cursor: "pointer" }}>1</span>
             <span style={{ cursor: "pointer" }}>2</span>
             <span style={{ cursor: "pointer" }}>3</span>
             <span>......</span>
             <span style={{ cursor: "pointer" }}>11</span>
             <span style={{ cursor: "pointer" }}>›</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ marginTop: "auto", backgroundColor: NAV_BG, borderTop: "6px solid #b3a1ff", padding: "3rem 8%", display: "flex", flexDirection: "column", gap: "2rem" }}>
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
}
