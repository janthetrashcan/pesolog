<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        if (User::count() < 1){
            User::factory()->create([
                'name' => 'Test User',
                'email' => 'test@example.com',
                'password' => '123456',
            ]);
        }

        $this->call([
            CategorySeeder::class,
            SubcategorySeeder::class,
            AccountTypeSeeder::class,
            PaymentModeSeeder::class,
            AccountSeeder::class,
        ]);
    }
}
