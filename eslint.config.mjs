// @ts-check

import eslint from '@eslint/js';
import globals from "globals";
import { defineConfig } from "eslint/config";
import tseslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
		languageOptions: {
			globals: {
        ...globals.node,
			},
		},
	},
  {
		rules: {
			"no-unused-vars": "error",
			"no-undef": "error",
      "prefer-const" : "error",
      "no-console" : "warn",

		},
	},

	{
		ignores : [".env", "./dist", "node_modules"],
	}
);