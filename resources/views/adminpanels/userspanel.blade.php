<x-app-layout>

    <!-- MENSAJE BORRADO -->
    @if(isset($message))
    <div class=" flex justify-center">
        <div class="flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Info</span>
            <div>
                {{$message}}
            </div>
        </div>

    </div>
    @endif

    <div class="flex items-center justify-center ">
        <table class=" overflow-x-auto shadow-md sm:rounded-lg w-2/5 my-16 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Usuario
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Rol
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach($users as $user)

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <img class="w-10 h-10 rounded-full" src="{{$user->getAvatar()}}" alt="Jese image">
                        <div class="pl-3">
                            <div class="text-base font-semibold">{{$user->username}}</div>
                            <div class="font-normal text-gray-500">{{$user->email}}</div>
                        </div>
                    </th>
                    <td class="px-6 py-4">
                        {{$user->getRol()}}
                    </td>
                    @if($user->id != Auth::user()->id)
                    <td class="px-6 py-4">
                        <form class=" flex justify-center align-center" method="post" action="{{Route('admin.userspanel.destroy',$user)}}" enctype="multipart/form-data" class="mt-6 space-y-6">
                            @csrf
                            @method('delete')
                            <button type="submit" class="font-medium text-red-600 dark:text-red-500 hover:underline">Borrar</button>
                        </form>
                    </td>
                    @else
                    <td>Usuario actual</td>
                    @endif
                </tr>

                @endforeach
            </tbody>
        </table>
    </div>
</x-app-layout>