import { useState } from "react";

export default function History({ onBack }) {
  const [history] = useState([
    { title: "Chàng trai năm ấy", date: "2023-10-01", chapter: "Chương 5" },
    { title: "Thôn phệ tinh khôn", date: "2023-10-02", chapter: "Chương 10" },
    { title: "Vũ độn càn khôn", date: "2023-10-03", chapter: "Chương 8" },
    { title: "Song sinh võ hồn", date: "2023-10-04", chapter: "Chương 12" },
  ]);

  return (
    <div style={{ backgroundColor: "#131928", minHeight: "100vh", color: "white", padding: "20px" }}>
      <button onClick={onBack} style={{ backgroundColor: "#b3a1ff", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>
        Quay lại
      </button>
      <h1>Lịch sử xem</h1>
      <div>
        {history.map((item, index) => (
          <div key={index} style={{ border: "1px solid #b3a1ff", padding: "10px", margin: "10px 0", borderRadius: "5px" }}>
            <h3>{item.title}</h3>
            <p>Chương: {item.chapter}</p>
            <p>Ngày xem: {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}