import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "ts", "jsx", "tsx"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    preset: "ts-jest",
    transform: {
      "\\.tsx?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.app.json" }],
    },
    moduleDirectories: ["<rootDir>", "node_modules"],
    verbose: true,
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "<rootDir>/__test__/__mock__/CssStub.ts",
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    transformIgnorePatterns: ["\\.css?$"],
  };
};
