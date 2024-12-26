<?php

namespace Database\Seeders;

use App\Models\AccountType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AccountTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Initialization of predefined payment modes
        $accountTypes = [
            [
                'name' => 'General'
            ],
            [
                'name' => 'Cash'
            ],
            [
                'name' => 'Coin Bank'
            ],
            [
                'name' => 'Current Account'
            ],
            [
                'name' => 'Credit Card'
            ],
            [
                'name' => 'Savings Account'
            ],
            [
                'name' => 'Bonus'
            ],
            [
                'name' => 'Insurance'
            ],
            [
                'name' => 'Investment'
            ],
            [
                'name' => 'Loan'
            ],
            [
                'name' => 'Mortgage'
            ],
        ];

        // Create payment modes
        foreach($accountTypes as $accountTypeData){
            AccountType::create($accountTypeData);
        }
    }
}
