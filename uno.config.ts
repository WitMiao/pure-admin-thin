import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig, presetTypography, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetTypography()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      bg_color: "var(--el-bg-color)",
      primary: "var(--el-color-primary)",
      regular: "var(--el-text-color-regular)",
      success: "var(--el-color-success)",
      warning: "var(--el-color-warning)",
      info: "var(--el-color-info)",
      danger: "var(--el-color-danger)"
    }
  }
});
