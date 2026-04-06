/**
 * 共享模型预设配置
 * models.js 和 assistant.js 共用，只需维护一套数据
 */

// API 接口类型选项
export const API_TYPES = [
  { value: 'openai-completions', label: 'OpenAI 兼容 (最常用)' },
  { value: 'anthropic-messages', label: 'Anthropic 原生' },
  { value: 'openai-responses', label: 'OpenAI Responses' },
  { value: 'google-generative-ai', label: 'Google Gemini' },
  { value: 'ollama', label: 'Ollama 原生' },
]

// 服务商快捷预设
export const PROVIDER_PRESETS = [
  { key: 'openai', label: 'OpenAI 官方', baseUrl: 'https://api.openai.com/v1', api: 'openai-completions' },
  { key: 'anthropic', label: 'Anthropic Claude', baseUrl: 'https://api.anthropic.com', api: 'anthropic-messages' },
  { key: 'google', label: 'Google Gemini', baseUrl: 'https://generativelanguage.googleapis.com/v1beta', api: 'google-generative-ai' },
  { key: 'qwen', label: '通义千问 (Qwen)', baseUrl: 'https://dashscope.aliyuncs.com/compatible-mode/v1', api: 'openai-completions' },
  { key: 'ollama', label: 'Ollama (本地)', baseUrl: 'http://127.0.0.1:11434/v1', api: 'openai-completions' },
]

// 常用模型预设（按服务商分组）
export const MODEL_PRESETS = {
  openai: [
    { id: 'gpt-4o', name: 'GPT-4o', contextWindow: 128000 },
    { id: 'gpt-4o-mini', name: 'GPT-4o Mini', contextWindow: 128000 },
    { id: 'o3-mini', name: 'o3 Mini', contextWindow: 200000, reasoning: true },
  ],
  anthropic: [
    { id: 'claude-opus-4-6', name: 'Claude Opus 4.6', contextWindow: 200000 },
    { id: 'claude-sonnet-4-6', name: 'Claude Sonnet 4.6', contextWindow: 200000 },
    { id: 'claude-haiku-4-5-20251001', name: 'Claude Haiku 4.5', contextWindow: 200000 },
  ],
  google: [
    { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', contextWindow: 1000000, reasoning: true },
    { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', contextWindow: 1000000 },
    { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash', contextWindow: 1000000 },
  ],
  qwen: [
    { id: 'qwen-max', name: 'Qwen Max', contextWindow: 32768 },
    { id: 'qwen-plus', name: 'Qwen Plus', contextWindow: 131072 },
    { id: 'qwen-turbo', name: 'Qwen Turbo', contextWindow: 131072 },
    { id: 'qwen3-235b-a22b', name: 'Qwen3 235B', contextWindow: 131072, reasoning: true },
  ],
  ollama: [
    { id: 'qwen2.5:7b', name: 'Qwen 2.5 7B', contextWindow: 32768 },
    { id: 'qwen2.5:14b', name: 'Qwen 2.5 14B', contextWindow: 32768 },
    { id: 'qwen3:8b', name: 'Qwen3 8B', contextWindow: 32768 },
  ],
}
