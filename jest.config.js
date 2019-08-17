module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/*.spec.(ts|tsx)'],
    globals: {
        'ts-jest': {
            babelConfig: {
                plugins: ['styled-jsx/babel-test'],
            },
            tsConfig: 'jest.tsconfig.json',
        },
    },
    coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.js'],
    setupFilesAfterEnv: ['<rootDir>/enzyme.ts'],
};
