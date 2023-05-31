const fs=require('fs')

// *reading files*

// fs.readFile('./docs/blog1.txt',(err,data)=>{//an async fn
//     if(err) console.log(err);
//     console.log(data.toString());
// })
// console.log('last line');


// *writing files*

//  fs.writeFile('./docs/blog1.txt','hello world',()=>{//it re-writes the file content as 'hello world'
//     console.log('file was written');
//  })
//  fs.writeFile('./docs/blog2.txt','hello gain',()=>{//if file doesn't exist it creates one
//     console.log('file was written');
//  })


//  *directories*

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{//if file alreaddy exists it gives an error
//         if(err) console.log(err);
        
//         console.log('folder created');
//     })
// }
// else{
//     fs.rmdir('./assets',(err)=>{
//         if(err) console.log(err);

//         console.log('folder deleted');
//     })
// }

// *deleting files*

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err) console.log(err);
        console.log('file deleted');
    })
}
