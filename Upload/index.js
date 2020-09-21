const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path')



app.set('view engine','ejs');
app.use('/public', express.static('public'));

const storage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        cb(null, file.originalname + Date.now() + path.extname(file.originalname));
        
    }
    
})


const upload = multer({storage});

app.get('/',(req, res) => {
    res.render("index");
})

app.post('/upload',upload.single('arquivo'),(req, res) => {
    res.render("arquivoreceb")
    nome = req.file.originalname
    console.log(nome) 
});


app.listen(8080,() =>{
    console.log('servidor rodando');
});
  
