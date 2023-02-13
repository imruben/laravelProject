<x-app-layout>
    <script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
    <div class="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <x-modals.modal-delete />
        <x-forms.tinymce-editor />
        <x-head.tinymce-config />

        @include('pios.partials.message-form')

        <div class="border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            @foreach($pios as $pio)

            <div class="p-6 flex text-gray-900 dark:bg-gray-800 dark:text-white ">

                <img src="/uploads/avatars/{{$pio->user->avatar}}" class="h-14 w-auto rounded-lg mr-4 hover:h-100 hover:scale-150 ease-in duration-100" alt="palomon">

                <div>
                    <div class="flex flex-row justify-start ">
                        <span class="text-lg mr-2">{{$pio->user->name}} </span>
                        <img src="/images/verified.png" class="h-4 self-center" alt="palomon">
                        <span class="ml-5 text-sm text-gray-500 self-center "> {{$pio->getTimestampPost()}}</span>
                    </div>
                    <div class="h-50 w-auto ">
                        <p class="text-md">{!! $pio->message !!}</p>
                    </div>
                </div>

                @if(Auth::user()->id === $pio->user->id)
                <div class="flex pl-0 ml-5 ">
                    <meta name="csrf-token" content="{{ csrf_token() }}">
                    <button data-id="{{$pio->id}}" type="button" class=" edit-pio-button inline-flex justify-center  text-gray-500 rounded cursor-pointer hover:text-gray-900  dark:text-gray-400 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                        <span class="sr-only">Edit pio</span>
                    </button>
                    <button data-id="{{$pio->id}}" type="button" class="remove-pio-button inline-flex justify-center  text-gray-500 rounded cursor-pointer hover:text-gray-900  dark:text-gray-400 dark:hover:text-white ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        <span class="sr-only">Remove Pio</span>
                    </button>
                </div>

                @endif
            </div>
            <div class="mt-1"></div>
            @endforeach
        </div>
        <script>
            var id, token;

            $('.remove-pio-button').each(function() {

                $(this).click(function() {
                    var id = $(this).data("id");
                    var token = $("meta[name='csrf-token']").attr("content");
                    $.ajax({
                        url: "pios/" + id,
                        type: 'DELETE',
                        data: {
                            "id": id,
                            "_token": token,
                        },
                        success: function() {
                            console.log("BORRAO");
                            location.reload();
                        }
                    });
                    // $('#modal-delete-pio').removeClass('hidden');
                })
            })
            // $('#modal-delete-pio__accept').click(function() {
            //     // $('#modal-delete-pio').addClass('hidden');
            //     $.ajax({
            //         url: "pios/" + id,
            //         type: 'DELETE',
            //         data: {
            //             "id": id,
            //             "_token": token,
            //         },
            //         success: function() {
            //             console.log("BORRAO");
            //         }
            //     });
            // })
            // $('#modal-delete-pio__cancel').click(function() {
            //     $('#modal-delete-pio').addClass('hidden');
            // })
        </script>




        <!-- 
        <div class="mt-6 bg-white shadow-sm rounded-lg divide-y">
            @foreach($pios as $pio)
            <div class="p-6 flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                <div class="flex-1">
                    <div class="flex justify-between items-center">
                        <span class="text-gray-700">{{$pio->user->name}}</span>
                        <span class="ml-2 text-sm text-gray-500">{{$pio->created_at->format('j M Y, g:i a')}}</span>
                        {{$pio->created_at}}
                    </div>
                    <p class="mt-4 text-lg text-gray-900">{{$pio->message}}</p>
                </div>
            </div>
            @endforeach
        </div> -->



    </div>
</x-app-layout>