import React, { useEffect, useMemo, useState } from "react";
import figmaBg from "../figma_77_242.png";

const bgW = 2773;
const bgH = 1578;
const footerStart = 1251; // derived from Figma frame geometry (matches split in screenshot)
const footerH = bgH - footerStart; // 327

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
    const updateScale = () => {
      // Scale toàn bộ canvas để tránh tràn ngang khi màn hình nhỏ hơn thiết kế gốc.
      const next = Math.min(1, window.innerWidth / bgW);
      setScale(Number.isFinite(next) && next > 0 ? next : 1);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

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
      {/* Outer container set scaled width để tránh tràn ngang do transform */}
      <div style={{ width: bgW * scale, margin: "0 auto", position: "relative" }}>
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: bgW }}>
        {/* Top (crop off footer) */}
        <div style={{ height: footerStart, overflow: "hidden" }}>
          <img
            src={figmaBg}
            alt="Figma layout"
            style={{ width: bgW, height: bgH, display: "block" }}
          />
        </div>

        {/* Comment/Rating (frontend-only) */}
        <div style={{ padding: "28px 60px 24px 60px", backgroundColor: "#131928" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
            <div>
              <div style={{ fontSize: 34, fontWeight: 800, marginBottom: 8 }}>Bình luận & Đánh giá</div>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 16 }}>
                {stats.count ? `Điểm trung bình: ${stats.avg} (${stats.count} đánh giá)` : "Chưa có đánh giá nào. Hãy là người đầu tiên!"}
              </div>
            </div>
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
                fontWeight: 700,
              }}
            >
              Quay lại
            </button>
          </div>

          <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 24 }}>
            <form
              onSubmit={handleSubmit}
              style={{
                border: "1px solid rgba(179,161,255,0.25)",
                borderRadius: 16,
                background: "rgba(255,255,255,0.03)",
                padding: 22,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>Đánh giá của bạn</div>
              <StarRow value={rating} onChange={(v) => setRating(v)} />
              <div style={{ marginTop: 16, fontSize: 18, fontWeight: 800, marginBottom: 10 }}>Bình luận</div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Nhập nội dung bình luận của bạn..."
                style={{
                  width: "100%",
                  minHeight: 120,
                  resize: "vertical",
                  padding: 14,
                  borderRadius: 12,
                  border: "1px solid rgba(179,161,255,0.25)",
                  background: "rgba(17,24,39,0.65)",
                  color: "white",
                  outline: "none",
                }}
              />

              {message ? (
                <div
                  style={{
                    marginTop: 14,
                    padding: 12,
                    borderRadius: 10,
                    background: message.includes("thành công") ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)",
                    border: "1px solid rgba(179,161,255,0.25)",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  {message}
                </div>
              ) : null}

              <div style={{ marginTop: 14, display: "flex", gap: 12, alignItems: "center" }}>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    border: "none",
                    background: "#b3a1ff",
                    color: "#131928",
                    fontSize: 18,
                    fontWeight: 900,
                    padding: "12px 16px",
                    borderRadius: 12,
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
                    border: "1px solid rgba(179,161,255,0.55)",
                    background: "rgba(179,161,255,0.08)",
                    color: "white",
                    fontWeight: 800,
                    padding: "12px 14px",
                    borderRadius: 12,
                    cursor: "pointer",
                  }}
                >
                  Xóa
                </button>
              </div>
            </form>

            <div style={{ border: "1px solid rgba(179,161,255,0.25)", borderRadius: 16, background: "rgba(255,255,255,0.03)", padding: 22 }}>
              <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>Xếp hạng gần đây</div>
              {!reviews.length ? (
                <div style={{ color: "rgba(255,255,255,0.75)", lineHeight: "24px" }}>
                  Chưa có bình luận nào. Hãy gửi đánh giá đầu tiên!
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {reviews.slice(0, 5).map((r) => (
                    <div
                      key={r.id}
                      style={{
                        border: "1px solid rgba(179,161,255,0.18)",
                        borderRadius: 14,
                        background: "rgba(17,24,39,0.55)",
                        padding: 14,
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                        <div style={{ fontWeight: 900 }}>{r.userEmail}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <StarRow value={r.rating} size={18} />
                          <div style={{ fontWeight: 900, color: "rgba(255,255,255,0.85)" }}>{r.rating}.0</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 8, color: "rgba(255,255,255,0.86)", lineHeight: "22px" }}>
                        {r.comment}
                      </div>
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
          <div style={{ marginTop: 22, border: "1px solid rgba(179,161,255,0.25)", borderRadius: 16, background: "rgba(255,255,255,0.03)", padding: 22 }}>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>Tất cả bình luận</div>
            {!reviews.length ? (
              <div style={{ color: "rgba(255,255,255,0.75)" }}>Chưa có bình luận.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {reviews.map((r) => (
                  <div
                    key={r.id}
                    style={{
                      border: "1px solid rgba(179,161,255,0.18)",
                      borderRadius: 14,
                      background: "rgba(17,24,39,0.55)",
                      padding: 16,
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                      <div style={{ fontWeight: 900 }}>{r.userEmail}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <StarRow value={r.rating} size={20} />
                        <div style={{ fontWeight: 900, color: "rgba(255,255,255,0.85)" }}>{r.rating} sao</div>
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

        {/* Bottom (footer from crop) */}
        <div style={{ height: footerH, overflow: "hidden" }}>
          <img
            src={figmaBg}
            alt="Figma footer"
            style={{ width: bgW, height: bgH, display: "block", transform: `translateY(-${footerStart}px)` }}
          />
        </div>
        </div>
      </div>
    </div>
  );
}

