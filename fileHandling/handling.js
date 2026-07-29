// const fs = require('fs');

//synch wala sirf blocking wala , ek baar mein ek hi thread , execute hoga.
// fs.writeFileSync("./name.txt", "Hey! How are you Akarsh ? \n " );

// fs.appendFileSync("./name.txt", "\nAkarsh : Fine & how are u ?\n");

// fs.copyFileSync('./name.txt', './hello.txt');

// fs.unlinkSync('./hello.txt');

// fs.mkdir('./newFolder/a/b', {recursive : true}, (err) => {
//     if(err) throw err;

// });

// fs.rmdir('./newFolder', {recursive : true}, (err) => {
//     if(err) throw err;
// })


// const stats = fs.statSync('./name.txt');
// console.log(stats);

// const data = fs.readFileSync('./name.txt', 'utf-8');
// console.log(data);


// async

// fs.writeFile('./async.txt', "Hello, how are your ? \n", (err) => {
//     if(err) throw err;
//     console.log("file created");
// });

// fs.appendFile('./async.txt', "Hello ji akarsh\n", (err) => {
//     if(err) throw err;
//     console.log("append done");
// })

// fs.copyFile('./async.txt' , './copy.txt', (err) => {
//     if(err) throw err;
//     console.log("file copied");
// })

// fs.unlink('./copy.txt' , (err) => {
//     if(err) throw err;
//     console.log("deleted");
// })

// fs.readFile('./async.txt', 'utf-8' , (err, data) => {
//        if(err) throw err;
//        console.log(data);
       
// })


// let's do this throw promise for async nature. 

const fs = require('fs').promises;

// async function writefile(){
//     try{
//          await fs.writeFile('./promise.text', "Hello i have done same work through async fun and promise")
        
//     }catch(err){
//         throw err;
//     }

    
// }

// writefile();
    

 // this is iiaf
// (async () => {
//     try{
//           fs.appendFile('./promise.text', "\nappend use \n", );
//           console.log("append succesful");
//     }catch(e){
//         throw e;
//     }
    
// })();

// async function appendfile() {
//     try{
//          await fs.appendFile('./promise.text', " append use\n", );
//           console.log("append succesful");
//     }catch(e){
//         throw e;
//     }
    
// };
// appendfile();
 

// this how it actualy works ........ ............    love u calude , gemini &  youTube,
// today is guru purnima 
