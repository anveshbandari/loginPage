/*http://localhost:8080/api/connect?Username=hemanth&Password=123*/


/*
const express = require('express');
const pg = require('pg');

const app = express();
const port = 8080;

// PostgreSQL database configuration
const dbConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'connect',
    password: 'A262626a',
    port: 5432,
};

// PostgreSQL client instance
const client = new pg.Client(dbConfig);

// Connect to the PostgreSQL database
client.connect((err) => {
    if (err) {
        console.error('Error connecting to PostgreSQL database:', err);
    } else {
        console.log('Connected to PostgreSQL database');
    }
});

// Serve the login form
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Login Page</title>
            </head>
            <body>
                <h1>Login Page</h1>
                <form method="get" action="/api/connect">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="Username" value=""><br><br>
                    <label for="{password}">Password:</label>
                    <input type="password" id="password" name="Password" value=""><br><br>
                    <button type="submit">Login</button>
                </form>
            </body>
        </html>
    `);
});

// Handle the connect request
app.get('/api/connect', (req, res) => {
    const username = req.query.Username;
    const password = req.query.Password;

    // Query the PostgreSQL database for the user
    const query = {
        text: 'SELECT id FROM users WHERE username = $1 AND password = $2',
        values: [username, password],
    };

    client.query(query, (err, result) => {
        if (err) {
            console.error('Error querying the database:', err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.rows.length > 0) {
                // User is authenticated
                res.send(`
                    <!DOCTYPE html>
                    <html>
                        <head>
                            <title>Login Successful</title>
                        </head>
                        <body>
                            <h1>Login Successful!</h1>
                        </body>
                    </html>
                `);
            } else {
                // User is not authenticated
                res.status(401).send('Unauthorized');
            }
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


*/



/*

const express = require('express');
const pg = require('pg');

const app = express();
const port = 8080;

// PostgreSQL database configuration
const dbConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'connect',
    password: 'A262626a',
    port: 5432,
};

// PostgreSQL client instance
const client = new pg.Client(dbConfig);

// Connect to the PostgreSQL database
client.connect((err) => {
    if (err) {
        console.error('Error connecting to PostgreSQL database:', err);
    } else {
        console.log('Connected to PostgreSQL database');
    }
});

// Serve the login form
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Login Page</title>
            </head>
            <body>
                <h1>Login Page</h1>
                <form method="get" action="/api/connect">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="Username"><br><br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="Password"><br><br>
                    <button type="submit">Login</button>
                </form>
            </body>
        </html>
    `);
});

// Handle the connect request
app.get('/api/connect', (req, res) => {
    const username = req.query.Username;
    const password = req.query.Password;

    // Query the PostgreSQL database for the user
    const query = {
        text: 'SELECT id FROM users WHERE username = $1 AND password = $2',
        values: [username, password],
    };

    client.query(query, (err, result) => {
        if (err) {
            console.error('Error querying the database:', err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.rows.length > 0) {
                // User is authenticated
                res.send(`
                    <!DOCTYPE html>
                    <html>
                        <head>
                            <title>Login Successful</title>
                        </head>
                        <body>
                            <h1>Login Successful!</h1>
                        </body>
                    </html>
                `);
            } else {
                // User is not authenticated
                res.status(401).send('Unauthorized');
            }
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
/*

const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL connection configuration
const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'connect',
  password: 'A262626a',
  port: 5432,
};

// Create a PostgreSQL connection pool
const pool = new Pool(dbConfig);

// Set up middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the login page
app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <label>Username:</label>
      <input type="text" name="username"><br>
      <label>Password:</label>
      <input type="password" name="password"><br>
      <input type="submit" value="Log in">
    </form>
  `);
});

// Handle form submission and authenticate the user
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Query the users table for the given username and password
  const query = `SELECT * FROM users WHERE username=$1 AND password=$2`;
  const values = [username, password];
  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Failed to query the users table', err);
      res.status(500).send('Internal server error');
    } else {
      if (result.rowCount === 1) {
        res.send(`Welcome, ${username}!`);
      } else {
        res.send('Invalid username or password');
      }
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
*/

/*
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/login') {
    const username = parsedUrl.query.username || '';
    const password = parsedUrl.query.password || '';

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Login</title>
        </head>
        <body>
          <form action="/login" method="get">
            <label>Username:</label>
            <input type="text" name="username" placeholder="${username}">
            <br>
            <label>Password:</label>
            <input type="password" name="password" placeholder="${password}">
          </form>
        </body>
      </html>
    `);

    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Page not found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
*/

// const http = require('http');
// const url = require('url');
// const { Pool } = require('pg');

// const dbConfig = {
//   user: 'postgres',
//   host: 'localhost',
//   database: 'connect',
//   password: 'A262626a',
//   port: 5432,
// };

// const pool = new Pool(dbConfig);

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);

//   if (parsedUrl.pathname === '/login') {
//     const username = parsedUrl.query.username || '';
//     const password = parsedUrl.query.password || '';

//     res.writeHead(200, { 'Content-Type': 'text/html' });
// res.write(`
//   <!DOCTYPE html>
//   <html>
//   <head>
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <style>
//       body {font-family: Arial, Helvetica, sans-serif;}
//       form {border: 3px solid #f1f1f1;}

//       input[type=text], input[type=password] {
//         width: 100%;
//         padding: 12px 20px;
//         margin: 8px 0;
//         display: inline-block;
//         border: 1px solid #ccc;
//         box-sizing: border-box;
//       }

//       button {
//         background-color: #04AA6D;
//         color: white;
//         padding: 14px 20px;
//         margin: 8px 0;
//         border: none;
//         cursor: pointer;
//         width: 100%;
//       }

//       button:hover {
//         opacity: 0.8;
//       }

//       .cancelbtn {
//         width: auto;
//         padding: 10px 18px;
//         background-color: #f44336;
//       }

//       .imgcontainer {
//         text-align: center;
//         margin: 24px 0 12px 0;
//       }

//       img.avatar {
//         width: 40%;
//         border-radius: 50%;
//       }

//       .container {
//         padding: 16px;
//       }

//       span.psw {
//         float: right;
//         padding-top: 16px;
//       }

//       // Change styles for span and cancel button on extra small screens 
//       @media screen and (max-width: 300px) {
//         span.psw {
//           display: block;
//           float: none;
//         }
//         .cancelbtn {
//           width: 100%;
//         }
//       }
//     </style>
//   </head>
//   <body>
//     <h2>Login Form</h2>

//     <form action="/login" method="get">
//       <div class="imgcontainer">
//         <img src="https://res.cloudinary.com/dvjydlyjs/image/upload/v1676957167/profile_ppzv7e.png" alt="Avatar" class="avatar">
//       </div>

//       <div class="container">
//         <label for="username"><b>Username</b></label>
//         <input type="text" placeholder="Enter Username" name="username" value="${username}" required>

//         <label for="password"><b>Password</b></label>
//         <input type="password" placeholder="Enter Password" name="password" value="${password}" required>

//         <button type="submit">Login</button>
//         <label>
//           <input type="checkbox" checked="checked" name="remember"> Remember me
//         </label>
//       </div>

//       <div class="container" style="background-color:#f1f1f1">
//         <button type="button" class="cancelbtn">Cancel</button>
//         <span class="psw">Forgot <a href="#">password?</a></span>
//       </div>
//     </form>

//   </body>
//   </html>
// `);

// res.end();

//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.write('Page not found');
//     res.end();
//   }
// });

// pool.connect((err) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack);
//   }
//   console.log('Connected to database');

//   server.listen(3000, () => {
//     console.log('Server listening on port 3000');
//   });
// });

/*
const http = require('http');
const url = require('url');
const { Pool } = require('pg');

const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'connect',
  password: 'A262626a',
  port: 5432,
};

const pool = new Pool(dbConfig);

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/login') {
    const username = parsedUrl.query.username || '';
    const password = parsedUrl.query.password || '';

    
    const content = `
      <html>
        <head>
          <title>Login</title>
        </head>
        <body>
          <form action="/login" method="get">
            <label>Username:</label>
            <input type="text" name="username" value="${username}">
            <br>
            <label>Password:</label>
            <input type="password" name="password" value="${password}">
          </form>
        </body>
      </html>
    `;
    const query = {
      text: 'INSERT INTO connect (name, content) VALUES ($1, $2)',
      values: ['login', content],
    };
    pool.query(query, (err, result) => {
      if (err) {
        console.error('Error executing query', err.stack);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal Server Error');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(content);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Page not found');
    res.end();
  }
});

pool.connect((err) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to database');

  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
});
*/
/*
const http = require('http');
const url = require('url');
const { Pool } = require('pg');

const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'connect',
  password: 'A262626a',
  port: 5432,
};

const pool = new Pool(dbConfig);

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/login') {
    const { username, password } = parsedUrl.query;
    pool.query('SELECT content FROM connect WHERE id = 1', (err, result) => {
      if (err) {
        console.error('Error querying database', err.stack);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal server error');
        res.end();
      } else {
        const content = result.rows[0].content;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(content);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Page not found');
    res.end();
  }
});

pool.connect((err) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to database');

  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
});

*/

/*

const http = require('http');
const url = require('url');
const { Pool } = require('pg');


const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'connect',
  password: 'A262626a',
  port: 5432,
};

const pool = new Pool(dbConfig);

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/login') {
    const username = parsedUrl.query.username || '';
    const password = parsedUrl.query.password || '';
    
    
    

    const query = parsedUrl.query;
    const contentId = query.contentId || 1;
    pool.query(`SELECT content FROM connect WHERE id = ${contentId}`, (err, result) => {
      if (err) {
        console.error('Error querying database', err.stack);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal server error');
        res.end();
      } else {
        const content = result.rows[0].content;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        const modifiedHtmlCode = content.replace('value=${username}', `value=${username}`)
                                        .replace('value=${password}', `value=${password}`);
        res.write(modifiedHtmlCode);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Page not found');
    res.end();
  }
});

pool.connect((err) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to database');

  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
});

*/

// else {
//         const htmlCode = result.rows[0].content;

//         const modifiedHtmlCode = htmlCode.replace('value="username"', `value=" ${username"`)
//                                          .replace('value="password"', `value=" ${password}"`);

//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.write(modifiedHtmlCode);
//       res.end();
//       }
//     });


/* css code

const http = require('http');
const url = require('url');
const { Pool } = require('pg');
const puppeteer = require('puppeteer');

const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'connect',
  password: 'A262626a',
  port: 5432,
};

const pool = new Pool(dbConfig);

(async () => {
  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/login') {
      const username = parsedUrl.query.username || '';
      const password = parsedUrl.query.password || '';
      const query = parsedUrl.query;
      const contentId = query.contentId || 2;
      pool.query(`SELECT content FROM connect WHERE id = ${contentId}`, async (err, result) => {
        if (err) {
          console.error('Error querying database', err.stack);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.write('Internal server error');
          res.end();
        } else {
          const content = result.rows[0].content;
          // const modifiedHtmlCode = content.replace('${username}', username).replace('${password}', password);
          // res.writeHead(200, { 'Content-Type': 'text/html' });
          const modifiedHtmlCode = content.replace('value=${username}', `value=${username}`)
            .replace('value=${password}', `value=${password}`);

          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.setContent(content);
          var pdfBuffer = await page.pdf({ format: 'A4', printBackground: true});

          

          // Set the content type header for the PDF attachment
          res.setHeader('Content-Type', 'application/pdf');

          // Set the content-disposition header to indicate that the response should be downloaded as a file
          res.setHeader('Content-Disposition', `attachment; filename=${contentId}.pdf`);

          // res.setHeader('Content-Type', 'text/html');

          // res.write(modifiedHtmlCode);
          res.write(pdfBuffer);
          res.end()
          page.close();
        }
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('Page not found');
      res.end();
    }
  });

  pool.connect((err) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    console.log('Connected to database');

    server.listen(3000, () => {
      console.log('Server listening on port 3000');
    });
  });
})();
*/



/* only updating 
const http = require('http');
const url = require('url');
const { Pool } = require('pg');
const puppeteer = require('puppeteer');

const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'connect',
  password: 'A262626a',
  port: 5432,
};

const pool = new Pool(dbConfig);

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/login') {
    const username = parsedUrl.query.username || '';
    const password = parsedUrl.query.password || '';
    const query = parsedUrl.query;
    const contentId = query.contentId || 1;
    pool.query(`SELECT content FROM connect WHERE id = ${contentId}`, (err, result) => {
      if (err) {
        console.error('Error querying database', err.stack);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal server error');
        res.end();
      } else  {
        const content = result.rows[0].content;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const modifiedHtmlCode = content.replace('value=${username}', `value=${username}`)
                                        .replace('value=${password}', `value=${password}`);
        res.write(modifiedHtmlCode);

       
      



        (async () => {
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.setContent(content.replace('${username}', username).replace('${password}', password));
          const pdfBuffer = await page.pdf({ format: 'A4' });
          await browser.close();

          res.writeHead(200, {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename=${contentId}.pdf`
          });
          res.end(pdfBuffer);
        })();
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Page not found');
    res.end();
  }
});

pool.connect((err) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to database');

  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
});
*/


/*
const http = require('http');
const url = require('url');
const { Pool } = require('pg');
const puppeteer = require('puppeteer');

const dbConfig = {
 user: 'postgres',
 host: 'localhost',
 database: 'connect',
 password: 'A262626a',
 port: 5432,
};

const pool = new Pool(dbConfig);

const server = http.createServer((req, res) => {
 const parsedUrl = url.parse(req.url, true);

 if (parsedUrl.pathname === '/login') {
   const username = parsedUrl.query.username || '';
   const password = parsedUrl.query.password || '';
   const query = parsedUrl.query;
   const contentId = query.contentId || 1;
   pool.query(`SELECT content FROM connect WHERE id = ${contentId}`, (err, result) => {
     if (err) {
       console.error('Error querying database', err.stack);
       res.writeHead(500, { 'Content-Type': 'text/plain' });
       res.write('Internal server error');
       res.end();
     } else {
       const content = result.rows[0].content;
       const modifiedHtmlCode = content.replace('${username}', username).replace('${password}', password);

       (async () => {
         const browser = await puppeteer.launch();
         const page = await browser.newPage();
         await page.setContent(modifiedHtmlCode);

         // Take a screenshot of the modified HTML for reference
         const screenshotBuffer = await page.screenshot({ fullPage: true });
         res.writeHead(200, { 'Content-Type': 'image/png' });
         res.end(screenshotBuffer);

         // Generate a PDF of the modified HTML for download
         const pdfBuffer = await page.pdf({ format: 'A4' });
         await browser.close();

         res.writeHead(200, {
           'Content-Type': 'application/pdf',
           'Content-Disposition': `attachment; filename=${contentId}.pdf`
         });
         res.end(pdfBuffer);
       })();
     }
   });
 } else {
   res.writeHead(404, { 'Content-Type': 'text/plain' });
   res.write('Page not found');
   res.end();
 }
});

pool.connect((err) => {
 if (err) {
   return console.error('Error acquiring client', err.stack);
 }
 console.log('Connected to database');

 server.listen(3000, () => {
   console.log('Server listening on port 3000');
 });
});
*/


/*
const http = require('http');
const url = require('url');
const { Pool } = require('pg');
const HCCrawler = require('headless-chrome-crawler');
const RedisCache = require('headless-chrome-crawler/cache/redis');

const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'connect',
  password: 'A262626a',
  port: 5432,
};

const pool = new Pool(dbConfig);

(async () => {
  const crawler = await HCCrawler.launch({
    cache: new RedisCache({
      host: 'localhost',
      port: 6379,
    }),
  });

  const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/login') {
      const username = parsedUrl.query.username || '';
      const password = parsedUrl.query.password || '';
      const query = parsedUrl.query;
      const contentId = query.contentId || 1;

      pool.query(`SELECT content FROM connect WHERE id = ${contentId}`, async (err, result) => {
        if (err) {
          console.error('Error querying database', err.stack);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.write('Internal server error');
          res.end();
        } else {
          const content = result.rows[0].content;
          const modifiedHtmlCode = content.replace('${username}', username).replace('${password}', password);

          await crawler.queue({
            url: `data:text/html,${modifiedHtmlCode}`,
            onResponse: async (response) => {
              const html = await response.text();
              const pdfBuffer = await response.pdf({ format: 'A4' });

              res.writeHead(200, {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename=${contentId}.pdf`,
              });
              res.end(pdfBuffer);

              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.write(html);
              res.end();

              await response.close();
            },
          });
        }
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('Page not found');
      res.end();
    }
  });

  pool.connect((err) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    console.log('Connected to database');

    server.listen(3000, () => {
      console.log('Server listening on port 3000');
    });
  });
})();
*/


const http = require('http');
const url = require('url');
const { Pool } = require('pg');
const puppeteer = require('puppeteer');

const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'connect',
  password: 'A262626a',
  port: 5432,
};

const pool = new Pool(dbConfig);

(async () => {
  const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/login') {
      const username = parsedUrl.query.username || '';
      const password = parsedUrl.query.password || '';
      const query = parsedUrl.query;
      const contentId = query.contentId || 2;
      pool.query(`SELECT content FROM connect WHERE id = ${contentId}`, async (err, result) => {
        if (err) {
          console.error('Error querying database', err.stack);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.write('Internal server error');
          res.end();
        } else {
          const content = result.rows[0].content;
          const modifiedHtmlCode = content.replace('${username}', username).replace('${password}', password);

          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.setContent(modifiedHtmlCode);
          const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });

          // Set the content type header for the PDF attachment
          res.setHeader('Content-Type', 'application/pdf');

          // Set the content-disposition header to indicate that the response should be downloaded as a file
          res.setHeader('Content-Disposition', `attachment; filename=${contentId}.pdf`);

          res.write(pdfBuffer);
          res.end();

          await browser.close();
        }
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('Page not found');
      res.end();
    }
  });

  pool.connect((err) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    console.log('Connected to database');

    server.listen(3000, () => {
      console.log('Server listening on port 3000');
    });
  });
})();
