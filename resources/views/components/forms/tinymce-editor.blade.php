<div class="justify-self-end">
    <form action="{{ route('posts.store') }}" method="POST">
        @csrf
        <textarea class="dark:bg-grey-700 text-white" id="postcontent" name="content"></textarea>
        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button type="submit" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Publicar post 🕊️
            </button>
        </div>
    </form>
</div>