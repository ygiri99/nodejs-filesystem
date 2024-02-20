const express = require("express");

const router = express.Router();
const fs = require('fs');

//Retrieveing all files in folder File
router.get('/',(req,res) => {
    // const folderName = req.body.folderName;
     fs.readdir(`./File-folder`,(err, data) => {
        if (err) throw err;
        res.send(data);
      });
})
//Creating file with name date and time
router.post('/',(req,res) => {
    const folderName = req.body.folderName;     
    let data =String( new Date().getTime());   //Time stamp for file data
    let dir = `./${folderName}`;                  

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);                          //creating folder(directory)
}

//Function to creating date and time in string format for file name

const fileName = () => {
let date = new Date(Date.now());
let year = date.getFullYear();
let month = date.getMonth() + 1;      // "+ 1" becouse the 1st month is 0
let day = date.getDate();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
data =  hour+ ':'+ minutes+ ':'+ seconds;
let seedatetime1 = day+'-'+ month+ '-'+ year+ '_'+ hour+ '-'+ minutes+ '-'+ seconds;
let seedatetime =String( seedatetime1);
    
  return `./${dir}/`+seedatetime+ ".txt";}
   
   //Writting timestamp to the file

    fs.writeFile(fileName(),data,(err) => {
        if(err){
        return res.send({"Error:":err});}
        else
        res.send({"successfully written file":fileName().slice(16,38),data,"folder":dir});
})

})

module.exports = router;