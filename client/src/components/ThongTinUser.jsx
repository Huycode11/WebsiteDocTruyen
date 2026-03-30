import { useState } from "react";

const imgLogo = "https://www.figma.com/api/mcp/asset/9be4cec6-9b5d-427f-8a01-29247089f437";
const imgBook = "https://www.figma.com/api/mcp/asset/5437a700-29ed-44a9-9d06-4fa236756d90";
const imgSearch = "https://www.figma.com/api/mcp/asset/8376f474-7699-43d0-af0d-35f111fa8d31";
const imgUser = "https://www.figma.com/api/mcp/asset/a33a2536-3008-4ac1-87af-011fd3bb59d1";
const imgAvatar = "https://www.figma.com/api/mcp/asset/0e401e56-6462-4460-8a02-80e5f0e1776b";
const imgFacebook = "https://www.figma.com/api/mcp/asset/9fd9aaea-1284-4c09-ba10-a807afac6270";
const imgTelegram = "https://www.figma.com/api/mcp/asset/919f5117-4fc0-484d-9e71-b8d991371972";
const imgTikTok = "https://www.figma.com/api/mcp/asset/18138309-e035-4154-ad53-e3e719aa19ca";
const imgDiscord = "https://www.figma.com/api/mcp/asset/cfc86f8e-c8fe-4528-a9cd-d994e7e6dd3a";

const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#131928",
  color: "#ffffff",
  fontFamily: "Inter, Arial, sans-serif",
};

const labelStyle = {
  fontSize: "1.9rem",
  lineHeight: 1.2,
  marginBottom: 18,
  display: "block",
};

const boxStyle = {
  width: "100%",
  height: 82,
  borderRadius: 18,
  border: "3px solid #ffffff",
  backgroundColor: "transparent",
  color: "#ffffff",
  fontSize: "1.45rem",
  padding: "0 24px",
  boxSizing: "border-box",
  outline: "none",
};

function NavItem({ icon, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      {icon ? <img src={icon} alt="" style={{ width: 38, height: 38, objectFit: "contain" }} /> : null}
      <span style={{ fontSize: 28, whiteSpace: "nowrap" }}>{text}</span>
    </div>
  );
}

function FooterLink({ children }) {
  return <span style={{ fontSize: 30, lineHeight: 1.35 }}>{children}</span>;
}

export default function ThongTinUser({ onBack }) {
  const [formData, setFormData] = useState({
    email: "User123@gmail.com",
    username: "admin",
    fullName: "abc",
    gender: "male",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={pageStyle}>
      <div style={{ maxWidth: 1440, margin: "0 auto", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <header
          style={{
            height: 124,
            display: "flex",
            alignItems: "center",
            padding: "0 28px",
            boxSizing: "border-box",
          }}
        >
          <img src={imgLogo} alt="Fimory" style={{ width: 190, height: 60, objectFit: "contain", marginRight: 34 }} />

          <div style={{ display: "flex", alignItems: "center", gap: 28, flex: 1 }}>
            <NavItem icon={imgBook} text="Series" />
            <NavItem text="Categories" />
            <NavItem text="Favorites" />
            <NavItem text="History" />
          </div>

          <div
            style={{
              width: 380,
              height: 58,
              borderRadius: 12,
              backgroundColor: "#b3a1ff",
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "0 18px",
              color: "#101522",
              boxSizing: "border-box",
              marginRight: 26,
            }}
          >
            <img src={imgSearch} alt="" style={{ width: 32, height: 32, objectFit: "contain" }} />
            <span style={{ fontSize: 24 }}>Tim truyen ......</span>
          </div>

          <button
            type="button"
            onClick={onBack}
            style={{
              border: "none",
              background: "transparent",
              padding: 0,
              marginRight: 14,
              cursor: "pointer",
            }}
          >
            <img src={imgUser} alt="User" style={{ width: 54, height: 54, objectFit: "contain" }} />
          </button>
          <span style={{ fontSize: 28, whiteSpace: "nowrap" }}>{formData.email}</span>
        </header>

        <main
          style={{
            flex: 1,
            padding: "48px 34px 70px",
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "340px minmax(0, 1fr)",
            gap: 70,
            alignItems: "start",
          }}
        >
          <section style={{ paddingTop: 32 }}>
            <div
              style={{
                width: 194,
                height: 194,
                margin: "0 auto",
                borderRadius: 18,
                overflow: "hidden",
                backgroundColor: "#ffffff",
              }}
            >
              <img src={imgAvatar} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <div style={{ textAlign: "center", marginTop: 20 }}>
              <div style={{ fontSize: 50, lineHeight: 1.2 }}>User</div>
              <div style={{ fontSize: 34, marginTop: 14 }}>Tham gia: XX/XX/XXXX</div>
            </div>
          </section>

          <section>
            <div style={{ fontSize: 36, marginBottom: 28 }}>Thong tin tai khoan</div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Email</label>
                <div style={{ position: "relative" }}>
                  <input name="email" value={formData.email} onChange={handleChange} style={{ ...boxStyle, paddingLeft: 92 }} />
                  <span
                    style={{
                      position: "absolute",
                      left: 24,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 46,
                      height: 46,
                      borderRadius: "50%",
                      border: "3px solid #ffffff",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 18,
                    }}
                  >
                    @
                  </span>
                </div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Tai khoan</label>
                <input name="username" value={formData.username} onChange={handleChange} style={boxStyle} />
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Ho ten</label>
                <input name="fullName" value={formData.fullName} onChange={handleChange} style={boxStyle} />
              </div>

              <div style={{ marginBottom: 28 }}>
                <span style={labelStyle}>Gioi tinh</span>
                <div style={{ display: "flex", alignItems: "center", gap: 54, padding: "8px 0 0 8px" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, cursor: "pointer" }}>
                    <span
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        border: "3px solid #ffffff",
                        backgroundColor: formData.gender === "male" ? "#ffffff" : "transparent",
                        boxShadow: formData.gender === "male" ? "inset 0 0 0 7px #131928" : "none",
                      }}
                    />
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                      style={{ display: "none" }}
                    />
                    Nam
                  </label>

                  <label style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, cursor: "pointer" }}>
                    <span
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        border: "3px solid #ffffff",
                        backgroundColor: formData.gender === "female" ? "#ffffff" : "transparent",
                        boxShadow: formData.gender === "female" ? "inset 0 0 0 7px #131928" : "none",
                      }}
                    />
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                      style={{ display: "none" }}
                    />
                    Nu
                  </label>
                </div>
              </div>

              <div style={{ marginBottom: 30 }}>
                <label style={labelStyle}>Mat khau</label>
                <div style={{ position: "relative" }}>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Nhap mat khau moi"
                    style={{ ...boxStyle, paddingLeft: 92 }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: 24,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 46,
                      height: 46,
                      borderRadius: 10,
                      border: "3px solid #ffffff",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 18,
                    }}
                  >
                    *
                  </span>
                </div>
              </div>

              <div style={{ marginBottom: 26 }}>
                <span style={labelStyle}>Avatar</span>
                <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
                  <div
                    style={{
                      width: 240,
                      height: 120,
                      borderRadius: 18,
                      border: "3px solid #ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 30,
                    }}
                  >
                    Chon tep
                  </div>
                  <div
                    style={{
                      width: 160,
                      height: 120,
                      borderRadius: 18,
                      border: "3px solid #ffffff",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 56,
                    }}
                  >
                    +
                  </div>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  maxWidth: 760,
                  height: 82,
                  borderRadius: 18,
                  border: "3px solid #ffffff",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  fontSize: 30,
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: "0.08em",
                }}
              >
                CAP NHAT
              </button>
            </form>
          </section>
        </main>

        <footer
          style={{
            borderTop: "6px solid #b3a1ff",
            padding: "34px 34px 40px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 28 }}>
            <div>
              <img src={imgLogo} alt="Fimory" style={{ width: 220, height: 70, objectFit: "contain", marginBottom: 20 }} />
              <div style={{ display: "grid", gap: 10 }}>
                <FooterLink>Chinh sach bao mat</FooterLink>
                <FooterLink>Dieu khoan su dung</FooterLink>
              </div>
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              <FooterLink>Gioi thieu</FooterLink>
              <FooterLink>Hoi dap</FooterLink>
              <FooterLink>Lien he</FooterLink>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 18, paddingTop: 6 }}>
              <img src={imgFacebook} alt="Facebook" style={{ width: 58, height: 58, objectFit: "contain" }} />
              <img src={imgTelegram} alt="Telegram" style={{ width: 58, height: 58, objectFit: "contain" }} />
              <img src={imgDiscord} alt="Discord" style={{ width: 58, height: 58, objectFit: "contain" }} />
              <img src={imgTikTok} alt="TikTok" style={{ width: 58, height: 58, objectFit: "contain" }} />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
