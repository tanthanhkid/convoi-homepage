---
title: "Bài viết mẫu từ Markdown"
description: "Đây là bài viết mẫu được tạo từ file Markdown để test hệ thống blog"
date: "2024-12-19"
---

# Bài viết mẫu từ Markdown

Đây là một bài viết mẫu được tạo từ file **Markdown** để test hệ thống blog mới.

## Tính năng chính

- ✅ Hỗ trợ file HTML làm chính
- ✅ Chuyển đổi Markdown sang HTML
- ✅ Trích xuất metadata từ HTML tags
- ✅ Không cần file JSON riêng biệt

## Code example

```javascript
function extractMetadataFromHTML(content, filename) {
  const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
  return titleMatch ? titleMatch[1].trim() : filename;
}
```

## Kết luận

Hệ thống blog đã được cập nhật để sử dụng file HTML làm nguồn dữ liệu chính, đơn giản hóa việc quản lý bài viết. 