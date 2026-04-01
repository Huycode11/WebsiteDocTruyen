import React, { useEffect, useMemo, useState } from "react";
const imgCover = "https://www.figma.com/api/mcp/asset/be4a6751-ce0e-487b-8a43-b93a863b6b27"; // Chàng trai năm ấy
const imgLogo = "https://www.figma.com/api/mcp/asset/9be4cec6-9b5d-427f-8a01-29247089f437";
const imgFacebook = "https://www.figma.com/api/mcp/asset/9fd9aaea-1284-4c09-ba10-a807afac6270";
const imgTelegram = "https://www.figma.com/api/mcp/asset/919f5117-4fc0-484d-9e71-b8d991371972";
const imgTikTok = "https://www.figma.com/api/mcp/asset/18138309-e035-4154-ad53-e3e719aa19ca";
const imgDiscord = "https://www.figma.com/api/mcp/asset/cfc86f8e-c8fe-4528-a9cd-d994e7e6dd3a";

const imgOpenBook = "https://www.figma.com/api/mcp/asset/5437a700-29ed-44a9-9d06-4fa236756d90";
const imgSearch = "https://www.figma.com/api/mcp/asset/8376f474-7699-43d0-af0d-35f111fa8d31";
const imgUser = "https://www.figma.com/api/mcp/asset/a33a2536-3008-4ac1-87af-011fd3bb59d1";
const imgThemeToggle = "https://www.figma.com/api/mcp/asset/46247a4e-68a5-4cee-8ff5-5379e6a32174";

function StarRating({ value, onChange, size = 32 }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        style={{
          cursor: onChange ? "pointer" : "default",
          color: i <= value ? "#FFD700" : "#cbd5e1",
          fontSize: size,
          marginRight: 4,
        }}
        onClick={() => onChange && onChange(i)}
      >
        ★
      </span>
    );
  }
  return <div style={{ display: "flex" }}>{stars}</div>;
}

export default function CommentsRatingPage({ user, onBack, onHistoryClick, onUploadClick, theme, onThemeToggle }) {
  const isDark = theme === "dark";
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const storageKey = "fimory:reviews:single";

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (raw) setReviews(JSON.parse(raw));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !comment.trim()) return;

    const newRev = {
      id: Date.now(),
      user: "User123@gmail.com",
      rating,
      comment: comment.trim(),
      date: new Date().toLocaleDateString(),
    };
    const updated = [newRev, ...reviews];
    setReviews(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setRating(0);
    setComment("");
    setMessage("Đã gửi bình luận!");
    setTimeout(() => setMessage(""), 3000);
  };

  const APP_BG = isDark ? "#0f172a" : "#dbeafe";
  const NAV_BG = isDark ? "#131928" : "#e0e7ff";
  const BOX_BG = isDark ? "#1e1b4b" : "white"; // Dark purple/indigo or white
  const TEXT_COLOR = isDark ? "white" : "#1e293b";
  const ACCENT_PURPLE = "#b3a1ff";

  return (
    <div style={{ backgroundColor: APP_BG, minHeight: "100vh", color: TEXT_COLOR, fontFamily: "Inter, sans-serif" }}>
      
      {/* ── NAVBAR ── */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0.8rem 2.5rem", background: NAV_BG, position: "sticky", top: 0, zIndex: 100
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={onBack}>
             <div style={{ background: "#4f46e5", borderRadius: 8, padding: 8, display: "flex" }}>
               <img src={imgLogo} alt="Logo" style={{ height: 24 }} />
             </div>
             <span style={{ fontSize: 24, fontWeight: "bold", color: "#818cf8" }}>Fimory</span>
          </div>
          <div style={{ display: "flex", gap: "1.5rem", fontSize: 16, fontWeight: 500 }}>
             <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
               <img src={imgOpenBook} alt="Series" style={{ height: 20 }} />
               <span>Series</span>
             </div>
              <span style={{ cursor: "pointer", color: TEXT_COLOR }}>Categories</span>
              <span style={{ cursor: "pointer", color: TEXT_COLOR }}>Favorites</span>
              <span style={{ cursor: "pointer", color: TEXT_COLOR }} onClick={onHistoryClick}>History</span>
              {user && <span style={{ cursor: "pointer", color: TEXT_COLOR }} onClick={onUploadClick}>Upload</span>}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div style={{ background: ACCENT_PURPLE, borderRadius: 8, display: "flex", alignItems: "center", padding: "0.4rem 1rem", gap: 10, width: 350 }}>
            <img src={imgSearch} alt="search" style={{ height: 24 }} />
            <input type="text" placeholder="Tìm truyện ......" style={{ background: "transparent", border: "none", outline: "none", color: "#131928", fontWeight: 600, width: "100%" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <img src={imgThemeToggle} alt="theme" style={{ height: 24, cursor: "pointer" }} onClick={onThemeToggle} />
            <span style={{ fontSize: 24, cursor: "pointer", color: TEXT_COLOR }}>🔔</span>
            <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", color: TEXT_COLOR }}>
              <img src={imgUser} alt="user" style={{ height: 32 }} />
              <span style={{ fontSize: 14 }}>{user?.email || user?.username || "User123@gmail.com"}</span>
            </div>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 1400, margin: "60px auto", padding: "0 40px", display: "grid", gridTemplateColumns: "250px 1fr 300px", gap: 60 }}>
        
        {/* Left: Cover & Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <img src={imgCover} alt="Cover" style={{ width: "100%", borderRadius: 4, height: "auto" }} />
          
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
                  <span style={{ color: "#3b82f6", fontSize: 40 }}>▶</span>
                  <span style={{ fontSize: 20, fontWeight: "bold" }}>Đọc chương mới nhất</span>
              </div>
            </div>
        </div>

        {/* Center: Story Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <h1 style={{ fontSize: 32, fontWeight: "bold", margin: 0 }}>Đại Tượng Vô Hình</h1>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 20, fontSize: 18 }}>
             <div><span style={{ fontWeight: "bold" }}>Tác giả:</span> Đang cập nhật</div>
             <div><span style={{ fontWeight: "bold" }}>Thể loại:</span> Hành động, Viễn tưởng</div>
             <div><span style={{ fontWeight: "bold" }}>Trạng thái:</span> Đang cập nhật</div>
          </div>

          <section>
            <h2 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15 }}>GIỚI THIỆU</h2>
            <div style={{ background: BOX_BG, padding: "20px", borderRadius: 4, fontSize: 16, lineHeight: "1.6", color: isDark ? "#ccc" : "#475569", border: isDark ? "none" : "1px solid #e2e8f0" }}>
              Nữ chính xuất hiện trong một lần tai nạn xe bị sinh vật bí ẩn ......
            </div>
          </section>

          <section style={{ display: "flex", alignItems: "center", gap: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: "bold", margin: 0 }}>ĐÁNH GIÁ</h2>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <span style={{ fontSize: 28, fontWeight: "bold" }}>4.0</span>
              <StarRating value={4} size={36} />
            </div>
          </section>
        </div>

        {/* Right: Comments Panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <h2 style={{ fontSize: 24, fontWeight: "bold", margin: "0 0 10px 0", textAlign: "center" }}>BÌNH LUẬN</h2>
          <div style={{ background: BOX_BG, borderRadius: 4, padding: "20px", minHeight: 400, display: "flex", flexDirection: "column", gap: 20, border: isDark ? "none" : "1px solid #e2e8f0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
               <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
                   <div style={{ width: 44, height: 44, background: "#475569", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <span style={{ fontSize: 20 }}>👤</span>
                   </div>
                   <span style={{ fontWeight: "bold", fontSize: 18 }}>Hay</span>
               </div>
            </div>

            {/* Quick Comment Form */}
            <form onSubmit={handleSubmit} style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
               <StarRating value={rating} onChange={setRating} size={18} />
               <textarea 
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Để lại bình luận..."
                  style={{ width: "100%", background: isDark ? "#334155" : "#f1f5f9", border: "none", borderRadius: 4, padding: 10, color: TEXT_COLOR, outline: "none", resize: "none" }}
               />
               <button type="submit" style={{ background: ACCENT_PURPLE, border: "none", borderRadius: 4, padding: "8px", fontWeight: "bold", cursor: "pointer", color: "#131928" }}>Gửi</button>
            </form>
          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ background: NAV_BG, borderTop: `6px solid ${ACCENT_PURPLE}`, padding: "3rem 4rem" }}>
         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", gap: "5rem" }}>
               <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ background: "#4f46e5", borderRadius: 8, padding: 6, display: "flex" }}>
                       <img src={imgLogo} alt="Logo" style={{ height: 20 }} />
                    </div>
                    <span style={{ fontSize: 20, fontWeight: "bold", color: "#818cf8" }}>Fimory</span>
                  </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 16, color: TEXT_COLOR }}>
                    <span style={{ cursor: "pointer" }}>Chính sách bảo mật</span>
                    <span style={{ cursor: "pointer" }}>Điều khoản sử dụng</span>
                  </div>
               </div>
               <div style={{ display: "flex", flexDirection: "column", gap: 15, fontSize: 16, paddingTop: 6, color: TEXT_COLOR }}>
                  <span style={{ cursor: "pointer", fontWeight: "bold" }}>Giới thiệu</span>
                  <span style={{ cursor: "pointer", fontWeight: "bold" }}>Hỏi đáp</span>
               </div>
               <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 16, paddingTop: 6, color: TEXT_COLOR }}>
                  <span style={{ cursor: "pointer", fontWeight: "bold" }}>Liên hệ</span>
               </div>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
               <img src={imgFacebook} alt="fb" style={{ height: 32 }} />
               <img src={imgTelegram} alt="tg" style={{ height: 32 }} />
               <img src={imgDiscord} alt="ds" style={{ height: 32 }} />
               <img src={imgTikTok} alt="tk" style={{ height: 32 }} />
            </div>
         </div>
      </footer>
    </div>
  );
}

