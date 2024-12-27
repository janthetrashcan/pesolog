<?php

namespace Database\Seeders;

use App\Models\Account;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $accounts = [
            [
                'name' => 'Wallet',
                'account_number' => null,
                'initial_balance' => 0,
                'balance' => 0,
                'currency' => 'PHP',
                'color' => 'green-500',
                'account_type_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'Maya',
                'account_number' => null,
                'initial_balance' => 500,
                'balance' => 500,
                'currency' => 'PHP',
                'color' => 'green-500',
                'account_type_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'GCash',
                'account_number' => null,
                'initial_balance' => 500,
                'balance' => 500,
                'currency' => 'PHP',
                'color' => 'blue-500',
                'account_type_id' => 1,
                'user_id' => 1,
            ],

        ];

        foreach($accounts as $account) {
            Account::create($account);
        }
    }
}
