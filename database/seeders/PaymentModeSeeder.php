<?php

namespace Database\Seeders;

use App\Models\PaymentMode;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaymentModeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Initialization of predefined payment modes
        $paymentModes = [
            [
                'name' => 'Cash'
            ],
            [
                'name' => 'Debit Card'
            ],
            [
                'name' => 'Credit Card'
            ],
            [
                'name' => 'Bank Transfer'
            ],
            [
                'name' => 'Voucher'
            ],
            [
                'name' => 'Mobile Payment'
            ],
            [
                'name' => 'E-wallet Transfer'
            ],
        ];

        // Create payment modes
        foreach($paymentModes as $paymentModeData){
            PaymentMode::create($paymentModeData);
        }
    }
}
