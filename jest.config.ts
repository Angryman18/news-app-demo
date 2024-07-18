import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "ts", "jsx", "tsx", "css"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    preset: "ts-jest",
    transform: {
      "\\.tsx?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.app.json" }],
    },
    verbose: true,
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "<rootDir>/__mock__/CssStub.ts",
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    transformIgnorePatterns: ["\\.css?$"],
  };
};
