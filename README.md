# 小技面板

基于 [ClawPanel](https://github.com/qingchencloud/clawpanel) 二次开发的定制版本，专为小技面板场景设计。

## 技术栈

- **桌面框架**：Tauri v2（Rust + WebKit）
- **前端**：Vanilla JS + Vite
- **平台**：macOS / Windows / Linux

## 项目结构

```
src/                  前端源码
  pages/              各功能页面
  locales/            多语言文件
  lib/                公共模块（model-presets 等）
src-tauri/            Rust 后端 & 打包配置
public/               静态资源
```

## 开发

```bash
# 安装依赖
npm install

# 开发模式（热更新）
npm run tauri dev

# 构建发布包
npm run tauri build
```

构建产物位于 `src-tauri/target/release/bundle/`：
- `macos/小技面板.app`
- `dmg/小技面板_x.x.x_aarch64.dmg`

## 主要定制内容

- 品牌重命名：ClawPanel → 小技面板 / 小技助手
- AI 助手服务商：仅保留 OpenAI、Anthropic Claude、Google Gemini、通义千问、Ollama
- 移除晴辰云（QingChen Cloud）相关推广入口

## License

MIT
