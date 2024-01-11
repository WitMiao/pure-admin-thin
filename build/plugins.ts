import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { viteMockServe } from "vite-plugin-mock";
import svgLoader from "vite-svg-loader";
import { cdn } from "./cdn";
import { configCompressPlugin } from "./compress";
import { viteBuildInfo } from "./info";
// import ElementPlus from "unplugin-element-plus/vite";
import themePreprocessorPlugin from "@pureadmin/theme";
import { visualizer } from "rollup-plugin-visualizer";
import UnoCSS from "unocss/vite";
import removeConsole from "vite-plugin-remove-console";
import { genScssMultipleScopeVars } from "../src/layout/theme";

export function getPluginsList(
  command: string,
  VITE_CDN: boolean,
  VITE_COMPRESSION: ViteCompression
) {
  const prodMock = true;
  const lifecycle = process.env.npm_lifecycle_event;
  return [
    vue(),
    // jsx、tsx语法支持
    vueJsx(),
    UnoCSS(),
    VITE_CDN ? cdn : null,
    configCompressPlugin(VITE_COMPRESSION),
    // 线上环境删除console
    removeConsole({ external: ["src/assets/iconfont/iconfont.js"] }),
    viteBuildInfo(),
    // 自定义主题
    themePreprocessorPlugin({
      scss: {
        multipleScopeVars: genScssMultipleScopeVars(),
        extract: true
      }
    }),
    // svg组件化支持
    svgLoader(),
    // ElementPlus({}),
    // mock支持
    viteMockServe({
      mockPath: "mock",
      localEnabled: command === "serve",
      prodEnabled: command !== "serve" && prodMock,
      injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      logger: false
    }),
    // 打包分析
    lifecycle === "report"
      ? visualizer({ open: true, brotliSize: true, filename: "report.html" })
      : null
  ];
}
