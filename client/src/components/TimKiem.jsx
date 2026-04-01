const imgLogo = "https://www.figma.com/api/mcp/asset/9be4cec6-9b5d-427f-8a01-29247089f437";
const imgFacebook = "https://www.figma.com/api/mcp/asset/9fd9aaea-1284-4c09-ba10-a807afac6270";
const imgTelegram = "https://www.figma.com/api/mcp/asset/919f5117-4fc0-484d-9e71-b8d991371972";
const imgTikTok = "https://www.figma.com/api/mcp/asset/18138309-e035-4154-ad53-e3e719aa19ca";
const imgDiscordNew = "https://www.figma.com/api/mcp/asset/cfc86f8e-c8fe-4528-a9cd-d994e7e6dd3a";
const imgOpenBook = "https://www.figma.com/api/mcp/asset/5437a700-29ed-44a9-9d06-4fa236756d90";
const imgSearch = "https://www.figma.com/api/mcp/asset/8376f474-7699-43d0-af0d-35f111fa8d31";
const imgNutSangTi = "https://www.figma.com/api/mcp/asset/46247a4e-68a5-4cee-8ff5-5379e6a32174";
const imgThongBao = "https://www.figma.com/api/mcp/asset/9dbaced7-0b92-475e-8a8d-7061ac0f354a";
const imgNguoiDung = "https://www.figma.com/api/mcp/asset/a33a2536-3008-4ac1-87af-011fd3bb59d1";
const imgCover = "https://www.figma.com/api/mcp/asset/166ab19c-ff41-465e-a693-ba9fe242d88b";
const imgPlay = "https://www.figma.com/api/mcp/asset/d0bd3171-f31b-44a2-bf48-8fe2218d1537";

export default function TimKiem({ user, onBackHome, onUserClick, onUploadClick, onFavoritesClick, onNotificationClick, onHistoryClick, theme, onThemeToggle }) {
  const isDark = theme === "dark";
  const APP_BG = isDark ? "#131928" : "#dbeafe";
  const TEXT_COLOR = isDark ? "white" : "#1e293b";
  const NAV_BG = isDark ? "#131928" : "#e0e7ff";
  const FOOTER_BG = isDark ? "#131928" : "#e0e7ff";

  return (
    <div style={{ backgroundColor: APP_BG, minHeight: "100vh", overflowX: "auto" }}>
      <div style={{ position: "relative", width: "2805px", minHeight: "2644px", margin: "0 auto", backgroundColor: APP_BG }}>
        <div style={{ position: "absolute", backgroundColor: NAV_BG, height: "124px", width: "2805px", left: 0, top: 0 }}>
          <button type="button" onClick={onBackHome} style={{ position: "absolute", left: "27px", top: "22px", width: "247px", height: "77px", border: "none", background: "transparent", padding: 0, cursor: "pointer" }}>
            <img alt="Fimory" src={imgLogo} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </button>
          <div style={{ position: "absolute", height: "76px", width: "76px", left: "377px", top: "23px" }}>
            <img alt="" src={imgOpenBook} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <p style={{ position: "absolute", fontFamily: "Inter, sans-serif", fontSize: "30px", color: TEXT_COLOR, left: "400px", top: "45px", whiteSpace: "nowrap" }}>Series</p>
          <p style={{ position: "absolute", fontFamily: "Inter, sans-serif", fontSize: "30px", color: TEXT_COLOR, left: "530px", top: "45px", whiteSpace: "nowrap" }}>Categories</p>
          <p style={{ position: "absolute", fontFamily: "Inter, sans-serif", fontSize: "30px", color: TEXT_COLOR, left: "730px", top: "45px", whiteSpace: "nowrap", cursor: "pointer" }} onClick={onFavoritesClick}>Favorites</p>
          <p style={{ position: "absolute", fontFamily: "Inter, sans-serif", fontSize: "30px", color: TEXT_COLOR, left: "890px", top: "45px", whiteSpace: "nowrap", cursor: "pointer" }} onClick={onHistoryClick}>History</p>
          {user && <p style={{ position: "absolute", fontFamily: "Inter, sans-serif", fontSize: "30px", color: TEXT_COLOR, left: "1030px", top: "45px", whiteSpace: "nowrap", cursor: "pointer" }} onClick={onUploadClick}>Upload</p>}
          <div style={{ position: "absolute", backgroundColor: "#b3a1ff", height: "71px", width: "815px", left: "1259px", top: "20px", borderRadius: "12px" }}>
            <div style={{ position: "absolute", height: "64px", width: "64px", left: "17px", top: "4px" }}>
              <img alt="" src={imgSearch} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <p style={{ position: "absolute", fontFamily: "Inter, sans-serif", fontSize: "30px", color: "black", left: "110px", top: "18px", whiteSpace: "nowrap" }}>Tìm truyện ......</p>
          </div>
          <div style={{ position: "absolute", height: "79px", width: "79px", left: "2109px", top: "21px", cursor: "pointer" }} onClick={onThemeToggle}>
            <img alt="" src={imgNutSangTi} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div onClick={onNotificationClick} style={{ position: "absolute", height: "83px", width: "86px", left: "2223px", top: "22px", cursor: "pointer" }}>
            <img alt="" src={imgThongBao} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <button type="button" onClick={onUserClick} style={{ position: "absolute", height: "86px", width: "93px", left: "2344px", top: "19px", border: "none", background: "transparent", padding: 0, cursor: "pointer" }}>
            <img alt="User" src={imgNguoiDung} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </button>
          <p style={{ position: "absolute", fontFamily: "Roboto, sans-serif", fontSize: "35px", color: TEXT_COLOR, left: "2437px", top: "46px", whiteSpace: "nowrap" }}>{user?.email || user?.username || "User123@gmail.com"}</p>
        </div>

        <div style={{ position: "absolute", left: "692px", top: "288px", width: "1426px", height: "148px", border: `4px solid ${TEXT_COLOR}`, borderRadius: "16px", backgroundColor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.05)" }}>
          <div style={{ position: "absolute", left: "35px", top: "34px", width: "78px", height: "78px" }}>
            <img alt="" src={imgSearch} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <p style={{ position: "absolute", left: "152px", top: "42px", margin: 0, fontFamily: "Roboto, sans-serif", fontSize: "56px", color: TEXT_COLOR, whiteSpace: "nowrap" }}>Huyền giới chi môn</p>
        </div>

        <div style={{ position: "absolute", left: "984px", top: "592px", width: "835px", height: "900px", backgroundColor: "rgba(217,217,217,0.08)" }} />
        <div style={{ position: "absolute", left: "1050px", top: "650px", width: "705px", height: "640px" }}>
          <img alt="Huyền giới chi môn" src={imgCover} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <p style={{ position: "absolute", left: "1083px", top: "1322px", margin: 0, fontFamily: "Roboto, sans-serif", fontSize: "48px", fontWeight: "bold", color: TEXT_COLOR, whiteSpace: "nowrap" }}>Huyền giới chi môn</p>
        <div style={{ position: "absolute", left: "1728px", top: "1318px", width: "88px", height: "88px" }}>
          <img alt="" src={imgPlay} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>

        <div style={{ position: "absolute", backgroundColor: FOOTER_BG, border: "6px solid #b3a1ff", height: "569px", width: "2805px", left: 0, top: "2075px" }}>
          <div style={{ position: "absolute", height: "177px", width: "569px", left: "114px", top: "50px" }}>
            <img alt="Fimory" src={imgLogo} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <p style={{ position: "absolute", fontFamily: "Roboto, sans-serif", fontSize: "45px", color: TEXT_COLOR, left: "144px", top: "291px", whiteSpace: "nowrap" }}>Chính sách bảo mật</p>
          <p style={{ position: "absolute", fontFamily: "Roboto, sans-serif", fontSize: "45px", color: TEXT_COLOR, left: "144px", top: "378px", whiteSpace: "nowrap" }}>Điều khoản sử dụng</p>
          <p style={{ position: "absolute", fontFamily: "Roboto, sans-serif", fontSize: "45px", color: TEXT_COLOR, left: "657px", top: "291px", whiteSpace: "nowrap" }}>Giới thiệu</p>
          <p style={{ position: "absolute", fontFamily: "Roboto, sans-serif", fontSize: "45px", color: TEXT_COLOR, left: "657px", top: "378px", whiteSpace: "nowrap" }}>Hỏi đáp</p>
          <p style={{ position: "absolute", fontFamily: "Roboto, sans-serif", fontSize: "45px", color: TEXT_COLOR, left: "977px", top: "291px", whiteSpace: "nowrap" }}>Liên hệ</p>
          <div style={{ position: "absolute", height: "113px", width: "138px", left: "846px", top: "82px" }}>
            <img alt="Facebook" src={imgFacebook} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div style={{ position: "absolute", height: "113px", width: "138px", left: "1039px", top: "82px" }}>
            <img alt="Telegram" src={imgTelegram} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div style={{ position: "absolute", height: "113px", width: "138px", left: "1232px", top: "82px" }}>
            <img alt="Discord" src={imgDiscordNew} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div style={{ position: "absolute", height: "113px", width: "138px", left: "1425px", top: "82px" }}>
            <img alt="TikTok" src={imgTikTok} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
