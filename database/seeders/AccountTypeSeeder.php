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
                'name' => 'Credit Card'
            ],
            [
                'name' => 'Savings Account'
            ],
            [
                'name' => 'Insurance'
            ],
            [
                'name' => 'Loan'
            ],
        ];

        // Create payment modes
        foreach($accountTypes as $accountTypeData){
            AccountType::create($accountTypeData);
        }
    }
}
