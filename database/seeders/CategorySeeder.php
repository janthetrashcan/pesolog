<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Initialization of predefined categories
        $categories = [
            [
                'name' => 'Food and Drinks',
                'nature' => 'want',
                'color' => 'rose-500'
            ],
            [
                'name' => 'Leisure',
                'nature' => 'want',
                'color' => 'cyan-500'
            ],
            [
                'name' => 'Domestic',
                'nature' => 'need',
                'color' => 'amber-500'
            ],
            [
                'name' => 'Healthcare',
                'nature' => 'must',
                'color' => 'red-500'
            ],
            [
                'name' => 'Transportation',
                'nature' => 'want',
                'color' => 'slate-500'
            ],
        ];

        // Create categories
        foreach($categories as $categoryData){
            Category::create($categoryData);
        }
    }
}
