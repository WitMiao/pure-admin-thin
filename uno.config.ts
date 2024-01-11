import transformerDirectives from "@unocss/transformer-directives";
import { defineConfig, presetTypography, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetTypography()],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      bg_color: "var(--el-bg-color)",
      primary: "var(--el-color-primary)",
      text_color_primary: "var(--el-text-color-primary)",
      text_color_regular: "var(--el-text-color-regular)"
    }
  }
});
