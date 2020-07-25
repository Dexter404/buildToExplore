const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 3000;

function auth(req, res, next) {
  console.log('URL: ', req.url);
  console.log('Headers: ', req.headers);
  console.log('Cookies: ', req.cookies);

  if (req.url == '/logout') {
    logoutUsingInvalidUser(req, res, next);
    // logoutByClearSiteData(req, res, next);
    return;
  }

  var authHeader = req.headers.authorization;
  if (!authHeader) {
    var err = new Error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    next(err);
    return;
  }
  var auth = new Buffer.from(authHeader.split(' ')[1], 'base64')
    .toString()
    .split(':');
  var user = auth[0];
  var pass = auth[1];
  if (user == 'admin' && pass == 'password') {
    next(); // authorized
  } else {
    var err = new Error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    next(err);
  }
}

/**
 * Sending https://invalid_login@hostname works fine everywhere except Safari on Mac
 * Reason & Details: https://stackoverflow.com/a/60450491/6106147
 */
function logoutUsingInvalidUser(req, res, next) {
  var randomUser = new Date().getTime();
  var url = `http://${randomUser}@localhost:${port}`;
  res.setHeader('WWW-Authenticate', 'Basic');
  res.send(url);
}

/**
 * Didn't work!
 * Ref: https://stackoverflow.com/a/57943574/6106147
 */
function logoutByClearSiteData(req, res, next) {
  res.setHeader('WWW-Authenticate', 'Basic');
  res.setHeader('Clear-Site-Data', '*');
  res.send(logoutPage());
}

function welcomePage() {
  return `<p>Hello World</p><a href='http://localhost:${port}/logout'>Logout</a>`;
}

function logoutPage() {
  return `<p>Logged out</p><a href='http://localhost:${port}/'>Login again</a>`;
}

app.use(cookieParser());

app.use(auth);

app.get('/', (req, res) => res.send(welcomePage()));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
