const express=require('express')
const morgan=require('morgan')
const mongoose=require('mongoose')
const Blog = require('./models/blog');
const mongoDb=require('mongodb');
const { result } = require('lodash');
// express app
const app=express()

// connect to mongoDb
const dbURI='mongodb+srv://ansuman:pocha@nodetuts.gpsv8ri.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{
    app.listen(3000);// listen for requests
})
.catch((err)=>{console.log(err);}) 

// register view engine
app.set('view engine','ejs')

// app.get('/',(req,res)=>{
//     // res.send('<p>home page</p>')
//     res.sendFile('./views/index.html',{root:__dirname})
// })
// app.get('/about',(req,res)=>{
//     // res.send('<p>home page</p>')
//     res.sendFile('./views/about.html',{root:__dirname})
// })

// // redirects
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about')
// })

// *MIDDLEWARE*
// app.use((req,res,next)=>{
//     console.log('new request made:');
//     console.log('host:',req.hostname);
//     console.log('path:',req.path);
//     console.log('method:',req.method);
//     next() //FOR MOVING ON TO NEXT Fn
// })

app.use(morgan('dev'))
// app.use(morgan('tiny'))
app.use(express.static('public'))

// mongoose and mongo sandbox routes
app.get('/add-blog',(req,res)=>{
    const blog=new Blog({
        title:'new blog',
        snippet:'about my blog',
        body:'more about my new blog'
    })

    blog.save()
    .then((result)=> res.send(result))
    .catch((err)=> console.log(err))
})
app.get('all-blogs',(req,res)=>{
    Blog.find()
    .then((result)=>res.send(result))
    .catch((err)=>console.log(err))
})
app.get('/single-blog',(req,res)=>{
    Blog.findById()
})


// routes
app.get('/',(req,res)=>{
    const blogs=[
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ]
    res.render('index',{title:'Home',blogs})
})
// app.use((req,res,next)=>{
//     console.log('next middleware');
//     next()
// })


app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create Blogs'})
})

// 404 page
app.use((req,res)=>{ //use Fn IS USED FOR EVERY REQUEST
    res.status(404).render('404',{title:'404'}) 
})