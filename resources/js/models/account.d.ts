type Account = {
    id: number;
    name: string;
    account_number: number | null;
    initial_balance: number;
    balance: number;
    currency: string;
    color: string;
    account_type_id: number;
    user_id: number;
    created_at: string /* Date */ | null;
    updated_at: string /* Date */ | null;
};
