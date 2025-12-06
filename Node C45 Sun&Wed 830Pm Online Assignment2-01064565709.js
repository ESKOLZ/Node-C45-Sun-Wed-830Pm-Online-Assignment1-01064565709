// const fs = require("fs");
// const path = require("path");
//  const os = require("os");
//  const Event = require("events");

1;
/*-----------------*/
//  cosnt = filePath = require('path');
// console.log({file:__filename});
// console.log({path:__dirname});
/*-----------------*/
2;
// console.log( path.basename("D:\\New folder\\main1.js"));
/*-----------------*/
3;
// console.log( path.format({
//   root: 'D:\\',
//   dir: 'D:\\New folder',
//   base: 'main1.js',
//   ext: '.js',
//   name: 'main1'
// }));
/*-----------------*/
4;
// console.log(path.extname("D:\\New folder\\main1.js"));
/*-----------------*/
5;
// console.log(path.parse("D:\\New folder\\main1.js"));
/*-----------------*/
6;
// const path1 = "D:\\New folder\\main1.js";
// console.log(path.isAbsolute(path1));
/*-----------------*/
7;
// const f1="src";
// const f2="components";
// const f3="App.js";
// console.log(path.join(f1,f2,f3));

/*-----------------*/
8;
// const path2 = "./main1.js";
// console.log(path.resolve(path2));
/*-----------------*/
9;
// const p1 = "/folder1";s
// const p2 = "folder2/file.txt";
// console.log(path.join(p1,p2));
/*-----------------*/
10;
//  const ff = path.resolve("./notes.txt");
//  fs.unlinkSync(ff);
/*-----------------*/
11;
// const newFolder = path.resolve("./newFolder");
// if(fs.existsSync(newFolder)==false){
//   fs.mkdirSync(newFolder,log);
// }else{
//   console.log("Folder already exists");
// }
/*-----------------*/
12;
// const eventEmitter = new Event();
// eventEmitter.on("login",(userName)=>{
//   console.log(`User logged in : ${userName}`);
// });
// eventEmitter.emit("login","Ahmed");
/*-----------------*/
13;
// const eventEmitter = new Event();
// eventEmitter.on("start",()=>{
//   console.log("Welcome event triggered!");
// })
// eventEmitter.emit("start");
/*-----------------*/
14;
// const fPath = path.resolve("./data.txt");
// fs.readFile(fPath,encoding="utf-8", (err,data)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log(data);

// })
/*-----------------*/
15;
// const fPath = path.resolve("./async.txt");
// fs.writeFile(fPath, "Async save", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });
/*-----------------*/
16;
// const fPath = path.resolve("./notes.txt");
// console.log(fs.existsSync(fPath));
/*-----------------*/
17;
//  function getInfo(){
//   return {
//     platform: os.platform(),
//     Arch: os.arch(),
//   };
//  }
// console.log(getInfo());
