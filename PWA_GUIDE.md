# PWA 安装指南

你的预算追踪器现在是一个 PWA (Progressive Web App)，可以像原生 App 一样安装和使用！

## ✨ 特性

- 📱 **全屏体验** - 没有浏览器地址栏和工具栏
- 🚀 **快速启动** - 从主屏幕直接打开
- 💾 **离线缓存** - 部分功能可离线使用
- 🔔 **独立窗口** - 像原生 App 一样运行

## 📱 在手机上安装

### iOS (iPhone/iPad)

1. 用 Safari 浏览器打开 `http://sj.yfanj.ca:3000/auth.html`
2. 点击底部的"分享"按钮 (方框带向上箭头)
3. 向下滚动，找到"添加到主屏幕"
4. 点击"添加"
5. 完成！现在可以从主屏幕打开了

### Android

1. 用 Chrome 浏览器打开 `http://sj.yfanj.ca:3000/auth.html`
2. 会自动弹出"安装"提示横幅
3. 点击"安装"按钮
4. 或者点击右上角菜单 ⋮ → "安装应用"
5. 完成！应用会出现在应用列表中

## 💻 在电脑上安装

### Chrome / Edge

1. 打开 `http://sj.yfanj.ca:3000/auth.html`
2. 地址栏右侧会出现"安装"图标 ⊕
3. 点击安装图标
4. 点击"安装"确认
5. 完成！应用会作为独立窗口打开

### 手动安装

1. 点击浏览器右上角菜单 ⋮
2. 选择"安装预算追踪器..."
3. 点击"安装"

## 🎯 使用体验

安装后：

- ✅ 没有地址栏
- ✅ 没有浏览器工具栏
- ✅ 全屏沉浸式体验
- ✅ 独立的应用窗口
- ✅ 可以固定到任务栏/Dock

## 🔧 生成图标

项目中包含了一个图标生成工具：

1. 打开 `public/icons/generate-icons.html`
2. 会自动生成所有尺寸的图标
3. 下载后放到 `public/icons/` 目录

或者使用在线工具：

- https://realfavicongenerator.net/
- https://www.pwabuilder.com/imageGenerator

## 📝 注意事项

1. **HTTPS 要求**: PWA 需要 HTTPS 才能完全工作（localhost 除外）
2. **Service Worker**: 首次访问会缓存资源，更新代码后需要刷新
3. **浏览器支持**:
   - ✅ Chrome/Edge (完全支持)
   - ✅ Safari (部分支持)
   - ✅ Firefox (部分支持)

## 🚀 更新应用

当你更新代码后：

1. 修改 `service-worker.js` 中的 `CACHE_NAME` 版本号
2. 重新部署
3. 用户下次打开时会自动更新

## 🎨 自定义

你可以修改 `manifest.json` 来自定义：

- 应用名称
- 图标
- 主题颜色
- 启动页面
- 显示模式

## 📊 测试 PWA

使用 Chrome DevTools:

1. 打开开发者工具 (F12)
2. 切换到 "Application" 标签
3. 查看 "Manifest" 和 "Service Workers"
4. 使用 "Lighthouse" 运行 PWA 审计

## 🌐 在线工具

- [PWA Builder](https://www.pwabuilder.com/) - 生成 PWA 资源
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - PWA 审计工具
- [Maskable.app](https://maskable.app/) - 测试自适应图标
