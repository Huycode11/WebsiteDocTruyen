import React, { useState } from "react";

const imgLogo = "https://www.figma.com/api/mcp/asset/9be4cec6-9b5d-427f-8a01-29247089f437";
const imgFacebook = "https://www.figma.com/api/mcp/asset/9fd9aaea-1284-4c09-ba10-a807afac6270";
const imgTelegram = "https://www.figma.com/api/mcp/asset/919f5117-4fc0-484d-9e71-b8d991371972";
const imgTikTok = "https://www.figma.com/api/mcp/asset/18138309-e035-4154-ad53-e3e719aa19ca";
const imgDiscord = "https://www.figma.com/api/mcp/asset/cfc86f8e-c8fe-4528-a9cd-d994e7e6dd3a";

export default function DangNhap({ onBack, onRegister, onSuccess }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8081/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.email, // The backend expects 'username' but we use email field for both
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Đăng nhập thành công!");
        // Store token if needed, or just redirect
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        // Pass the user object to the onSuccess callback
        setTimeout(() => onSuccess({
          username: data.username,
          userId: data.userId,
          email: formData.email // We use email from form since backend might not return it
        }), 1000);
      } else {
        setMessage(data.error || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      setMessage("Connection error. Please check if the server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", position: "relative", width: "100%", color: "white", fontFamily: "Roboto, sans-serif" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "center", paddingTop: 40, gap: 10, alignItems: "center" }}>
        <img src={imgLogo} alt="Logo" style={{ height: 40 }} />
        <span style={{ fontSize: 24, fontWeight: "bold", color: "#818cf8" }}>Fimory</span>
      </div>
      <h1 style={{ textAlign: "center", fontSize: 40, marginTop: 20, marginBottom: 10 }}>Welcome back</h1>
      <p style={{ textAlign: "center", fontSize: 16, color: "#cbd5e1", marginBottom: 30 }}>Sign in to your account to continue</p>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ maxWidth: 420, margin: "0 auto", backgroundColor: "#232b3b", padding: 36, borderRadius: 12, boxShadow: "0 4px 16px 0 rgba(0,0,0,0.12)", marginBottom: 40 }}>
        {message && (
          <div style={{ background: "#065f46", color: "white", padding: 10, borderRadius: 4, marginBottom: 18, textAlign: "center" }}>{message}</div>
        )}
        <div style={{ marginBottom: 18 }}>
          <label style={{ display: "block", marginBottom: 6, color: "#cbd5e1" }}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={{ width: "100%", padding: 12, background: "#334155", border: "none", borderRadius: 4, color: "white" }}
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={{ display: "block", marginBottom: 6, color: "#cbd5e1" }}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            style={{ width: "100%", padding: 12, background: "#334155", border: "none", borderRadius: 4, color: "white" }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            <label htmlFor="remember" style={{ color: "#94a3b8", fontSize: 14 }}>Remember me</label>
          </div>
          <a href="#" style={{ color: "#818cf8", fontSize: 14, textDecoration: "none" }}>Forgot your password?</a>
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{ width: "100%", padding: 14, background: loading ? "#475569" : "#2563eb", color: "white", border: "none", borderRadius: 6, fontSize: 18, fontWeight: "bold", cursor: loading ? "not-allowed" : "pointer", marginBottom: 16 }}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <span style={{ color: "#cbd5e1" }}>Don't have an account?</span>
          <span 
            style={{ color: "#3b82f6", fontWeight: "bold", marginLeft: 6, cursor: "pointer" }} 
            onClick={onRegister}
          >
            Sign up for free
          </span>
        </div>
      </form>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", background: "#131928", borderTop: "4px solid #b3a1ff", padding: "32px 0 16px 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 18 }}>
          <img src={imgLogo} alt="Footer Logo" style={{ height: 32 }} />
          <span style={{ fontSize: 22, fontWeight: "bold", color: "#818cf8" }}>Fimory</span>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 12 }}>
          <a href="#"><img src={imgFacebook} alt="Facebook" style={{ width: 28, height: 28 }} /></a>
          <a href="#"><img src={imgTelegram} alt="Telegram" style={{ width: 28, height: 28 }} /></a>
          <a href="#"><img src={imgDiscord} alt="Discord" style={{ width: 28, height: 28 }} /></a>
          <a href="#"><img src={imgTikTok} alt="TikTok" style={{ width: 28, height: 28 }} /></a>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap", color: "#cbd5e1", fontSize: 14 }}>
          <span>Chính sách bảo mật</span>
          <span>Điều khoản sử dụng</span>
          <span>Giới thiệu</span>
          <span>Hỏi đáp</span>
          <span>Liên hệ</span>
        </div>
      </div>
    </div>
  );
}
