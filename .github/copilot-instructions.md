# 大漢酵素 MOMO 品牌旗艦館 - AI 開發指引

## 專案概述

單頁面產品展示網站，採用 **單文件架構** - 所有 HTML、CSS、JavaScript 整合在 [index.html](../index.html) 中。這是一個品牌形象網站，重視視覺效果和互動體驗，使用 CDN 引入所有依賴，無需構建工具。

## 技術棧特性

### CDN 依賴架構
- **UnoCSS Runtime** - 使用 atomic CSS，直接在 HTML class 中寫樣式（如 `text-[48px]`、`bg-[var(--brand-primary)]`）
- **Vue 3 Global Build** - 僅用於 `#main_combination` 區段的頁籤切換和自動輪播，掛載到特定 DOM 節點
- **Swiper 11** - Hero 區段的圖片輪播，支援淡入淡出效果和響應式導航
- **AOS (Animate On Scroll)** - 為產品卡片添加滾動觸發動畫
- **Bootstrap Icons** - 圖標系統（使用 `<i class="bi bi-*">` 格式）
- **Animate.css** - 預設動畫效果（如淡入淡出、滑動）

### 品牌色系設計
CSS 變量定義在 `<style>` 區塊中的 `:root`：
- `--brand-primary: #2d5016` - 主要綠色（導航、標題）
- `--brand-light: #4a7c2c` - 淺綠色（漸層、hover）
- `--brand-dark: #1a3009` - 深綠色（移動版導航背景）
- `--brand-accent: #5a8c3a` - 強調綠色（hover 狀態）
- `--brand-red: #e1380e` - 價格紅色

**重要**：所有新增色彩必須使用這些 CSS 變量，保持品牌一致性。

## 程式碼架構原則

### 單文件組織結構
[index.html](../index.html) 按順序包含：
1. `<head>` - 所有 CDN 連結和 `<style>` 區塊
2. `<body>` - HTML 結構（Header → Hero → Sections → Scripts）
3. 內嵌 `<script>` - Vue 3 應用邏輯（只在文件末尾）

[JS_CODE.txt](../JS_CODE.txt) 包含完整的 JavaScript 程式碼文檔，但 **尚未實現**。當需要添加互動功能時：
- 從 [JS_CODE.txt](../JS_CODE.txt) 複製對應功能
- 整合到 [index.html](../index.html) 的 `<script>` 區塊中
- 或創建獨立的 `assets/js/main.js` 文件並在 HTML 中引用

### 響應式設計策略
- **桌面優先** - 預設樣式為桌面版，使用 `md:` prefix 定義桌面行為
- **移動端調整** - 使用 UnoCSS 的 `lg:`、`md:` breakpoints（如 `md:flex`、`hidden md:block`）
- **關鍵斷點**：
  - 導航列：桌面顯示在 header 內，移動版分離為獨立 `<nav>` 區塊
  - Hero 圖片：使用 `bg-[url()]` 根據螢幕大小切換不同圖片（`-sm.jpg` 後綴為移動版）
  - 產品網格：`grid-cols-1 md:grid-cols-2 lg:grid-cols-4` 自適應佈局

## 重要開發模式

### Vue 3 頁籤系統實現
**位置**：[index.html#L345-L410](../index.html#L345-L410) 的 `#main_combination` 區段

關鍵特性：
- **資料驅動**：`tabs` 陣列定義所有頁籤（酵素系列、保健食品、養生飲品）
- **Transition 動畫**：根據切換方向使用 `slide-left` 或 `slide-right`
- **自動播放**：5 秒自動切換，點擊時重置計時器
- **導航按鈕**：左右箭頭支援手動切換，循環播放

**擴展新頁籤時**：
1. 在 `tabs` 陣列添加新對象（包含 `id`、`name`、`title`、`description`、`items`）
2. 確保每個 `item` 包含 `name`、`description`、`price` 欄位
3. 無需修改 HTML 模板，Vue 自動渲染

### Swiper 輪播配置
**位置**：[index.html#L277-L287](../index.html#L277-L287)

```javascript
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: { delay: 5000 },
    effect: 'fade',           // 淡入淡出效果
    fadeEffect: { crossFade: true }
});
```

新增 Slide 時：
- 在 `.swiper-wrapper` 內添加 `.swiper-slide` 元素
- 使用 `md:bg-[url('桌面圖')]` 和 `bg-[url('移動圖')]` 定義響應式背景
- 保持 `aspect-[9/16] md:aspect-[16/9]` 比例設定

### 產品卡片互動模式
標準樣式結構（[index.html#L222-L230](../index.html#L222-L230)）：
```html
<div class="overflow-hidden cursor-pointer group relative ...">
    <img class="w-full group-hover:scale-102 transition-transform ...">
    <i class="bi bi-zoom-in ... group-hover:block hidden ..."></i>
</div>
```

**實現原理**：
- `group` class 使父元素控制子元素 hover 狀態
- `after:` pseudo-class 創建白色遮罩層（`after:hover:bg-white/30`）
- 放大鏡圖標使用 `group-hover:block hidden` 在 hover 時顯示

## 資產管理

### 圖片組織結構
```
assets/img/
├── all_store_discounts/  - 全館優惠產品圖（product1-4.avif）
├── hero/                 - Hero 輪播圖（桌面版 + -sm.jpg 移動版）
├── highly_recommended/   - 好評推薦區塊
└── logo/                 - 品牌 logo（含 CDN fallback）
```

**圖片載入策略**：
- Logo 使用 CDN URL + `onerror` fallback 到本地檔案
- 所有產品圖使用 `.avif` 格式（更小體積）
- Hero 圖使用 CSS `bg-[url()]` 實現響應式切換

### 未實現的功能（參考 JS_CODE.txt）
[JS_CODE.txt](../JS_CODE.txt) 包含但未啟用的功能：
- 滾動時 Header 縮小效果（第 48-62 行）
- 平滑錨點滾動（第 68-84 行）
- Back to Top 按鈕（第 90-106 行）
- 商品卡片 hover 增強動畫（第 112-124 行）
- 懶加載圖片優化（第 146-165 行）
- 購買按鈕點擊效果（第 171-195 行）
- 通知提示系統（第 201-221 行）

**啟用這些功能時**：將對應程式碼複製到 `<script>` 區塊，確保在 `DOMContentLoaded` 事件內執行。

## 常見開發任務

### 添加新區段
1. 在現有 `<section>` 後插入新 section，使用 `id` 屬性作為錨點
2. 套用一致的結構：`px-5 py-20` padding + `max-w-1200px mx-auto` 容器
3. 標題使用 `text-[var(--brand-primary)] text-[48px] font-bold text-center`
4. 在導航列添加對應連結：`href="#新區段id"`

### 修改色彩主題
1. 更新 `:root` 中的 CSS 變量值
2. 檢查所有使用 `var(--brand-*)` 的地方
3. 避免硬編碼 hex 色碼（除非是一次性使用）

### 調整響應式佈局
- 使用 UnoCSS 的 breakpoint prefixes：`sm:` (640px)、`md:` (768px)、`lg:` (1024px)
- 常見模式：`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- 移動版隱藏：`hidden md:block`，桌面版隱藏：`md:hidden`

## 測試與預覽

**本地開發**：直接在瀏覽器開啟 [index.html](../index.html)，無需伺服器（所有資源從 CDN 載入）

**檢查清單**：
- ✅ Hero 輪播自動播放且導航按鈕正常
- ✅ Vue 頁籤切換流暢，5秒自動輪播
- ✅ 所有錨點連結跳轉正確
- ✅ 響應式斷點在不同螢幕尺寸正常顯示
- ✅ 產品卡片 hover 效果顯示放大鏡圖標
- ✅ 品牌色系一致（綠色調為主）

## 關鍵注意事項

- **不要分離 CSS/JS**：當前架構故意使用單文件模式，保持簡單性和可移植性
- **UnoCSS 語法**：可以使用方括號嵌入任意值（`text-[48px]`）或 CSS 變量（`bg-[var(--brand-primary)]`）
- **Vue 掛載範圍**：Vue 只控制 `#main_combination` 區段，其他區段使用原生 HTML
- **圖片格式**：優先使用 `.avif` 格式，確保跨瀏覽器兼容性時考慮 fallback
- **CDN 依賴**：所有外部庫從 CDN 載入，修改版本號時需測試兼容性
