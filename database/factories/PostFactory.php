<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */


    public function definition()
    {
        $faker = \Faker\Factory::create();
        // $faker->addProvider(new \Smknstd\FakerPicsumImages\FakerPicsumImagesProvider($faker));
        $faker->addProvider(new \Xvladqt\Faker\LoremFlickrProvider($faker));

        return [
            'title' => "Post sobre las palomas " . fake()->word(),
            'content' => fake()->text(200) . '<br><br><img src="' . $faker->imageUrl($width = 240, $height = 240, ['pigeon']) . '"><br>' . fake()->text(200),
            'created_at' => now(),
            'updated_at' => now(),
            'user_id' => \App\Models\User::all()->random()->id,
        ];
    }
}
