<?php

namespace App\Http\Controllers;

use App\Models\Pio;
use Illuminate\Http\Request;

class PioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('pios.index', [
            'pios' => Pio::with('user')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'message' => 'required|string|max:255'
        ]);

        $request->user()->pios()->create($validated);
        return redirect(route("pios.index"));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pio  $pio
     * @return \Illuminate\Http\Response
     */
    public function show(Pio $pio)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pio  $pio
     * @return \Illuminate\Http\Response
     */
    public function edit(Pio $pio)
    {
        $this->autorize('update', $pio);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pio  $pio
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pio $pio)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pio  $pio
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pio $pio)
    {
        //
    }
}
