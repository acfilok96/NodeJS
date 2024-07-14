const http = require('node:http');
const fs = require('node:fs');
const bodyParser = require('body-parser')


const hostname = '127.0.0.1';
const port = '4000'; 


// Server . . .
const server = http.createServer((req, res) => {

    
    if(req.url === '/'){

        fs.readFile('index.html', (err, data) => {
            if(err){
                console.error("Error: ", err);
                res.writeHead(500);
                res.end('Error loading file . . .');
            }
            else{
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.end(data);
            }
        })
    }
    else if(req.url === '/submit-form' && req.method === 'POST'){
        bodyParser.urlencoded({extended: false})(req, res, () =>{
            
            const name = req.body.name;
            const email = req.body.email;

            const data = `Name: ${name}\nEmail: ${email}\n\n\n`;

            // Write data into file
            fs.appendFile('formData.txt', data, (err) => {
                if(err){
                    console.error(err);
                    res.statusCode = 500;
                    res.end('Errpr saving data');
                    return;
                }
                res.statusCode = 200;
                res.end(`<h1>Name: ${name}<br>Email: ${email}<br><br>Form Data Received & Saved Succesfully !</h1>`);
            })
        })
    }
    else{
        res.statusCode = 400;
        res.end('File Not Found !');
    }
   
});

// Listening . . .
server.listen(port, hostname, (err) => {
    if(err){
        throw console.error(err);
    }
    else{
        console.log(`Server running at http://${hostname}:${port}`);
    }
})