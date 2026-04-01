import React, { useState } from "react";

const imgLogo = "https://www.figma.com/api/mcp/asset/9be4cec6-9b5d-427f-8a01-29247089f437";
const imgFacebook = "https://www.figma.com/api/mcp/asset/9fd9aaea-1284-4c09-ba10-a807afac6270";
const imgTelegram = "https://www.figma.com/api/mcp/asset/919f5117-4fc0-484d-9e71-b8d991371972";
const imgTikTok = "https://www.figma.com/api/mcp/asset/18138309-e035-4154-ad53-e3e719aa19ca";
const imgDiscord = "https://www.figma.com/api/mcp/asset/cfc86f8e-c8fe-4528-a9cd-d994e7e6dd3a";
const imgSearch = "https://www.figma.com/api/mcp/asset/26f4d014a151b3b1df0756444673702bba26995f";
const imgOpenBook = "https://www.figma.com/api/mcp/asset/7f4dff1657f5199a7083843042c9f2c8a51d7c2c";
const imgThemeToggle = "https://www.figma.com/api/mcp/asset/46247a4e-68a5-4cee-8ff5-5379e6a32174";
const imgNotification = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6192694-ab37-479a-b1ca-bb67f1ee139f";
const imgUser = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3e5fe7f-7f63-442b-9600-752edc47fac9";

export default function UploadStory({ user, onHomeClick, onUploadClick, onFavoritesClick, onUserClick, onNotificationClick, onHistoryClick, theme, onThemeToggle }) {
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    categories: [],
    storyType: "text",
    coverImage: null,
  });
  const [message, setMessage] = useState("");

  // Colors from Figma
  const BG_PAGE = isDark ? "#20212D" : "#dbeafe";
  const BG_NAVBAR = isDark ? "#131928" : "#e0e7ff";
  const BG_FORM = isDark ? "#1E2535" : "white";
  const BG_INPUT = isDark ? "#454D60" : "#f1f5f9";
  const BG_FOOTER = isDark ? "#131928" : "#e0e7ff";
  const ACCENT_PURPLE = "#B3A1FF";
  const TEXT_WHITE = isDark ? "#FFFFFF" : "#1e293b";
  const TEXT_MUTED = isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

  const handleCategoryChange = (cat) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter(c => c !== cat)
        : [...prev.categories, cat]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Story uploaded successfully!");
  };

  const inputStyle = {
    width: "100%",
    padding: "18px 20px",
    background: BG_INPUT,
    border: "none",
    borderRadius: 8,
    color: TEXT_WHITE,
    fontSize: 18,
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    marginBottom: 10,
    color: TEXT_WHITE,
    fontWeight: 700,
    fontSize: 20,
    fontFamily: "Inter, sans-serif",
  };

  const fieldStyle = { marginBottom: 28 };

  return (
    <div style={{ backgroundColor: BG_PAGE, minHeight: "100vh", color: TEXT_WHITE, fontFamily: "Roboto, Inter, sans-serif", display: "flex", flexDirection: "column" }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        background: BG_NAVBAR,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: 90,
        flexShrink: 0,
        borderBottom: `2px solid ${BG_INPUT}`,
      }}>
        {/* Left: Logo + nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={onHomeClick}>
            <img src={imgLogo} alt="Logo" style={{ height: 55 }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: BG_NAVBAR, padding: "8px 14px", borderRadius: 8, cursor: "pointer" }}>
            <img src={imgOpenBook} alt="Series" style={{ width: 55, height: 55 }} />
            <span style={{ fontSize: 22, color: TEXT_WHITE }}>Series</span>
          </div>
          <span style={{ fontSize: 22, color: TEXT_WHITE, cursor: "pointer" }} onClick={onFavoritesClick}>Favorites</span>
          <span style={{ fontSize: 22, color: TEXT_WHITE, cursor: "pointer" }} onClick={onHistoryClick}>History</span>
          {user && <span style={{ fontSize: 22, color: TEXT_WHITE, cursor: "pointer" }} onClick={onUploadClick}>Upload</span>}
        </div>

        {/* Right: Search + icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{
            background: ACCENT_PURPLE,
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
            gap: 10,
            minWidth: 340,
          }}>
            <img src={imgSearch} alt="search" style={{ width: 44, height: 44 }} />
            <input
              type="text"
              placeholder="Tìm truyện ......"
              style={{ background: "transparent", border: "none", outline: "none", color: "#1a1a2e", fontWeight: 600, fontSize: 20, width: "100%" }}
            />
          </div>
          <img src={imgThemeToggle} alt="Sáng/Tối" style={{ width: 48, height: 48, cursor: "pointer" }} onClick={onThemeToggle} />
          <img 
            src={imgNotification} 
            alt="Thông báo" 
            style={{ width: 48, height: 48, cursor: "pointer" }} 
            onClick={onNotificationClick}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }} onClick={onUserClick}>
            <img src={imgUser} alt="Người dùng" style={{ width: 48, height: 48 }} />
            <span style={{ fontSize: 20 }}>{user?.email || user?.username || "User123@gmail.com"}</span>
          </div>
        </div>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <main style={{ flex: 1, padding: "50px 60px 200px 60px" }}>
        {/* Form panel */}
        <div style={{
          background: BG_FORM,
          borderRadius: 12,
          padding: "50px 60px",
          maxWidth: 1400,
          margin: "0 auto",
          boxShadow: isDark ? "none" : "0 4px 20px rgba(0,0,0,0.05)",
        }}>
          {/* Title row */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 48 }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4B87FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <h1 style={{ fontSize: 38, fontWeight: 700, color: TEXT_WHITE, margin: 0, fontFamily: "Inter, sans-serif" }}>
              Upload new Story
            </h1>
          </div>

          {message && (
            <div style={{ background: "#065f46", color: "white", padding: 14, borderRadius: 6, marginBottom: 28, textAlign: "center", fontSize: 18 }}>{message}</div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Story title */}
            <div style={fieldStyle}>
              <label style={labelStyle}>Story title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter story title"
                required
                style={inputStyle}
              />
            </div>

            {/* Author */}
            <div style={fieldStyle}>
              <label style={labelStyle}>Author *</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={e => setFormData({ ...formData, author: e.target.value })}
                placeholder="Enter author name"
                required
                style={inputStyle}
              />
            </div>

            {/* Description */}
            <div style={fieldStyle}>
              <label style={labelStyle}>Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter story description"
                rows={5}
                required
                style={{ ...inputStyle, resize: "none", lineHeight: "1.6" }}
              ></textarea>
            </div>

            {/* Categories */}
            <div style={fieldStyle}>
              <label style={labelStyle}>Categories *</label>
              <div style={{ background: BG_INPUT, borderRadius: 8, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
                {['Hài Hước', 'Kinh dị', 'Phiêu lưu', 'Tình cảm'].map(cat => (
                  <label key={cat} style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer", fontSize: 20 }}>
                    <div
                      onClick={() => handleCategoryChange(cat)}
                      style={{
                        width: 26, height: 26, borderRadius: 4, border: `2px solid ${TEXT_WHITE}`,
                        background: formData.categories.includes(cat) ? "#818cf8" : "transparent",
                        cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center"
                      }}
                    >
                      {formData.categories.includes(cat) && <span style={{ fontSize: 14, color: "white" }}>✓</span>}
                    </div>
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Story Type */}
            <div style={fieldStyle}>
              <label style={labelStyle}>Story Type *</label>
              <div style={{ background: BG_INPUT, borderRadius: 8, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
                {['Truyện chữ (Text Story)'].map(type => (
                  <label key={type} style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer", fontSize: 20 }}>
                    <div
                      style={{
                        width: 26, height: 26, borderRadius: "50%", border: "2px solid #B3A1FF",
                        background: formData.storyType === "text" ? "#B3A1FF" : "transparent",
                        cursor: "pointer", flexShrink: 0,
                      }}
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Cover Image */}
            <div style={fieldStyle}>
              <label style={labelStyle}>Cover Image * (Max 100MB)</label>
              <div style={{ background: BG_INPUT, borderRadius: 8, display: "flex", alignItems: "stretch", overflow: "hidden" }}>
                <label htmlFor="file-input" style={{
                  background: "#e2e8f0", color: "#1a202c", fontWeight: 700, fontSize: 20,
                  padding: "18px 28px", cursor: "pointer", display: "flex", alignItems: "center", flexShrink: 0, fontFamily: "Inter, sans-serif"
                }}>
                  Choose File
                </label>
                <input id="file-input" type="file" style={{ display: "none" }} onChange={e => setFormData({ ...formData, coverImage: e.target.files[0] })} />
                <span style={{ padding: "18px 24px", color: TEXT_MUTED, fontSize: 20, display: "flex", alignItems: "center" }}>
                  {formData.coverImage ? formData.coverImage.name : "No file chosen"}
                </span>
              </div>
            </div>

            {/* Submit */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
              <button
                type="submit"
                style={{
                  background: "#4F46E5", color: "white", border: "none",
                  borderRadius: 8, padding: "18px 60px", fontSize: 22, fontWeight: 700, cursor: "pointer"
                }}
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{
        background: BG_FOOTER,
        borderTop: `5px solid ${ACCENT_PURPLE}`,
        padding: "36px 60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
          <img src={imgLogo} alt="Footer Logo" style={{ height: 55 }} />
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          <a href="#"><img src={imgFacebook} alt="Facebook" style={{ width: 50, height: 50 }} /></a>
          <a href="#"><img src={imgTelegram} alt="Telegram" style={{ width: 50, height: 50 }} /></a>
          <a href="#"><img src={imgDiscord} alt="Discord" style={{ width: 50, height: 50 }} /></a>
          <a href="#"><img src={imgTikTok} alt="TikTok" style={{ width: 50, height: 50 }} /></a>
        </div>
        <div style={{ display: "flex", gap: 50, flexWrap: "wrap", justifyContent: "center", color: isDark ? "#cbd5e1" : "#475569", fontSize: 18, fontWeight: 700 }}>
          <span style={{ cursor: "pointer" }}>Chính sách bảo mật</span>
          <span style={{ cursor: "pointer" }}>Điều khoản sử dụng</span>
          <span style={{ cursor: "pointer" }}>Giới thiệu</span>
          <span style={{ cursor: "pointer" }}>Hỏi đáp</span>
          <span style={{ cursor: "pointer" }}>Liên hệ</span>
        </div>
      </footer>
    </div>
  );
}
