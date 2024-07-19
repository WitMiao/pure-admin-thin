declare module 'vue' {
  /**
   * 自定义全局组件获得 Volar 提示（自定义的全局组件需要在这里声明下才能获得 Volar 类型提示哦）
   */
  export interface GlobalComponents {
    IconifyIconOffline: (typeof import('../src/components/ReIcon'))['IconifyIconOffline']
    FontIcon: (typeof import('../src/components/ReIcon'))['FontIcon']
    Auth: (typeof import('../src/components/ReAuth'))['Auth']
  }
}

export {}
