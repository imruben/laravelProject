<x-app-layout>
    <section class="flex p-8 bg-[#20354b] justify-between ">
        <x-modals.modal-delete />

        <!-- SECTION USUARIO PERFIL -->
        <section class="text-white w-64 h-fit bg-[#182738] rounded-2xl px-8 py-6 shadow-lg">
            <div class="flex items-center justify-between">
                <span class="text-gray-400 text-sm">2d ago</span>
                <span class="text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </span>
            </div>
            <div class="mt-6 w-fit mx-auto">
                <img src="{{$user->getAvatar()}}" class="rounded-full w-28 " alt="profile picture" srcset="">
            </div>

            <div class="mt-8 ">
                <h2 class=" font-bold text-2xl tracking-wide">{{$user->username}}</h2>
            </div>
            <p class="text-emerald-400 font-semibold mt-2.5">
                Active
            </p>

            <div class="h-1 w-full bg-black mt-8 rounded-full">
                <div class="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
            </div>
            <div class="mt-3  text-sm">
                <span class="text-gray-400 font-semibold">Paloma:</span>
                <span>40%</span>
            </div>
            <div class="mt-3 text-sm">
                <span>{{$user->getNumberofPosts()}}</span>
                <span class="text-gray-400 font-semibold">posts</span>
            </div>
            <div class="mt-3  text-sm">
                <span>{{$user->getNumberofComments()}}</span>
                <span class="text-gray-400 font-semibold">comentarios</span>
            </div>

            <div class="mt-3">
                <span class="material-icons-outlined">
                    star
                </span><span class="material-icons-outlined">
                    star
                </span><span class="material-icons-outlined">
                    star
                </span><span class="material-icons-outlined">
                    star_rate
                </span><span class="material-icons-outlined">
                    star_rate
                </span>
            </div>

        </section>
        <!-- bg-[#182738] -->
        <!-- SECTION POSTS -->
        <section class=" h-fit flex flex-col bg-[#182738] w-2/4  rounded-2xl px-8 py-6 shadow-lg text-white">
            @if($posts->count() == 0)
            <h2 class="text-center">No hay ningún post</h2>
            @endif
            @foreach($posts as $post)
            <div class="flex bg-[#182738] ">
                <img src="{{$post->user->getAvatar()}}" class="h-14 w-auto rounded-lg mr-4 hover:h-100 hover:scale-125 hover:cursor-pointer ease-in duration-100" alt="palomon">
                <div>
                    <div class="flex flex-row justify-start ">
                        <span class="text-lg hover:cursor-pointer">{{$post->user->username}} </span>
                        <img src="/images/verified.png" class=" ml-2 h-4 self-center" alt="palomon">
                        <span class="ml-5 text-sm text-gray-500 self-center "> {{$post->getTimestampPost()}}</span>
                    </div>
                    <div class="h-50 w-auto p-2">
                        <p class="text-md">{!! $post->content !!}</p>
                    </div>
                </div>
                <div class="flex pl-0 ml-5 ">
                    <button data-id="{{$post->id}}" type="button" class=" edit-post-button inline-flex justify-center  text-gray-500 rounded cursor-pointer hover:text-gray-900  dark:text-gray-400 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                        <span class="sr-only">Edit post</span>
                    </button>
                    <button data-modal-target="modal-delete-post" data-modal-toggle="modal-delete-post" data-id="{{$post->id}}" type="button" class="remove-post-button inline-flex justify-center  text-gray-500 rounded cursor-pointer hover:text-gray-900  dark:text-gray-400 dark:hover:text-white ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        <span class="sr-only">Remove post</span>
                    </button>
                </div>
            </div>

            @if(!$loop->last)
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
            @endif
            @endforeach
        </section>

        <!-- SECTION USUARIOS -->
        <section class="h-fit w-1/4 bg-[#182738] rounded-2xl px-8 py-6 shadow-lg text-white">
            <h2 class="mb-4">Personas que quizás conozcas</h2>

            @foreach($users as $user)
            <div class=" flex hover:text-cyan-400 text-center ">
                <a href="{{route('userprofile.show',[$user->username])}}"><img src="{{$user->getAvatar()}}" class="h-14 w-auto rounded-lg mr-4 hover:h-100 hover:scale-125 hover:cursor-pointer ease-in duration-100" alt="palomon">
                </a>
                <div class="text-start ">
                    <div class="flex flex-row ">
                        <a href="{{route('userprofile.show',[$user->username])}}" class="text-lg hover:cursor-pointer">{{$user->username}} </a>
                        <img src="/images/verified.png" class=" ml-2 h-4 self-center" alt="palomon">
                    </div>
                    <span class="text-sm text-gray-400"> {{$user->getNumberofPosts()}} posts</span>
                </div>
            </div>
            @if(!$loop->last)
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
            @endif
            @endforeach
        </section>


        <!-- scripts modal delete -->
        <script src="{{asset('/js/modaldeletepost.js')}}"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>


    </section>
</x-app-layout>