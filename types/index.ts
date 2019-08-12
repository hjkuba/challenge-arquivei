export interface Credentials {
    email: string;
    password: string;
}

export interface Company {
    email: string;
    companyName: string;
    tradingName: string;
    cnpj: string;
    currentQueries: number;
    totalQueries: number;
}

export interface Promotion {
    ['default-text']: string;
    ['default-value']: number;
    ['promotional-texts']: Record<string, string>;
    ['promotional-values']: Record<number, number>;
}
