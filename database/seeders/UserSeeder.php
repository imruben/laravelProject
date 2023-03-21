<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'username' => "pepeAdmin",
            'email' => "pepe@admin.pepe",
            'rol_id' => 1,
            'avatar' => 'default.jpg',
            'email_verified_at' => now(),
            'password' => Hash::make('1234'), // password
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        User::factory(20)->create();
    }
}
