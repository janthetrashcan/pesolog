export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface Account {
    id: number;
    name: string;
    account_number: string;
    initial_balance: number;
    balance: number;
    currency: string;
    color: string;
    account_type_id: number;
    user_id: number;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
