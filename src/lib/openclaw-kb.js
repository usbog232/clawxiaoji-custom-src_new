/**
 * OpenClaw 内置知识库
 * 供面板 AI 助手在系统提示词中使用
 */

export const OPENCLAW_KB = `
# OpenClaw 知识库（内置参考）

## 一、架构概览
OpenClaw 是开源个人 AI 助手平台，核心组件：
- **Gateway 网关**：核心后端服务，处理消息路由、Agent 执行、渠道连接
- **CLI**：命令行工具，用于安装/配置/管理 OpenClaw
- **Agent（智能体）**：独立的 AI 角色实例，有自己的工作区、身份、模型配置
- **Workspace（工作区）**：Agent 的个性化存储（Skills、提示、记忆）
- **Channel（渠道）**：消息通道（WhatsApp/Telegram/Discord/Mattermost 等）
- **Control UI / Dashboard**：内置 Web 管理界面，端口 18789

## 二、目录结构
\`\`\`
~/.openclaw/
├── openclaw.json          # 主配置文件（JSON5，支持注释）
├── .env                   # 全局环境变量
├── workspace/             # 默认(main) Agent 的工作区
│   ├── IDENTITY.md        # Agent 身份定义
│   ├── SOUL.md            # Agent 灵魂/人格
│   ├── USER.md            # 用户信息
│   ├── AGENTS.md          # 操作规则
│   └── ...                # Skills、记忆等
├── agents/
│   ├── main/
│   │   └── agent/
│   │       ├── auth-profiles.json   # 认证配置（OAuth + API Key）
│   │       ├── models.json          # 模型提供商配置
│   │       └── auth.json            # 运行时认证缓存（自动管理）
│   └── <agentId>/
│       ├── agent/                   # 同上
│       └── workspace/              # 自定义 Agent 的工作区
├── credentials/
│   ├── oauth.json                  # 旧版 OAuth 导入
│   ├── whatsapp/<accountId>/       # WhatsApp 凭证
│   └── <channel>-allowFrom.json   # 配对白名单
└── logs/                           # 日志文件
\`\`\`

## 三、CLI 常用命令
| 命令 | 说明 |
|------|------|
| \`openclaw onboard\` | 新手引导向导（推荐首次使用） |
| \`openclaw setup\` | 初始化/配置工作区 |
| \`openclaw gateway\` | 启动 Gateway（前台） |
| \`openclaw gateway status\` | 查看 Gateway 状态 |
| \`openclaw dashboard\` | 打开 Web Dashboard |
| \`openclaw status\` | 系统状态概览 |
| \`openclaw doctor\` | 诊断配置问题 |
| \`openclaw doctor --fix\` | 自动修复配置问题 |
| \`openclaw health\` | 健康检查 |
| \`openclaw logs\` | 查看日志 |

## 四、配置文件（openclaw.json）
配置位于 \`~/.openclaw/openclaw.json\`，JSON5 格式（支持注释和尾逗号）。

### 关键配置项
- **agents.defaults.workspace** — 默认工作区路径
- **agents.defaults.model.primary** — 默认模型（格式 "provider/model"）
- **agents.list[]** — 多 Agent 配置
- **channels.telegram** — Telegram Bot
- **channels.discord** — Discord Bot
- **gateway.auth.token** — Gateway 认证令牌
- **gateway.port** — Gateway 端口（默认 18789）
- **models.providers** — 自定义模型提供商
- **bindings[]** — 消息路由绑定（channel→agentId）

## 五、多 Agent 路由
- main Agent 工作区默认 \`~/.openclaw/workspace\`
- 其他 Agent 默认 \`~/.openclaw/workspace-<agentId>\`
- Agent 配置目录固定为 \`~/.openclaw/agents/<agentId>/agent/\`

## 六、模型配置
模型配置可存储在 \`~/.openclaw/agents/<agentId>/agent/models.json\`，也可在 openclaw.json 的 \`models.providers\` 中定义自定义提供商。

## 七、认证
- **OAuth（推荐）**：通过 \`openclaw onboard\` 设置
- **API Key**：直接在 auth-profiles.json 或环境变量中设置
- **凭证位置**：\`~/.openclaw/agents/<agentId>/agent/auth-profiles.json\`

## 八、安装
**macOS/Linux：**
\`\`\`bash
curl -fsSL https://openclaw.ai/install.sh | bash
\`\`\`
**npm 全局安装：**
\`\`\`bash
npm install -g openclaw@latest
\`\`\`
**前置条件：** Node.js >= 22

## 九、渠道配置
### WhatsApp
- \`openclaw channels login\` → 扫描 QR 登录
- 配置 allowFrom 白名单限制私聊
- groups 配置群组行为（requireMention 等）

### Telegram
- 使用 Bot Token
- 群组支持 @提及触发

### Discord
- 使用 Bot Token
- 支持 guild 级别配置

## 十、故障排查
1. \`openclaw doctor\` — 诊断所有已知问题
2. \`openclaw doctor --fix\` — 自动修复
3. \`openclaw status --all\` — 完整状态报告
4. \`openclaw health\` — 健康检查
5. \`openclaw logs\` — 查看日志
`.trim()
