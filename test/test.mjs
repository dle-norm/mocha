import fetch from 'node-fetch';

// test if the redirection to 404 is operationnal.
const url = "http://localhost:8000/badUri";
fetch(url)
  .then( res => res.text() )
  .then( data => { 
    const notFound = `<!doctype html><html lang="fr">    <head>        <meta charset="utf-8">        <title>404 NOT FOUND</title>        <link rel="stylesheet" href="./css/404.css">        <script src="./scripts/404.js"></script>    </head>    <body>        <p>En construction</p>        <a href="./index.html">            Retourner à l'accueil        </a>    </body></html>`;
    if (data.replace(/[\n\r]+/g, '').trim() === notFound) {
      console.log('All good !!!');
    } else {
      console.log('Errors 404 test.');
    } 
});
