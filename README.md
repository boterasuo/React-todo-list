# React-todo-list

### components

拆分各元件

1. ConfirmModal: 點選 "移除" 或 "完成" 後跳出的確認視窗
2. FinishedList: 已完成事項列表
3. InputCard: 上方 input 表單
4. MainContent: 用來裝所有元件的容器
5. Spinner: 模擬 call API 的 loading 畫面
6. ToDoList: 代辦事項列表
7. ToggleBtn: 切換 未完成 / 已完成 按鈕

### filter

已完成事項列表的時間格式轉換函式

### style

所有 component 各別的樣式 scss
(共用樣式在 src/index.scss)

### 未完成功能

未完成 / 已完成頁面切換之動態效果 (預計使用 CSSTransition)
