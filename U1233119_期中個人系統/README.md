# 個人履歷網站｜Personal Portfolio

科技感深色主題的個人履歷與作品集，使用原生 HTML、CSS、JavaScript 製作。

## 專案結構

```text
personal-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## 在 Windows 執行

1. 將專案資料夾解壓縮。
2. 開啟 `personal-portfolio` 資料夾。
3. 直接雙擊 `index.html`，用瀏覽器開啟。
4. 建議安裝 Visual Studio Code，並使用 Live Server 擴充功能預覽，修改檔案後可更方便地重新整理查看。

本專案沒有使用 npm 或建置工具，第一版不需要安裝 Node.js。

## 上線前請修改

- 將 `index.html` 中的「你的名字」改成你要公開使用的名稱。
- 修改首頁自我介紹、技能程度、專案說明與學習歷程。
- 將 `your.email@example.com` 換成你願意公開的電子郵件。
- 把作品卡片連結改成真實的專案或 GitHub 網址。
- 技能百分比目前只是示意，請依真實能力調整。

## 部署到 GitHub Pages

1. 登入 GitHub，建立新的 repository，例如 `my-portfolio`。
2. 將本資料夾內的檔案上傳到 repository 根目錄（確保 `index.html` 在根目錄）。
3. 開啟 repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 中，選擇 **Deploy from a branch**。
5. Branch 選 `main`，資料夾選 `/(root)`，按 **Save**。
6. 等待 GitHub Pages 部署完成，頁面會顯示公開網址，通常形式為 `https://你的GitHub帳號.github.io/my-portfolio/`。

若你使用的是使用者／組織網站專用 repository（名稱為 `你的帳號.github.io`），網址通常是 `https://你的帳號.github.io/`。

## 後續可以擴充

- 作品分類篩選
- 中英文切換
- 深淺色主題切換
- 履歷 PDF 下載
- 表單串接後端或第三方服務
