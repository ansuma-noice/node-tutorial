const http=require('http')
const fs=require('fs')

const _=require('lodash')

const server=http.createServer((req,res)=>{
    // console.log('request made');
    // console.log(req);
    console.log(req.url,req.method);

    // *set header content type*
    // res.setHeader('Content-type','text/plain')
    // res.write('hello,ninjas')
    
    res.setHeader('Content-type','text/html')
    // res.write('<p>hello,ninjas</p>')
    // res.write('<head><link rel="stylesheet" href="#"/></head>')//CAN B PASSED ON
    // res.write('<p>hello again,ninjas</p>')
    // res.end()

    //send an html file
    let path='./views/'

    switch(req.url){
        case '/':
            path+='index.html'
            res.statusCode=200
            break;
        case '/about':
            path+='about.html'
            res.statusCode=200
            break;
        case '/about-m':
            res.statusCode=301
            res.setHeader('location','/about')//redirects to '/about'   page
            res.end()
            break;
        default:
            path+='404.html'
            res.statusCode=404
            break;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end()
        }else{
            // res.write(data)
            // res.end()

            res.end(data)//ALSO 
        }
    }) 

    // lodash
    const num=_.random(0,20)
    console.log(num);

    const greet=_.once(()=>{
        console.log('greet me');
    })
    greet()
    greet()//2nd time it won't work,only works once

})

server.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000');
})

// PRESS ctrl+c TO EXIT LISTENING 