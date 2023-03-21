<!-- Main modal -->
<div id="modal-create-post" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto p-7">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Crear post
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="modal-create-post">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>



            </div>
            <!-- Modal body -->

            <!-- editor -->
            <form action="{{ route('posts.store') }}" method="POST">
                <div class="px-8 py-3">
                    <div class="tags flex justify-center my-5">
                        @foreach($tags as $tag)
                        <div class="flex items-center mr-4">
                            <input name="tags[]" id="teal-checkbox" type="checkbox" value="{{$tag->id}}" class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="teal-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{$tag->tag}}</label>
                        </div>
                        @endforeach
                    </div>

                    <!-- form crear post con tinymce-->
                    <div class="justify-self-end">

                        @csrf
                        <textarea class="dark:bg-grey-700 text-white" id="postcontent" name="content"></textarea>
                        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                            <button type="submit" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Publicar post 🕊️
                            </button>
                        </div>
            </form>
        </div>

        <x-head.tinymce-config />
    </div>

</div>
</div>
</div>