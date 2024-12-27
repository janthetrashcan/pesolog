type Record = {
    id: number;
    amount: number;
    description: any | null // NOT FOUND;
    attachment: any | null // NOT FOUND;
    tag: string | null;
    payee: string | null;
    transaction_type: string;
    transaction_date: string /* Date */ | null;
    account_id: number;
    category_id: number;
    payment_mode_id: number;
    user_id: number;
    created_at: string /* Date */ | null;
    updated_at: string /* Date */ | null;
};
