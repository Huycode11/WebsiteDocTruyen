import React, { useEffect, useMemo, useState } from "react";

const imgLogo = "https://www.figma.com/api/mcp/asset/9be4cec6-9b5d-427f-8a01-29247089f437";
const imgFacebook = "https://www.figma.com/api/mcp/asset/9fd9aaea-1284-4c09-ba10-a807afac6270";
const imgTelegram = "https://www.figma.com/api/mcp/asset/919f5117-4fc0-484d-9e71-b8d991371972";
const imgTikTok = "https://www.figma.com/api/mcp/asset/18138309-e035-4154-ad53-e3e719aa19ca";
const imgDiscord = "https://www.figma.com/api/mcp/asset/cfc86f8e-c8fe-4528-a9cd-d994e7e6dd3a";
import figmaBg from "../figma_77_242.png";

const bgW = 2773;
const bgH = 1578;
const footerStart = 1251; // y bắt đầu của footer trong node 77:242
const footerH = bgH - footerStart;
function getUserEmail() {
  // Đăng nhập hiện tại chỉ lưu token, nên email lấy từ trường email khi submit.
  return localStorage.getItem("userEmail") || "User123@gmail.com";
}

function StarRow({ value, onChange, size = 26 }) {
  const filled = Math.max(0, Math.min(5, value || 0));
  const buttons = [];
  for (let i = 1; i <= 5; i++) {
    const isFilled = i <= filled;
    buttons.push(
      <button
        key={i}
        type="button"
        onClick={() => onChange?.(i)}
        aria-label={`Đánh giá ${i} sao`}
        style={{
          width: size,
          height: size,
          padding: 0,
          border: "none",
          background: "transparent",
          cursor: onChange ? "pointer" : "default",
          color: isFilled ? "#b3a1ff" : "rgba(179,161,255,0.35)",
          fontSize: size,
          lineHeight: `${size}px`,
          textAlign: "center",
        }}
        disabled={!onChange}
      >
        ★
      </button>
    );
  }
  return <div style={{ display: "flex", gap: 6, alignItems: "center" }}>{buttons}</div>;
}

export default function CommentsRatingPage({ onBack }) {
  const searchParams = useMemo(() => new URLSearchParams(window.location.search), []);
  const seriesId = searchParams.get("seriesId") || "default-series";
  const chapterId = searchParams.get("chapterId") || "default-chapter";
  const storageKey = `fimory:reviews:v1:${seriesId}:${chapterId}`;

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [scale, setScale] = useState(1);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setReviews(parsed);
    } catch {
      // Ignore corrupted localStorage.
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(reviews));
    } catch {
      // Ignore write failures (e.g. private mode).
    }
  }, [reviews, storageKey]);

  useEffect(() => {
    const updateScale = () => {
      // Scale theo chiều ngang màn hình để tránh tràn ngang, đồng thời crop footer khớp.
      const next = Math.min(1, window.innerWidth / bgW);
      setScale(Number.isFinite(next) && next > 0 ? next : 1);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const stats = useMemo(() => {
    const count = reviews.length;
    const sum = reviews.reduce((acc, r) => acc + (Number(r.rating) || 0), 0);
    const avg = count ? sum / count : 0;
    const roundedAvg = Math.round(avg * 10) / 10;
    return { count, avg: roundedAvg };
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    const trimmed = comment.trim();
    if (!rating) {
      setMessage("Vui lòng chọn số sao trước khi gửi.");
      return;
    }
    if (!trimmed) {
      setMessage("Vui lòng nhập nội dung bình luận.");
      return;
    }

    const nextReview = {
      id: `${Date.now()}_${Math.random().toString(16).slice(2)}`,
      userEmail: getUserEmail(),
      rating,
      comment: trimmed,
      createdAt: new Date().toISOString(),
    };
    setReviews((prev) => [nextReview, ...prev]);
    setRating(0);
    setComment("");
    setMessage("Gửi bình luận thành công!");
  };

  return (
    <div
      style={{
        backgroundColor: "#131928",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Roboto, sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Phần đầu trang (crop bỏ footer để footer nằm dưới cùng) */}
      <div style={{ width: bgW * scale, margin: "0 auto" }}>
        <div style={{ height: footerStart * scale, overflow: "hidden" }}>
          <img
            src={figmaBg}
            alt="Figma top"
            style={{
              width: bgW * scale,
              height: bgH * scale,
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Phần bình luận/đánh giá (frontend-only) */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 16px 40px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 620 }}>
            <h1 style={{ fontSize: 40, margin: "0 0 10px 0" }}>Bình luận & Đánh giá</h1>
            <p style={{ fontSize: 16, color: "#cbd5e1", margin: 0 }}>
              {stats.count
                ? `Điểm trung bình: ${stats.avg} (${stats.count} đánh giá)`
                : "Chưa có đánh giá nào. Hãy là người đầu tiên!"}
            </p>
          </div>

          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              style={{
                border: "1px solid rgba(179,161,255,0.55)",
                background: "rgba(179,161,255,0.08)",
                color: "white",
                padding: "10px 16px",
                borderRadius: 12,
                cursor: "pointer",
                fontWeight: 800,
                height: 40,
              }}
            >
              Quay lại
            </button>
          ) : null}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24, marginTop: 20 }}>
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              maxWidth: 520,
              backgroundColor: "#232b3b",
              padding: 36,
              borderRadius: 12,
              boxShadow: "0 4px 16px 0 rgba(0,0,0,0.12)",
            }}
          >
            {message ? (
              <div
                style={{
                  background: message.includes("thành công") ? "#065f46" : "#991b1b",
                  color: "white",
                  padding: 10,
                  borderRadius: 4,
                  marginBottom: 18,
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                {message}
              </div>
            ) : null}

            <div style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>Đánh giá của bạn</div>
            <StarRow value={rating} onChange={(v) => setRating(v)} size={30} />

            <div style={{ marginTop: 18, fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>Bình luận</div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Nhập nội dung bình luận của bạn..."
              style={{
                width: "100%",
                minHeight: 120,
                resize: "vertical",
                padding: 12,
                background: "#334155",
                border: "none",
                borderRadius: 4,
                color: "white",
                outline: "none",
              }}
            />

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginTop: 18 }}>
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: 14,
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: 6,
                  fontSize: 18,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Gửi bình luận
              </button>
              <button
                type="button"
                onClick={() => {
                  setRating(0);
                  setComment("");
                  setMessage("");
                }}
                style={{
                  padding: "14px 16px",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(179,161,255,0.55)",
                  color: "white",
                  borderRadius: 6,
                  fontSize: 18,
                  fontWeight: "bold",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Xóa
              </button>
            </div>
          </form>

          {/* Recent */}
          <div
            style={{
              width: "100%",
              maxWidth: 520,
              backgroundColor: "#232b3b",
              padding: 36,
              borderRadius: 12,
              boxShadow: "0 4px 16px 0 rgba(0,0,0,0.12)",
              alignSelf: "flex-start",
            }}
          >
            <div style={{ fontSize: 22, fontWeight: "bold", marginBottom: 12 }}>Xếp hạng gần đây</div>
            {!reviews.length ? (
              <div style={{ color: "#cbd5e1", lineHeight: "26px" }}>
                Chưa có bình luận nào. Hãy gửi đánh giá đầu tiên!
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {reviews.slice(0, 5).map((r) => (
                  <div
                    key={r.id}
                    style={{
                      border: "1px solid rgba(179,161,255,0.25)",
                      borderRadius: 8,
                      background: "#0b1220",
                      padding: 14,
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                      <div style={{ fontWeight: 900 }}>{r.userEmail}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <StarRow value={r.rating} size={18} />
                        <div style={{ fontWeight: 900, color: "#e5e7eb" }}>{r.rating} sao</div>
                      </div>
                    </div>
                    <div style={{ marginTop: 8, color: "rgba(255,255,255,0.86)", lineHeight: "22px" }}>{r.comment}</div>
                    <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                      {new Date(r.createdAt).toLocaleString("vi-VN")}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Full comment list */}
        <div
          style={{
            marginTop: 24,
            backgroundColor: "#232b3b",
            padding: 36,
            borderRadius: 12,
            boxShadow: "0 4px 16px 0 rgba(0,0,0,0.12)",
          }}
        >
          <div style={{ fontSize: 22, fontWeight: "bold", marginBottom: 12 }}>Tất cả bình luận</div>
          {!reviews.length ? (
            <div style={{ color: "#cbd5e1" }}>Chưa có bình luận.</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {reviews.map((r) => (
                <div
                  key={r.id}
                  style={{
                    border: "1px solid rgba(179,161,255,0.18)",
                    borderRadius: 12,
                    background: "#0b1220",
                    padding: 16,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                    <div style={{ fontWeight: 900 }}>{r.userEmail}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <StarRow value={r.rating} size={20} />
                      <div style={{ fontWeight: 900, color: "#e5e7eb" }}>{r.rating} sao</div>
                    </div>
                  </div>
                  <div style={{ marginTop: 8, color: "rgba(255,255,255,0.86)", lineHeight: "22px" }}>{r.comment}</div>
                  <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                    {new Date(r.createdAt).toLocaleString("vi-VN")}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer (crop từ ảnh Figma đặt ở dưới cùng) */}
      <div style={{ width: bgW * scale, margin: "0 auto" }}>
        <div style={{ height: footerH * scale, overflow: "hidden" }}>
          <img
            src={figmaBg}
            alt="Figma footer"
            style={{
              width: bgW * scale,
              height: bgH * scale,
              display: "block",
              transform: `translateY(-${footerStart * scale}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

