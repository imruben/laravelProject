<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Rol;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Rol::factory()->create([
            'role' => "1",
            'description' => "Admin",
        ]);

        Rol::factory()->create([
            'role' => "2",
            'description' => "User",
        ]);
    }
}
