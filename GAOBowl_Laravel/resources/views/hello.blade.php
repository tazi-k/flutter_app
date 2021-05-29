<!DOCTYPE html>
 <html lang="ja">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>Document</title>
 </head>
 <body>
     <h1>Hello World</h1>
      <form action="/hello" method="POST">
         @csrf
         <input type="text" name="msg">
         <input type="text" name="msg2">
         <input type="submit">
     </form>

     @error('msg')
     <p>{{ $message }}</p>
 @enderror

     @error('msg2')
     <p>{{ $message }}</p>
 @enderror

 </body>
 </html>