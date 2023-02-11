@props(['url'])
<tr>
    <td class="header">
        <a href="{{ $url }}" style="display: inline-block;">
            @if (trim($slot) === 'Pio')
            <!-- <img src="https://laravel.com/img/notification-logo.png" class="logo" alt="Laravel Logo"> -->
            <img src="{{url('/images/paloma.png')}}" class="logo" alt="Pio Logo">
            @else
            <img src="https://laravel.com/img/notification-logo.png" class="logo" alt="Laravel Logo">
            @endif
        </a>
    </td>
</tr>