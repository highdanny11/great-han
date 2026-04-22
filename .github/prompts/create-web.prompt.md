# 大漢酵素品牌網站開發 Prompt

## 專案定位
這是一個品牌形象網站，採用**單文件架構** ([index.html](../index.html))，所有 HTML、CSS、JavaScript 整合在同一文件中。重視視覺效果、互動體驗和品牌一致性。

## 核心開發原則

### 1. 技術棧約束
- **僅使用 CDN 依賴**：UnoCSS Runtime、Vue 3 Global、Swiper 11、AOS、Bootstrap Icons、Animate.css
- **禁止引入構建工具**：不使用 npm、webpack、vite 等
- **單文件優先**：除非絕對必要，否則不分離 CSS/JS 文件

### 2. 樣式系統規範
```css
/* 必須使用品牌色彩變量 */
--brand-primary: #066828   /* 主綠色 - 導航、標題 */
--brand-light: #054726     /* 淺綠色 - 漸層、hover */
--brand-dark: #F1F4F1      /* 深綠色 - 移動版背景 */
--brand-accent: #5a8c3a    /* 強調綠色 - 互動狀態 */
--brand-red: #e1380e       /* 價格紅色 */
```

**UnoCSS 使用規則**：
- 使用方括號語法：`text-[48px]`、`bg-[var(--brand-primary)]`
- 響應式前綴：`md:flex`、`lg:grid-cols-4`
- 偽類：`hover:text-[var(--brand-accent)]`、`group-hover:block`

### 3. 響應式設計策略
- **桌面優先**：預設樣式為桌面版
- **關鍵斷點**：`md:` (768px)、`lg:` (1024px)
- **移動端特殊處理**：
  - 導航列分離為獨立 `<nav>` 區塊
  - Hero 圖片使用 `-sm.jpg` 後綴
  - 產品網格：`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`

### 4. 互動功能實現

#### Vue 3 應用範圍
- **僅限** `#main_combination` 區段使用 Vue
- 頁籤切換使用 `tabs` 陣列驅動
- Transition 動畫：`slide-left` / `slide-right`
- 自動播放：5 秒間隔，點擊重置計時器

#### Swiper 輪播配置
```javascript
new Swiper('.swiper', {
    loop: true,
    autoplay: { delay: 5000 },
    effect: 'fade',
    fadeEffect: { crossFade: true }
});
```

#### 產品卡片標準結構
```html
<div class="overflow-hidden cursor-pointer group relative ...">
    <img class="w-full group-hover:scale-102 transition-transform ...">
    <i class="bi bi-zoom-in ... group-hover:block hidden ..."></i>
</div>
```

## 開發工作流程

### 新增區段 (Section)
1. 在現有 `<section>` 後插入，使用語意化 `id`
2. 套用一致容器：`px-5 py-20` + `max-w-1200px mx-auto`
3. 標題樣式：`text-[var(--brand-primary)] text-[48px] font-bold text-center`
4. 在導航列添加錨點連結

### 新增產品卡片
1. 確保圖片格式為 `.avif`
2. 使用 `group` class 實現 hover 效果
3. 添加 `after:` pseudo-class 白色遮罩層
4. 放大鏡圖標：`group-hover:block hidden`

### 擴展 Vue 頁籤
```javascript
tabs: [
    {
        id: 新ID,
        name: '頁籤名稱',
        title: '區段標題',
        description: '說明文字',
        items: [
            { name: '產品名', description: '描述', price: 價格 }
        ]
    }
]
```

### 添加 Swiper Slide
```html
<div class="swiper-slide">
    <div class="hero-slide ... 
        md:bg-[url('桌面圖.jpg')] 
        bg-[url('移動圖-sm.jpg')] ...">
    </div>
</div>
```

## 資產管理規範

### 圖片命名規則
- Hero 輪播：`YYYYMM-數字.jpg` (桌面) + `-sm.jpg` (移動版)
- 產品圖片：`product數字.avif`
- Logo：保持 CDN URL + `onerror` fallback

### 文件組織
```
assets/
├── img/
│   ├── all_store_discounts/  # 全館優惠
│   ├── hero/                 # Hero 輪播
│   ├── highly_recommended/   # 好評推薦
│   └── logo/                 # 品牌標誌
```

## 程式碼品質要求

### 禁止事項
❌ 不使用硬編碼色碼（必須用 CSS 變量）  
❌ 不分離 HTML/CSS/JS 到獨立文件（除非有充分理由）  
❌ 不引入新的 npm 套件或構建工具  
❌ 不使用內聯樣式 `style="..."`（使用 UnoCSS class）  
❌ 不在 Vue 範圍外使用 Vue 語法

### 必須事項
✅ 所有色彩使用 `var(--brand-*)`  
✅ 響應式使用 UnoCSS breakpoints  
✅ 圖片使用 `.avif` 格式  
✅ 保持品牌綠色調為主色系  
✅ Hero 圖片提供桌面和移動版  
✅ 產品卡片統一 hover 效果

## 測試檢查清單
執行以下檢查後再提交：
- [ ] Hero 輪播自動播放且導航正常
- [ ] Vue 頁籤切換流暢，5 秒自動輪播
- [ ] 所有錨點連結跳轉正確
- [ ] 桌面版 (1920px) 和移動版 (375px) 顯示正常
- [ ] 產品卡片 hover 顯示放大鏡圖標
- [ ] 所有色彩符合品牌色系
- [ ] 圖片正確載入（包含 fallback）
- [ ] 無 console 錯誤

## 參考資源
- 完整指引：[copilot-instructions.md](../copilot-instructions.md)
- 未實現功能：[JS_CODE.txt](../../JS_CODE.txt)
- 主頁面：[index.html](../../index.html)

---

**重要提醒**：這是一個品牌形象網站，視覺一致性和使用者體驗優先於技術複雜度。保持簡單、優雅、易維護。