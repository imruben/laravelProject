<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

//para cambiar correo verificacion email
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Lang;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        VerifyEmail::$toMailCallback = function ($notifiable, $verificationUrl) {
            return (new MailMessage)
                ->greeting('Piooo')
                ->subject(Lang::get('pio pio pio 🕊️'))
                ->line(Lang::get('pio pio pio'))
                ->action(Lang::get('pio 🕊️'), $verificationUrl)
                ->line(Lang::get('pio pio'))
                ->salutation('Pio ✊');
        };
    }
}
