# Netlify Deployment Guide - ConVoi Homepage

## 📋 Thông tin Project

| Thông tin | Giá trị |
|-----------|---------|
| **Project Name** | convoi-homepage |
| **Netlify Project ID** | 0fd3a02f-c42f-4c93-9aae-16c5c5c6f311 |
| **Production URL** | https://convoi.trinitysoft.online |
| **Admin Panel** | https://app.netlify.com/projects/convoihomepage |
| **Framework** | Next.js 15.3.3 |
| **Node Version** | 18 |
| **Build Command** | `npm run build` |
| **Publish Directory** | `.next` |

## 🚀 CLI Commands Thường Dùng

### Kiểm tra trạng thái
```bash
# Kiểm tra đăng nhập và thông tin project
netlify status

# Liệt kê tất cả sites
netlify sites:list
```

### Deploy Commands
```bash
# Deploy production (khuyến nghị)
npm run build && netlify deploy --prod

# Deploy preview để test
netlify deploy

# Deploy với message
netlify deploy --prod --message "Update: mô tả thay đổi"

# Deploy từ thư mục khác
netlify deploy --prod --dir=.next
```

### Quản lý Environment Variables
```bash
# Xem env variables
netlify env:list

# Thêm env variable
netlify env:set KEY_NAME value

# Xóa env variable
netlify env:unset KEY_NAME
```

### Functions & Logs
```bash
# Xem function logs
netlify functions:list
netlify logs:function function-name

# Xem build logs
netlify logs:build

# Xem site logs
netlify logs
```

### Domain & DNS
```bash
# Xem thông tin domain
netlify domains:list

# Thêm custom domain
netlify domains:create example.com
```

## 🔧 Build Process

### 1. Local Development
```bash
npm run dev          # Chạy development server
npm run build        # Build production
npm run start        # Start production server
npm run lint         # Kiểm tra linting
```

### 2. Pre-deployment Checklist
- [ ] `npm run build` thành công
- [ ] Kiểm tra `netlify status` 
- [ ] Test trên môi trường local
- [ ] Commit changes to git

### 3. Deployment Workflow
```bash
# Workflow đầy đủ
git add .
git commit -m "feat: mô tả thay đổi"
git push origin main
npm run build
netlify deploy --prod
```

## 📁 Cấu trúc Files Quan Trọng

```
homepage/
├── netlify.toml           # Cấu hình Netlify
├── next.config.ts         # Cấu hình Next.js
├── package.json           # Dependencies & scripts
├── .netlify/             # Netlify cache & functions
└── src/
    ├── app/              # Next.js App Router
    └── components/       # React components
```

## ⚙️ Netlify Configuration (netlify.toml)

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Content-Security-Policy = "frame-ancestors 'none'"
```

## 🔗 URLs Quan Trọng

- **Production Site**: https://convoi.trinitysoft.online
- **Netlify Admin**: https://app.netlify.com/projects/convoihomepage
- **Build Logs**: https://app.netlify.com/projects/convoihomepage/deploys
- **Function Logs**: https://app.netlify.com/projects/convoihomepage/logs/functions
- **Analytics**: https://app.netlify.com/projects/convoihomepage/analytics

## 🐛 Troubleshooting

### Build Failures
```bash
# Clear cache và rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Deployment Issues
```bash
# Force deploy bypass cache
netlify deploy --prod --skip-functions-cache

# Kiểm tra site settings
netlify open:admin
```

### Environment Variables
```bash
# Sync local .env với Netlify
netlify env:pull .env.netlify
```

## 📊 Monitoring & Performance

### Regular Checks
- Build time performance
- Site loading speed
- Function execution time
- Error rates in logs

### Useful Commands
```bash
# Site performance info
netlify status

# Recent deploys
netlify deploys

# Open site
netlify open
```

## 🔐 Security Headers

Headers được cấu hình trong `netlify.toml`:
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`  
- `Content-Security-Policy: frame-ancestors 'none'`

## 📝 Notes

- **Auto Deploy**: Enabled cho main branch
- **Build Hooks**: Có thể setup webhook để trigger builds
- **Sotute Integration**: Background job fetch data từ sotute.com
- **Static Export**: Next.js được cấu hình cho static + serverless functions
- **Social Links**: Chỉ hiển thị Zalo OA (https://zalo.me/3105382268215205151) trong Footer và trang Liên hệ
- **Zalo Icon**: Sử dụng file PNG `/Icon_of_Zalo.svg.png` thay vì SVG icon

---

## 🚨 Emergency Commands

```bash
# Rollback to previous deploy
netlify rollback

# Stop current build
netlify cancel-build

# Quick status check
netlify sites:list | grep convoi
```

*Tạo bởi: AI Assistant*  
*Cập nhật: $(date)* 