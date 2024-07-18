import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "ts", "jsx", "tsx"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    verbose: true,
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
    },
  };
};
