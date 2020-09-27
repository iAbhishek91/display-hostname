const Express = require('express');
const os = require('os');

const app = Express();
const PORT_NUMBER = 1122;
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>HOSTNAME</title>
  </head>
  <body>
    <div id="root"></div>
    <p>${os.hostname}</p>
  </body>
</html>
`

app.get('/', (_, res) => {
  res.status(200).send(html);
});


app.listen(PORT_NUMBER, () => {
  console.log(`server listening at ${PORT_NUMBER}`);
});
