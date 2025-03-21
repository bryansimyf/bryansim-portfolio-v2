import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // React and built-in Node.js modules
            ["^react", "^(node:|@?\\w)"],
            // Third-party libraries (MUI, React Hook Form, Redux, etc.)
            ["^@mui", "^@?react-hook-form", "^@redux"],
            // Store-related imports
            ["^@/store(/.*|$)"],
            // Hooks
            ["^@/hooks(/.*|$)"],
            // Layouts
            ["^@/layouts(/.*|$)"],
            // Constants
            ["^@/constants(/.*|$)"],
            // Utils
            ["^@/utils(/.*|$)"],
            // Components
            ["^@components(/.*|$)"],
            // Assets
            ["^@assets(/.*|$)"],
            // Side effect imports (CSS, global styles, etc.)
            ["^\\u0000"],
            // Parent imports (`..` last)
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Other relative imports (`./` last)
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // Style imports
            ["^.+\\.?(css|scss|sass|less|styl)$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "@typescript-eslint/no-explicit-any": "off",
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [["@", "./src"]],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  }
);
