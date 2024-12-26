<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('account_number')->nullable();
            $table->float('initial_balance');
            $table->float('balance');
            $table->string('currency');

            $table->string('color');
            // $table->foreignId('color_id')->constrained()->onDelete('set null');
            $table->foreignId('account_type_id')->constrained()->onDelete('set null');

            $table->foreignId('user_id')->constrained()->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accounts');
    }
};
