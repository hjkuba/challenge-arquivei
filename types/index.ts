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
