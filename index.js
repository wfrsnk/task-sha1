import express from 'express';

const PORT = process.env.PORT || 80;
const app = express();

app
    .set("view engine", "ejs")
    .set("views", "views")
    .all('/', (req, res) => {
        res.render('./index', {value:''});
    })
    
app.listen(PORT, () => {
    console.log('Server has been started...');
})