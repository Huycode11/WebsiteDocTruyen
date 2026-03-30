import React, { useState } from "react";
import imgCoverLocal from "../anh1.png";

const imgLogo = "https://www.figma.com/api/mcp/asset/9be4cec6-9b5d-427f-8a01-29247089f437";
const imgFacebook = "https://www.figma.com/api/mcp/asset/9fd9aaea-1284-4c09-ba10-a807afac6270";
const imgTelegram = "https://www.figma.com/api/mcp/asset/919f5117-4fc0-484d-9e71-b8d991371972";
const imgTikTok = "https://www.figma.com/api/mcp/asset/18138309-e035-4154-ad53-e3e719aa19ca";
const imgDiscord = "https://www.figma.com/api/mcp/asset/cfc86f8e-c8fe-4528-a9cd-d994e7e6dd3a";
const imgSearch = "https://www.figma.com/api/mcp/asset/26f4d014a151b3b1df0756444673702bba26995f";
const imgOpenBook = "https://www.figma.com/api/mcp/asset/7f4dff1657f5199a7083843042c9f2c8a51d7c2c";
const imgThemeToggle = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d81d053-a182-45aa-b78d-154e37e077f2";
const imgNotification = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6192694-ab37-479a-b1ca-bb67f1ee139f";
const imgUser = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3e5fe7f-7f63-442b-9600-752edc47fac9";

// Sample chapter data
const sampleChapters = [
  { id: 1, title: "Chapter", code: "CH001", type: "5 Ảnh" },
];

export default function ChiTietTruyen({ onHomeClick, onFavoritesClick, onUserClick, onRatingClick }) {
  const [chapters] = useState(sampleChapters);

  const BG_PAGE = "#20212C";
  const BG_NAVBAR = "#131928";
  const BG_TABLE_HEADER = "#3F4763";
  const BG_TABLE_ROW = "#1E2535";
  const ACCENT_PURPLE = "#B3A1FF";
  const TEXT_WHITE = "#FFFFFF";

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
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={onHomeClick}>
            <img src={imgLogo} alt="Logo" style={{ height: 55 }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
            <img src={imgOpenBook} alt="Series" style={{ width: 44, height: 44 }} />
            <span style={{ fontSize: 20, color: TEXT_WHITE }}>Series</span>
          </div>
          <span style={{ fontSize: 20, color: TEXT_WHITE, cursor: "pointer" }}>Categories</span>
          <span style={{ fontSize: 20, color: TEXT_WHITE, cursor: "pointer" }} onClick={onFavoritesClick}>Favorites</span>
          <span style={{ fontSize: 20, color: TEXT_WHITE, cursor: "pointer" }}>History</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ background: ACCENT_PURPLE, borderRadius: 10, display: "flex", alignItems: "center", padding: "8px 16px", gap: 10, minWidth: 300 }}>
            <img src={imgSearch} alt="search" style={{ width: 36, height: 36 }} />
            <input type="text" placeholder="Tìm truyện ......" style={{ background: "transparent", border: "none", outline: "none", color: "#1a1a2e", fontWeight: 600, fontSize: 18, width: "100%" }} />
          </div>
          <img src={imgThemeToggle} alt="Sáng/Tối" style={{ width: 48, height: 48, cursor: "pointer" }} />
          <img src={imgNotification} alt="Thông báo" style={{ width: 48, height: 48, cursor: "pointer" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }} onClick={onUserClick}>
            <img src={imgUser} alt="Người dùng" style={{ width: 48, height: 48 }} />
            <span style={{ fontSize: 18 }}>User123@gmail.com</span>
          </div>
        </div>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <main style={{ flex: 1, padding: "40px 50px 60px 50px" }}>
        {/* ... (rest of content) */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, margin: 0, fontFamily: "Inter, sans-serif" }}>
              Danh sách chương đã upload
            </h2>
            <span style={{ fontSize: 22, fontWeight: 700, color: ACCENT_PURPLE }}>
              Tổng chương: {chapters.length}
            </span>
          </div>

          <div style={{ borderRadius: "10px 10px 0 0", overflow: "hidden" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr 220px 220px",
              padding: "16px 24px",
              background: BG_TABLE_HEADER,
              fontSize: 20,
              fontWeight: 700,
              fontFamily: "Inter, sans-serif",
              gap: 16,
            }}>
              <span>#</span>
              <span>Tiêu đề chương</span>
              <span>Mã chương</span>
              <span>Kiểu nội dung</span>
            </div>

            {chapters.map((ch, index) => (
              <div
                key={ch.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 220px 220px",
                  padding: "18px 24px",
                  background: index % 2 === 0 ? BG_TABLE_ROW : "#252D40",
                  fontSize: 20,
                  gap: 16,
                  alignItems: "center",
                  cursor: "pointer",
                  borderTop: `1px solid ${BG_TABLE_HEADER}`,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#2C3A55"}
                onMouseLeave={e => e.currentTarget.style.background = index % 2 === 0 ? BG_TABLE_ROW : "#252D40"}
              >
                <span>{ch.id}</span>
                <span style={{ fontWeight: 400 }}>{ch.title}</span>
                <span style={{ color: "#94a3b8", fontSize: 18 }}>{ch.code}</span>
                <span style={{ color: "#93c5fd", fontSize: 18 }}>{ch.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Cover Image and Rating Button */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 30, marginTop: 20 }}>
          <img
            src={imgCoverLocal}
            alt="Story Cover"
            style={{
              maxWidth: "100%",
              width: 800,
              borderRadius: 12,
              objectFit: "contain",
              boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
            }}
          />
          <button
            onClick={onRatingClick}
            style={{
              padding: "16px 40px",
              backgroundColor: ACCENT_PURPLE,
              color: "#131928",
              border: "none",
              borderRadius: 12,
              fontSize: 24,
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
      </main>

      {/* ── FOOTER ── */}
      <footer style={{
        background: BG_NAVBAR,
        borderTop: `5px solid ${ACCENT_PURPLE}`,
        padding: "36px 60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 4 }}>
          <img src={imgLogo} alt="Footer Logo" style={{ height: 50 }} />
        </div>
        <div style={{ display: "flex", gap: 28 }}>
          <a href="#"><img src={imgFacebook} alt="Facebook" style={{ width: 46, height: 46 }} /></a>
          <a href="#"><img src={imgTelegram} alt="Telegram" style={{ width: 46, height: 46 }} /></a>
          <a href="#"><img src={imgDiscord} alt="Discord" style={{ width: 46, height: 46 }} /></a>
          <a href="#"><img src={imgTikTok} alt="TikTok" style={{ width: 46, height: 46 }} /></a>
        </div>
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap", justifyContent: "center", color: "#cbd5e1", fontSize: 17, fontWeight: 700 }}>
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
