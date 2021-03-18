const exp = require("express")
const app = exp();

require("dotenv").config();

const axios = require("axios")

// hadlebars
const exphb = require("express-handlebars");

// config handlebars
app.engine('handlebars',exphb());
app.set('view engine','handlebars');


// for test handlebar-------------SAMPLE
app.get("/test",(req,res)=>{
    res.render('test',{testdata:{message:"Welcome to handlebars",wish:"All the best"}})
})


// -------------------------------------------------------REQUESTS------------------------
// --------------------------------------------------------USERS-----------------------
// for users handlebar
const url ="https://jsonplaceholder.typicode.com/todos"
app.get("/users",async(req,res)=>{
    // get data 
    let receivedata = await axios.get(url);
// extract data from above
    let datafromurl = receivedata.data;
    // res.send({message:datafromurl})
    res.render('users',{usersdata:datafromurl})
})

// ---------------------------------------------------------POSTS-----------------------
// for posts handlebar
const url1 = "https://jsonplaceholder.typicode.com/posts"
app.get("/posts",async(req,res)=>{
    // get data 
    let receivedatafromposts = await axios.get(url1);
    // extract data from above
    let extractedatafromposts = receivedatafromposts.data;
    res.render('posts',{postsdata:extractedatafromposts})
})

// ------------------------------------------------------------COMMENTS---------------
// for comments
const url2 ="https://jsonplaceholder.typicode.com/comments"
app.get("/comments",async(req,res)=>{
     // get data 
    let receivedfromcomments =  await axios.get(url2);
     // extract data from above
     let extractedatafromcomments = receivedfromcomments.data;
     res.render('comments',{commentsdata:extractedatafromcomments})
})

// --------------------------------------------------------------ALBUMS------------------
// for albums
let url3= "https://jsonplaceholder.typicode.com/albums"
app.get("/albums",async(req,res)=>{
    // get data
    let datafromalbums = await axios.get(url3)
    // extract data from above
   let extractedatafromalbums = datafromalbums.data;
   res.render('albums',{albumsdata:extractedatafromalbums})

})

// ----------------------------------------------------------------PHOTOS--------------------
// for photos
const url4="https://jsonplaceholder.typicode.com/photos"
app.get("/photos",async(req,res)=>{
    // get data
    let dataextractedfromphotos = await axios.get(url4)
    // extract data from above
    let extractedatafromphotos = dataextractedfromphotos.data;
    res.render('photos',{photosdata:extractedatafromphotos})
})












// port number
const port = process.env.PORT
app.listen(port,()=>console.log("server on port "+port))

// app.listen(port, () => console.log(`server on port ${port}`))