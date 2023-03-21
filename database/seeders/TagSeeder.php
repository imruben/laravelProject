<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tag;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tag::factory()->create([
            'tag' => "Música",
        ]);
        Tag::factory()->create([
            'tag' => "Economía",
        ]);
        Tag::factory()->create([
            'tag' => "Deportes",
        ]);
        Tag::factory()->create([
            'tag' => "Televisión",
        ]);
        Tag::factory()->create([
            'tag' => "Política",
        ]);
    }
}
