# Content Directory

Thư mục này chứa nội dung vĩnh viễn của website, được lưu trữ trong source code và track bởi Git.

## Cấu trúc

```
content/
├── posts/           # Bài viết blog (JSON files)
│   ├── .gitkeep     # Đảm bảo thư mục được track
│   ├── *.json       # File bài viết được generate từ upload
│   └── *.md         # File Markdown gốc (backup)
└── README.md        # File này
```

## Cách hoạt động

1. **Upload bài viết**: Admin upload file `.md` hoặc `.html` qua `/admin/posts`
2. **Xử lý**: System chuyển đổi và lưu thành file `.json` trong `posts/`
3. **Hiển thị**: API đọc từ `content/posts/` để hiển thị trên blog
4. **Backup**: File gốc cũng được lưu để tham khảo

## Lợi ích

- ✅ **Vĩnh viễn**: Không bị mất khi deploy
- ✅ **Version control**: Track thay đổi qua Git
- ✅ **Backup**: Có thể restore từ Git history
- ✅ **Portable**: Dễ di chuyển giữa các environment

## Lưu ý

- Thư mục `public/posts/` cũ sẽ không được sử dụng nữa
- Mọi bài viết mới sẽ được lưu vào `content/posts/`
- Cần commit thường xuyên để không mất dữ liệu 