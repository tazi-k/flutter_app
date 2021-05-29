<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use Auth;

class ContactController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('contact');
    }

    public function store(Request $request)
    {
        Mail::send('emails.contact', [
            'user' => Auth::user(),
            'contact' => $request->contact,
        ], function ($message) {
            $message->to(config('mail.username'))->subject('お問い合わせがありました。');
        });
        return redirect()->route('contacts.index');
    }
}
