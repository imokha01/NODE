// const http = require("http") //E5 version
// import http form 'http' //E6 version
import { log } from 'console';
import fs from 'fs';
// import { createServer } from 'http';



//TODO: CREATING A SERVER

          const PORT = 8000
          console.log('Program Ended')
          // http.createServer((req, res) => {
          //     //Send the HTTP header
          //     //HTTP Status: 200 0k
          //     //  Content Type:  text/plain
          //     res.writeHead(200, {'Content-Type': 'text/plain'})
          //     res.end("HELLO WORLD")
          // }).listen(PORT)


          console.log(`server is running on http://localhost:${PORT}`) 



//TODO: (A) READING A FILE:

     //TODO  (1) How to read a the content of a file for synchronous function

                    const data1 = fs.readFileSync('input.txt')
                    // console.log(data.toString())

                    //! 0R

                    const data2 = fs.readFileSync('data/text.txt')
                    console.log('sync method:', data2.toString())


     //TODO: (2) How to read the content of a file for asynchronous function

                    fs.readFile('input.txt', (err, data) => {
                         err ? console.log(err.message) : console.log(data.toString());
                    });

                                   //! OR

                    fs.readFile('data/text.txt', (err, data) => {
                         if (err) console.log(err)
                         console.log('async method:', data.toString())
                    })

//TODO (B) OPENING A FILE 

     //TODO: (1) ASYNCHRONOUS METHOD OF OPENING A FILE

                    fs.open('data/text.txt', 'r+', (err, data) => {
                         if (err) console.log('file failed to open', err)
                         console.log('file opened', data);
                    } )


     //TODO:  (2) SYNCHRONOUS METHOD OF OPENING A FILE

                const test =    fs.openSync('data/text.txt', 'rs')
                console.log('file open sync ',test);

     //TODO (3) COMBINING fs.open with fs.read
     
               const  buf = new Buffer.alloc(1024);
                fs.open('data/text.txt', 'r+', (err, data) => {
                         if (err) console.log('file failed to open', err)
                         console.log('file opened', data);

                         fs.read(data, buf, 0, buf.length, 0, (err, bytes) => {
                              if (err) console.log(err);
                              console.log(bytes, 'bytes read');
                              if (bytes > 0){
                                   console.log(buf.slice(0, bytes).toString())
                              }
                         })

                    } )

//TODO:(C) HOW TO CHECK THE STAT OF A FILE OR FOLDER

     fs.stat('data/text.txt', (err, stats) => {
          if(err) console.log(err);
          console.log('is a file?:', stats.isFile());
          console.log('is a folder?:', stats.isDirectory());
          console.log(stats);
     })


//TODO (D) WRITE A FILE

fs.writeFile('gmc.text', 'hello welcome to gomycode', (err) => {
     if(err) console.log(err);
     console.log('file created successfully')

})

   //! OR

   fs.writeFile('gmc.jsx', `const Button = props => {
     return (
       <Button>{props.children}</Button>
     )
   }

   export default Button
   `, (err) => {
     if(err) console.log(err);
     console.log('file created successfully')

})

 //! 0R 

 fs.writeFile('data/app.jsx', `const Button = props => {
     return (
       <Button>{props.children}</Button>
     )
   }

   export default Button
   `, (err) => {
     if(err) console.log(err);
     console.log('file created successfully')

})

//TODO (D) CLOSING A FILE
     /*
          The closing of a file used with the fs.open, fs.read together
     */

          const  buf1 = new Buffer.alloc(1024);
          fs.open('data/text.txt', 'r+', (err, data) => {
                   if (err) console.log('file failed to open 2', err)
                   console.log('file opened 2', data);

                   fs.read(data, buf1, 0, buf.length, 0, (err, bytes) => {
                        if (err) console.log(err);
                        console.log(bytes, 'bytes read 2');

                        if (bytes > 0){
                             console.log(buf1.slice(0, bytes).toString())
                        }

                        fs.close(data, (err) => {
                         if (err) console.log(err);
                         console.log('file close successfully ');
                        })
                   })

              } )

     //TODO: (E) DELETE A FILE
              
              fs.unlink('data/app.jsx', (err) => {
               if (err) console.log(err);
               console.log('file deleted successfully');
              })
     
     //TODO (F) CREATING A DIRECTORY
              
              fs.mkdir('temp', (err) => {
               if(err) console.log(err);
               console.log('folder created')
              })
              


