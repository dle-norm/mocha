import fetch from 'node-fetch';

// test if the redirection to 404 is operationnal.
let url = "http://localhost:8080/badUri";
fetch(url)
  .then( res => res.text() )
  .then( data => {
    const notFound = `<!doctype html><html lang="fr">    <head>        <meta charset="utf-8">        <title>404 NOT FOUND</title>    </head>    <body>        <p>En construction</p>        <a href="/">            Retourner à l'accueil        </a>    </body></html>`;
    if (data.replace(/[\n\r]+/g, '').trim() === notFound) {
      console.log('404 good !!!');
    } else {
      console.log('Errors 404 test.');
    } 
});

// test if the robots.txt is operationnal.
url = "http://localhost:8080/robots.txt";
fetch(url)
  .then( res => res.text() )
  .then( data => {
    const notFound = `User-agent: *Disallow: /assetsDisallow: /scriptsDisallow: /css`;
    if (data.replace(/[\n\r]+/g, '').trim() === notFound) {
      console.log('robots.txt good !!!');
    } else {
      console.log('Errors robots.txt test.');
    } 
});

// test if the sitemap.xml is operationnal.
url = "http://localhost:8080/sitemap.xml";
fetch(url)
  .then( res => res.text() )
  .then( data => { 
    const notFound = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">  <url>    <loc>https://moca-cafe.herokuapp.com</loc>    <lastmod>2022-08-09</lastmod>  </url></urlset>`;
    if (data.replace(/[\n\r]+/g, '').trim() === notFound) {
      console.log('sitemap.xml good !!!');
    } else {
      console.log('Errors sitemap.xml test.');
    } 
});
