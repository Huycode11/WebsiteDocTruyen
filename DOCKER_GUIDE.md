# Hướng dẫn chạy Docker cho WebsiteDocTruyen

Tài liệu này hướng dẫn cách để hình ảnh của bạn xuất hiện trong Docker Desktop và đẩy lên Docker Hub.

## 1. Cách để Image xuất hiện trong Docker Desktop (tab Local Images)

Chạy lệnh sau tại thư mục gốc của dự án:
```bash
docker-compose build
```
- Lệnh này sẽ đọc các Dockerfile và tạo các image. 
- Sau khi chạy xong, bạn sẽ thấy 3 image mới trong **Docker Desktop > Images > Local**.
- Để khởi động:
  ```bash
  docker-compose up -d
```

## 2. Cách để Image xuất hiện trong Docker Hub (tab My Hub)

Giả sử Docker Hub ID của bạn là `vanhuy04` (như trong ảnh). 

### Bước 1: Login
Đăng nhập vào Docker bằng terminal:
```bash
docker login
```

### Bước 2: Build với Tag dành cho Docker Hub
Bạn nên tag image với tên tài khoản của mình:
```bash
docker build -t vanhuy04/websitedoctruyen-server ./server
docker build -t vanhuy04/websitedoctruyen-client ./client
```

### Bước 3: Đẩy lên Docker Hub
```bash
docker push vanhuy04/websitedoctruyen-server
docker push vanhuy04/websitedoctruyen-client
```
Sau khi chạy xong, các image sẽ xuất hiện trong tab **My Hub** của bạn.

## 3. Cập nhật mã nguồn

Nếu bạn có sửa đổi code:
1. Chạy `docker-compose build` để cập nhật image.
2. Chạy `docker-compose up -d` để khởi động lại.
