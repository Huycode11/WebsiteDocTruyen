import React, { useState } from "react";

const imgImage1 = "https://www.figma.com/api/mcp/asset/9be4cec6-9b5d-427f-8a01-29247089f437";
const imgFacebook = "https://www.figma.com/api/mcp/asset/9fd9aaea-1284-4c09-ba10-a807afac6270";
const imgTelegram = "https://www.figma.com/api/mcp/asset/919f5117-4fc0-484d-9e71-b8d991371972";
const imgTikTok = "https://www.figma.com/api/mcp/asset/18138309-e035-4154-ad53-e3e719aa19ca";
const imgDiscordNew = "https://www.figma.com/api/mcp/asset/cfc86f8e-c8fe-4528-a9cd-d994e7e6dd3a";

const imgThemeToggle = "https://www.figma.com/api/mcp/asset/46247a4e-68a5-4cee-8ff5-5379e6a32174";

export default function DangKy({ onBack, theme, onThemeToggle }) {
  const isDark = theme === "dark";
  const APP_BG = isDark ? "#0f172a" : "#dbeafe";
  const FORM_BG = isDark ? "#1e293b" : "white";
  const TEXT_COLOR = isDark ? "white" : "#1e293b";
  const INPUT_BG = isDark ? "#334155" : "#f1f5f9";

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    terms: false
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match!" });
      return;
    }
    if (!formData.terms) {
      setMessage({ type: "error", text: "You must agree to the terms!" });
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("http://localhost:8081/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Account created successfully! You can now sign in." });
        // Clear form
        setFormData({
          email: "",
          username: "",
          fullName: "",
          password: "",
          confirmPassword: "",
          terms: false
        });
        // Optionally redirect after a delay
        setTimeout(() => onBack(), 2000);
      } else {
        setMessage({ type: "error", text: data.error || "Registration failed" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Connection error. Please check if the server is running." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: APP_BG, minHeight: "100vh", position: "relative", width: "100%", paddingBottom: "569px", color: TEXT_COLOR, fontFamily: "Roboto, sans-serif" }}>
      
      {/* Header Logo */}
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px", gap: "10px", alignItems: "center" }}>
        <img src={imgImage1} alt="Logo" style={{ height: "40px" }} />
        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#818cf8" }}>Fimory</span>
        <div 
          onClick={onThemeToggle} 
          style={{ cursor: "pointer", marginLeft: 20, display: "flex", alignItems: "center" }}
        >
          <img src={imgThemeToggle} alt="Theme" style={{ height: 28 }} />
        </div>
      </div>

      <h1 style={{ textAlign: "center", fontSize: "48px", marginTop: "20px", marginBottom: "10px" }}>Create your account</h1>
      <p style={{ textAlign: "center", fontSize: "18px", color: isDark ? "#94a3b8" : "#475569", marginBottom: "40px" }}>Join Fimory and start streaming</p>

      {/* Form Container */}
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto", backgroundColor: FORM_BG, padding: "40px", borderRadius: "8px", boxShadow: isDark ? "0 4px 6px -1px rgb(0 0 0 / 0.1)" : "0 4px 16px 0 rgba(0,0,0,0.08)" }}>
        
        {message.text && (
          <div style={{ 
            padding: "12px", 
            marginBottom: "20px", 
            borderRadius: "4px", 
            backgroundColor: message.type === "success" ? "#065f46" : "#991b1b",
            color: "white",
            textAlign: "center"
          }}>
            {message.text}
          </div>
        )}

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", color: isDark ? "#cbd5e1" : "#475569" }}>Email Address</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email" 
            required
            style={{ width: "100%", padding: "12px", backgroundColor: INPUT_BG, border: isDark ? "none" : "1px solid #e2e8f0", borderRadius: "4px", color: TEXT_COLOR }} 
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", color: isDark ? "#cbd5e1" : "#475569" }}>Username</label>
          <input 
            type="text" 
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Choose a username" 
            required
            style={{ width: "100%", padding: "12px", backgroundColor: INPUT_BG, border: isDark ? "none" : "1px solid #e2e8f0", borderRadius: "4px", color: TEXT_COLOR }} 
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", color: isDark ? "#cbd5e1" : "#475569" }}>Full Name</label>
          <input 
            type="text" 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name" 
            required
            style={{ width: "100%", padding: "12px", backgroundColor: INPUT_BG, border: isDark ? "none" : "1px solid #e2e8f0", borderRadius: "4px", color: TEXT_COLOR }} 
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", color: isDark ? "#cbd5e1" : "#475569" }}>Password</label>
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password" 
            required
            style={{ width: "100%", padding: "12px", backgroundColor: INPUT_BG, border: isDark ? "none" : "1px solid #e2e8f0", borderRadius: "4px", color: TEXT_COLOR }} 
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", color: isDark ? "#cbd5e1" : "#475569" }}>Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password" 
            required
            style={{ width: "100%", padding: "12px", backgroundColor: INPUT_BG, border: isDark ? "none" : "1px solid #e2e8f0", borderRadius: "4px", color: TEXT_COLOR }} 
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "30px" }}>
          <input 
            type="checkbox" 
            id="terms" 
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          <label htmlFor="terms" style={{ color: "#94a3b8", fontSize: "14px" }}>
            I agree to the <span style={{ color: "#3b82f6" }}>Terms of Service</span> and <span style={{ color: "#3b82f6" }}>Privacy Policy</span>
          </label>
        </div>

        <button 
          type="submit"
          disabled={loading}
          style={{ 
            width: "100%", 
            padding: "15px", 
            backgroundColor: loading ? "#475569" : "#1d4ed8", 
            color: "white", 
            border: "none", 
            borderRadius: "8px", 
            fontSize: "18px", 
            fontWeight: "bold", 
            cursor: loading ? "not-allowed" : "pointer", 
            marginBottom: "20px" 
          }}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p style={{ textAlign: "center", color: "#94a3b8" }}>
          Already have an account?
        </p>
        <p style={{ textAlign: "center", color: "#3b82f6", fontWeight: "bold", cursor: "pointer", marginTop: "10px" }} onClick={onBack}>
          Sign in instead
        </p>
      </form>

      {/* Footer (Same as Home) */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", backgroundColor: isDark ? "#131928" : "#e0e7ff", borderTop: "6px solid #b3a1ff", height: "569px", padding: "50px 114px", boxSizing: "border-box" }}>
        <div style={{ height: "177px", width: "569px", marginBottom: "50px" }}>
          <img src={imgImage1} alt="Footer Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ display: "flex", gap: "100px", flexWrap: "wrap", color: TEXT_COLOR }}>
          <div>
            <p style={{ fontSize: "45px", marginBottom: "30px" }}>Chính sách bảo mật</p>
            <p style={{ fontSize: "45px" }}>Điều khoản sử dụng</p>
          </div>
          <div>
            <p style={{ fontSize: "45px", marginBottom: "30px" }}>Giới thiệu</p>
            <p style={{ fontSize: "45px" }}>Hỏi đáp</p>
          </div>
          <div>
            <p style={{ fontSize: "45px" }}>Liên hệ</p>
            <div style={{ display: "flex", gap: "20px", marginTop: "40px" }}>
              <img src={imgFacebook} alt="FB" style={{ width: "138px", height: "113px", objectFit: "contain" }} />
              <img src={imgTelegram} alt="TG" style={{ width: "138px", height: "113px", objectFit: "contain" }} />
              <img src={imgTikTok} alt="TK" style={{ width: "138px", height: "113px", objectFit: "contain" }} />
              <img src={imgDiscordNew} alt="DS" style={{ width: "138px", height: "113px", objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
