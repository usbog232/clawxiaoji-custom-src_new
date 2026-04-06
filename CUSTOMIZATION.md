# 小技面板定制说明

这是基于 `qingchencloud/clawpanel` 做的专属定制版骨架。

## 当前已处理

- 项目副本目录：`/Users/sutudio/.openclaw/workspace/clawpanel-custom`
- 品牌名改为：`小技面板`
- 去掉了侧边栏底部官网跳转
- 去掉了 About 页里的社区、赞助、官网/产品站外链区块
- 去掉了主界面/登录界面的 `claw.qt.cool` 品牌露出
- `package.json` 已改成你的专属项目标识

## 已识别的需要继续清理的外链/推广位

### 强相关站点 / 广告 / 导流
- `https://claw.qt.cool`
- `https://gpt.qt.cool`
- `https://qt.cool/*`
- `https://clawapp.qt.cool`
- `https://cftunnel.qt.cool`
- `https://discord.gg/U9AttmsNHh`
- About / docs / README 里的赞助、社群、签到领额度、邀请奖励

### 代码里仍需继续改的重点位置
- `src/lib/model-presets.js`
  - 去掉 `qtcool` 预设和 `gpt.qt.cool` 相关入口
- `src/lib/openclaw-kb.js`
  - 去掉晴辰云、签到、邀请、官网等知识库内容
- `src/pages/assistant.js`
  - 去掉官网文案、gpt.qt.cool 一键配置文案/按钮
- `src/pages/setup.js`
  - 去掉 setup 首屏里的官网链接
- `src/components/engagement.js`
  - 整块社群导流组件建议直接下线
- `index.html` / `docs/index.html`
  - 官网站点、赞助商、下载代理、SEO 品牌词要清理
- 各语言 `src/locales/*` / `src/locales/modules/*`
  - 去掉签到、赞助、社群引导等文案

## 建议定制路线

### 第一阶段：可用版
目标：先做出一个你自己可用、无外部导流的版本
- 保留功能
- 删外链/赞助/签到/社群入口
- 改名、改图标、改默认文案

### 第二阶段：主人专属化
- 默认工作区改成你的路径
- 默认模型预设改成你的 provider
- 默认主题/品牌色改成你的风格
- 可考虑隐藏你根本不用的页面

### 第三阶段：打包发布
- Web 版：`npm install && npm run build && npm run serve`
- 桌面版：`npm install && npm run tauri build`

## 下一步建议

如果继续做，我建议直接：
1. 全量移除所有 `qt.cool / gpt.qt.cool / claw.qt.cool` 相关入口
2. 把 `qtcool` 模型预设整组删掉
3. 再跑一次全文扫描确认没有遗漏
4. 然后本地 build 一次，确保能正常启动
