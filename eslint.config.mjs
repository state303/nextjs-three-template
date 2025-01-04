import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    {
        ignores: [".next/", "dist/", "node_modules/"],
    },
    ...compat.extends("next/core-web-vitals"),
    ...compat.extends("next/typescript"),
    eslintPluginPrettierRecommended,
];

export default eslintConfig;
