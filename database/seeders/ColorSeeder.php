<?php

namespace Database\Seeders;

use App\Models\Color;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $colors = [
        [
            'name' => 'red',
            'hex_code' => '#ef4444',
        ],
        [
            'name' => 'orange',
            'hex_code' => '#f97316',
        ],
        [
            'name' => 'amber',
            'hex_code' => '#f59e0b',
        ],
        [
            'name' => 'yellow',
            'hex_code' => '#eab308',
        ],
        [
            'name' => 'lime',
            'hex_code' => '#84cc16',
        ],
        [
            'name' => 'green',
            'hex_code' => '#22c55e',
        ],
        [
            'name' => 'emerald',
            'hex_code' => '#10b981',
        ],
        [
            'name' => 'teal',
            'hex_code' => '#14b8a6',
        ],
        [
            'name' => 'cyan',
            'hex_code' => '#06b6d4',
        ],
        [
            'name' => 'sky',
            'hex_code' => '#0ea5e9',
        ],
        [
            'name' => 'blue',
            'hex_code' => '#3b82f6',
        ],
        [
            'name' => 'indigo',
            'hex_code' => '#6366f1',
        ],
        [
            'name' => 'violet',
            'hex_code' => '#8b5cf6',
        ],
        [
            'name' => 'purple',
            'hex_code' => '#a855f7',
        ],
        [
            'name' => 'fuchsia',
            'hex_code' => '#d946ef',
        ],
        [
            'name' => 'pink',
            'hex_code' => '#ec4899',
        ],
        [
            'name' => 'rose',
            'hex_code' => '#f43f5e',
        ],
        ];
    }
}
