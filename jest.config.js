module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    testMatch: ['**/*.spec.(ts|tsx)'],
    coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.js'],
    setupFilesAfterEnv: ['<rootDir>/enzyme.ts'],
};
