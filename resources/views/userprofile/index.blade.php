<x-app-layout>


    <!-- MENSAJE ERROR -->

    @if($errors->first())
    {{dd($errors)}};
    <div class=" flex justify-center">
        <div id="alert-4" class="fixed flex p-4 mb-4 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert" data-duration="200">
            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Info</span>
            <div class="ml-3 text-sm font-medium">
                {{$errors->first()}}
            </div>
            <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700" data-dismiss-target="#alert-4" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>

    </div>
    @endif

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
            <div class="mt-3  text-sm">
                <span>{{$user->getNumberofLikes()}}</span>
                <span class="text-gray-400 font-semibold">likes</span>
            </div>
            <div class="mt-3  text-sm">
                <span>{{$user->getNumberofDislikes()}}</span>
                <span class="text-gray-400 font-semibold">dislikes</span>
            </div>

        </section>
        <!-- bg-[#182738] -->
        <!-- SECTION POSTS -->
        <section class=" h-fit flex flex-col bg-[#182738] w-2/4  rounded-2xl px-8 py-6 shadow-lg text-white">
            <!-- NAV USERPROFILE -->
            <div class="flex items-center justify-center py-2 flex-wrap">
                @php
                $activeclass = "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800";
                $notactiveclass = "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800";
                @endphp
                <a href="{{route('userprofile.show',['userprofile' => $user->username,'filter' =>'all'])}}" class="{{($filter == 'all' || $filter == null ) ? $activeclass : $notactiveclass}}">Posts</a>
                <a href="{{route('userprofile.show',['userprofile' => $user->username,'filter' =>'likes'])}}" type="button" class="{{($filter == 'likes') ? $activeclass : $notactiveclass}}">Likes</a>
                <a href="{{route('userprofile.show',['userprofile' => $user->username,'filter' =>'dislikes'])}}" type="button" class="{{($filter == 'dislikes') ? $activeclass : $notactiveclass}}">Dislikes</a>
                <a href="{{route('userprofile.show',['userprofile' => $user->username,'filter' =>'comments'])}}" type="button" class="{{($filter == 'comments') ? $activeclass : $notactiveclass}}">Comentarios</a>
            </div>
            @if($posts->count() == 0)
            <h2 class="text-center">No hay posts</h2>
            @endif
            @if($filter != 'comments')
            @foreach($posts as $post)
            <div class="flex bg-[#182738] ">
                <img src="{{$post->user->getAvatar()}}" class="h-14 w-auto rounded-lg mr-4 hover:h-100 hover:scale-125 hover:cursor-pointer ease-in duration-100" alt="palomon">
                <div class="w-full">
                    <div class="flex flex-row justify-start ">
                        <span class="text-lg hover:cursor-pointer">{{$post->user->username}} </span>
                        <img src="/images/verified.png" class=" ml-2 h-4 self-center" alt="palomon">
                        <span class="ml-5 text-sm text-gray-500 self-center "> {{$post->getTimestampPost()}}</span>
                    </div>
                    <div class="h-50 w-auto p-2">
                        <p class="text-md">{!! $post->content !!}</p>
                    </div>

                    <!-- POST'S TAGS -->
                    @if($post->posthastags->count() > 0)
                    <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
                    <div class="flex justify-center mt-5">
                        @foreach($post->posthastags as $tag)
                        <span type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xs px-3 py-1.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">{{$tag->tag->tag}}</span>
                        @endforeach
                    </div>
                    @endif

                    <!-- POST'S COMMENTS AND RATING -->
                    <hr class="w-48 h-1 mx-auto bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700">
                    <div class="mt-1 flex justify-around ">
                        <div class="commentToggleBtns hover:cursor-pointer align-center flex ">
                            <span class="material-icons-outlined mr-2">comment</span>
                            <span class="">{{$post->getNumberofUsersComments()}}</span>
                        </div>
                        <!-- RATING -->
                        <div id="ratingsdiv{{$post->id}}" class=" flex align-center">
                            <form class=" flex justify-center align-center" method="post" action="{{route('rating.likepost',[$post->id])}}" enctype="multipart/form-data" class="mt-6 space-y-6">
                                @csrf
                                @method('post')
                                <span class="ml-6 mr-2 hover:cursor-default">{{$post->getLikes()}}</span>
                                @if($post->getUserHasLiked())
                                <span class="material-icons-outlined text-indigo-500 hover:cursor-default">thumb_up</span>
                                @else
                                <button type="submit" class="likebtn material-icons-outlined hover:text-indigo-500 hover:cursor-pointer ">thumb_up</button>
                                @endif
                            </form>
                            <form class=" flex justify-center align-center" method="post" action="{{route('rating.dislikepost',[$post->id])}}" enctype="multipart/form-data" class="mt-6 space-y-6">
                                @csrf
                                @method('post')
                                <span class="ml-6 mr-2">{{$post->getDislikes()}}</span>
                                @if($post->getUserHasDisliked())
                                <span class="material-icons-outlined text-red-600 hover:cursor-default">thumb_down</span>
                                @else
                                <button type="submit" class="material-icons-outlined hover:text-red-600 hover:cursor-pointer ">thumb_down</button>
                                @endif
                            </form>
                        </div>
                    </div>

                    <div class="mt-5 comments hidden">
                        <!-- form enviar comment -->
                        <form action="{{ route('comments.store', $post->id) }}" method="POST">
                            @csrf
                            <label for="comment" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comentale algo!</label>
                            <textarea name="comment" required id="comment" rows="2" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tremenda paloma 👿"></textarea>
                            <button type="submit" class="mt-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Comentar</button>

                        </form>
                        <!-- comments -->
                        @if(count($post->comment) > 0)
                        <hr class="w-48 h-1 mx-auto bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700">
                        @endif
                        @foreach($post->comment as $comment)
                        <div class="flex justify-start">
                            <a class="w-fit" href="{{route('userprofile.show',[$comment->user->username])}}">
                                <img src="{{$comment->user->getAvatar()}}" class=" h-14 w-100 rounded-lg mr-4 hover:h-100 hover:scale-125 hover:text-cyan-400 ease-in duration-100" alt="palomon"></img>
                            </a>
                            <div>
                                <div class="flex">
                                    <a href="{{route('userprofile.show',[$comment->user->username])}}" class="text-lg mr-2 hover:text-cyan-400">{{$comment->user->username}} </a>
                                    <img src="/images/verified.png" class="h-4 self-center" alt="palomon">
                                    <span class="ml-5 text-sm text-gray-500 self-center "> {{$comment->getTimestampComment()}}</span>
                                    <span class="text-xs self-center ml-4">Respuesta a {{@$post->user->username}}</span>
                                </div>
                                <span>{{$comment->comment}}</span>
                            </div>
                        </div>
                        @if(!$loop->last)
                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                        @endif
                        @endforeach
                    </div>
                </div>

                <!-- EDIT BUTTONS (only for the user's posts) -->
                @if(Auth::user()->id === $post->user->id)
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
                @endif
            </div>

            @if(!$loop->last)
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
            @endif
            @endforeach
            @else
            @if($comments->count() == 0)
            <h2 class="text-center">No hay comentarios</h2>
            @endif
            @foreach($comments as $comment)
            <div class="flex justify-start">
                <a class="w-fit" href="{{route('userprofile.show',[$comment->user->username])}}">
                    <img src="{{$comment->user->getAvatar()}}" class=" h-14 w-100 rounded-lg mr-4 hover:h-100 hover:scale-125 hover:text-cyan-400 ease-in duration-100" alt="palomon"></img>
                </a>
                <div class="w-full">
                    <div class="flex">
                        <a href="{{route('userprofile.show',[$comment->user->username])}}" class="text-lg mr-2 hover:text-cyan-400">{{$comment->user->username}} </a>
                        <img src="/images/verified.png" class="h-4 self-center" alt="palomon">
                        <span class="ml-5 text-sm text-gray-500 self-center "> {{$comment->getTimestampComment()}}</span>
                        <a href="{{route('userprofile.show',[$comment->post->user->username])}}" class="hover:text-cyan-400 text-xs self-center ml-4">Respuesta a {{@$comment->post->user->username}}</a>
                    </div>
                    <span>{{$comment->comment}}</span>
                </div>
            </div>
            @if(!$loop->last)
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
            @endif
            @endforeach

            @endif


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


        <!-- script comments  -->
        <script>
            let commentToggleBtns = document.querySelectorAll(".commentToggleBtns");

            commentToggleBtns.forEach((commentToggleBtn) => {
                commentToggleBtn.addEventListener("click", function(e) {
                    let divComments = e.target.parentElement.parentElement.nextElementSibling;
                    if (divComments.classList.contains("hidden")) {
                        divComments.classList.remove("hidden");
                    } else {
                        divComments.classList.add("hidden");
                    }
                });
            });
        </script>

        <!-- scripts modal delete -->
        <script src="{{asset('/js/modaldeletepost.js')}}"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>


    </section>
</x-app-layout>