sed -i '' '/reactHooks\.configs\.recommended\.rules,/a \
      "react-refresh/only-export-components": "off",\
      "no-unused-vars": "off",\
      "@typescript-eslint/no-unused-vars": "off",\
' eslint.config.js