<x-app-layout>
    <div class=" max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <x-modals.modal-delete />
        <x-forms.tinymce-editor />
        <x-head.tinymce-config />

        <style>
            .bg-gray-100 {
                background-color: #20354b !important;
            }

            /* .comments.hidden {
                opacity: 0;
                -webkit-transition: opacity 2s, visibility 2s;
            } */

            /* .comments {
                opacity: 1;

            } */
        </style>
        <!-- @include('posts.partials.message-form') -->
        <!-- SECTION COMMENTS -->
        <section class="rounded-2xl px-8 py-6 shadow-lg dark:bg-[#182738] ">
            @foreach($posts as $post)
            <div class=" flex text-gray-900 dark:bg-[#182738] dark:text-white ">
                <a class="w-40" href="{{route('userprofile.show',[$post->user->username])}}">
                    <img src="{{$post->user->getAvatar()}}" class=" h-14 w-100 rounded-lg mr-4 hover:h-100 hover:scale-125 hover:text-cyan-400 ease-in duration-100" alt="palomon"></img>
                </a>
                <div>
                    <!-- POST'S USER -->
                    <div class="flex flex-row justify-start ">
                        <a href="{{route('userprofile.show',[$post->user->username])}}" class="text-lg mr-2 hover:text-cyan-400">{{$post->user->username}} </a>
                        <img src="/images/verified.png" class="h-4 self-center" alt="palomon">
                        <span class="ml-5 text-sm text-gray-500 self-center "> {{$post->getTimestampPost()}}</span>
                    </div>
                    <!-- POST'S CONTENT -->
                    <div class="h-50 p-2 w-auto ">
                        <p class="text-md">{!! $post->content !!}</p>
                    </div>
                    <!-- POST'S COMMENTS AND RATING -->
                    <hr class="w-48 h-1 mx-auto bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700">
                    <div class="mt-1 flex justify-around ">
                        <div class="commentToggleBtns hover:cursor-pointer align-center flex ">
                            <span class="material-icons-outlined mr-2">comment</span>
                            <span class="">{{$post->getNumberofUsersComments()}}</span>
                        </div>
                        <!-- RATING -->
                        <div class=" flex align-center  ">
                            <form class=" flex justify-center align-center" method="post" action="{{route('rating.likepost',[$post->id  ])}}" enctype="multipart/form-data" class="mt-6 space-y-6">
                                @csrf
                                @method('post')
                                <span class="ml-6 mr-2">{{$post->getLikes()}}</span>
                                <button type="submit" class="material-icons-outlined hover:text-indigo-500 hover:cursor-pointer ">thumb_up</button>
                            </form>
                            <form class=" flex justify-center align-center" method="post" action="{{route('rating.dislikepost',[$post->id  ])}}" enctype="multipart/form-data" class="mt-6 space-y-6">
                                @csrf
                                @method('post')
                                <span class="ml-6 mr-2">{{$post->getDislikes()}}</span>
                                <button type="submit" class="material-icons-outlined hover:text-indigo-500 hover:cursor-pointer ">thumb_down</button>
                            </form>
                        </div>


                    </div>

                    <div class="comments hidden">
                        @if(count($post->comment) > 0)
                        <hr class="w-48 h-1 mx-auto bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700">
                        @endif
                        @foreach($post->comment as $comment)
                        <div class="flex flex-row justify-start ">
                            <a class="w-fit" href="{{route('userprofile.show',[$post->user->username])}}">
                                <img src="{{$post->user->getAvatar()}}" class=" h-14 w-100 rounded-lg mr-4 hover:h-100 hover:scale-125 hover:text-cyan-400 ease-in duration-100" alt="palomon"></img>
                            </a>
                            <div class="flex flex-row justify-start ">
                                <a href="{{route('userprofile.show',[$post->user->username])}}" class="text-lg mr-2 hover:text-cyan-400">{{$post->user->username}} </a>
                                <img src="/images/verified.png" class="h-4 self-center" alt="palomon">
                                <span class="ml-5 text-sm text-gray-500 self-center "> {{$post->getTimestampPost()}}</span>
                            </div>
                            <span>{{$comment->comment}}</span>
                        </div>
                        @endforeach
                    </div>

                    @if(!$loop->last)
                    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                    @endif
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
            <div class="mt-1"></div>
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



    </div>
</x-app-layout>