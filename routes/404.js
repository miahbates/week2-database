function error(request, response) {
  const htmlError = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Error</title>
    </head>
    <body>
    <h1>Page not found</h1>
    </body>
    </html>`;

  response.status(404).send(htmlError);
}

module.exports = { error };
