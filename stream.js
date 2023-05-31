const fs=require ('fs')

const readStream=fs.createReadStream('./docs/blog3.txt',{encoding:'utf8'})//ENCODING,for it to be in a readable format
const writeStream=fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data',(chunk)=>{
//     console.log('---------NEW CHUNK--------');
//     // console.log(chunk.toString());
//     console.log(chunk);//WID EXTRA PARAMETER

//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)
// })



// *piping*
readStream.pipe(writeStream)//WORKS SAME AS ABOVE
 