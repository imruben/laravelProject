<?php

namespace Database\Seeders;

use App\Models\PostHasTags;
use Database\Factories\PostHasTagsFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostHasTagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PostHasTags::factory(25)->create();
    }
}
