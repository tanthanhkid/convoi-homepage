# Convoi Homepage

Trang landing page đơn giản được xây dựng với Next.js và Tailwind CSS, hiển thị "Hello World" với giao diện đẹp mắt.

## 🚀 Tính năng

- ✨ Giao diện hiện đại với gradient đẹp mắt
- 🌙 Hỗ trợ Dark/Light mode
- 📱 Responsive design
- ⚡ Được xây dựng với Next.js 15 và Tailwind CSS

## 🛠️ Cài đặt & Chạy local

```bash
# Cài đặt dependencies
npm install

# Chạy ở chế độ development
npm run dev

# Build cho production
npm run build

# Chạy bản build
npm start
```

Ứng dụng sẽ chạy tại [http://localhost:3000](http://localhost:3000)

## 🌐 Triển khai lên Netlify

### Cách 1: Deploy qua Git (Khuyến nghị)

1. **Push code lên GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Convoi Homepage"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```

2. **Kết nối với Netlify:**
   - Truy cập [Netlify](https://app.netlify.com/)
   - Đăng nhập và click "New site from Git"
   - Chọn GitHub và repository của bạn
   - Site name: `convoi-homepage`
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

### Cách 2: Deploy qua Netlify CLI

1. **Cài đặt Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login và deploy:**
   ```bash
   netlify login
   netlify init
   netlify deploy --prod
   ```

## 📁 Cấu trúc dự án

```
convoi-homepage/
├── src/
│   └── app/
│       ├── page.tsx          # Trang chủ
│       ├── layout.tsx        # Layout chung
│       └── globals.css       # CSS toàn cục
├── public/                   # Assets tĩnh
├── netlify.toml             # Cấu hình Netlify
└── package.json             # Dependencies
```

## 🎨 Tùy chỉnh

Để thay đổi nội dung trang chủ, chỉnh sửa file `src/app/page.tsx`.

## 📝 Lưu ý

- Dự án sử dụng Next.js App Router
- Tích hợp Tailwind CSS cho styling
- Đã cấu hình sẵn cho Netlify deployment
- Hỗ trợ TypeScript

---

Được tạo bởi [Convoi Team](https://github.com/convoi) ❤️
