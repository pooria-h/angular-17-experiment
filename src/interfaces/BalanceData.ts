export interface Transaction {
    from?: string;
    to?: string;
    description: string;
    amount: number;
    date: string;
}

export interface TransactionWithID extends Transaction {
    id: number;
}

export interface Account {
    name: string;
    iban: string;
    balance: number;
}

export interface BalanceData {
    account: Account;
    currency: string;
    transactions: Transaction[];
}
