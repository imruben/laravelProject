<div>
    <form action="{{ route('posts.store') }}" method="POST">
        @csrf
        <textarea class="dark:bg-grey-700 text-white" id="postcontent" name="content"></textarea>
        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                Pio 🕊️
            </button>
        </div>
    </form>
</div>