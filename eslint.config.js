// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    rules: {
      // 未使用的导入需去除
      'unused-imports/no-unused-imports': 'error',
    },
  },
)
