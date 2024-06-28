import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '口袋精灵2 | 单机版 不完全指南',
  bundler: viteBundler(),
  theme: defaultTheme()
})
