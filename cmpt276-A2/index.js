const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5050

const { Pool } = require('pg');
var pool;
pool = new Pool({
  connectionString: process.env.DATABASE_URL
});


var app=express()
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  var tokiCreationQuery = `CREATE TABLE IF NOT EXISTS public.tokimon (tid serial, name varchar(20), height int, weight int, flying int, fighting int, fire int, water int, electric int, ice int, total int, trainername varchar(20))`
  pool.query(tokiCreationQuery, (error, result) => {
  });
  console.log(tokiCreationQuery)
  res.render('pages/cover.ejs')
});

app.get('/official', (req, res) => {
  // var getUsersQuery = `SELECT * FROM tokimon`;
  // pool.query(getUsersQuery, (error, result) => {
  //     if (error)
  //         res.end(error);
  //     var results = {'rows': result.rows };
      res.render('pages/official.ejs');
  // });
});

app.get('/add',(req,res) =>{
  res.render('pages/add.ejs');
})

// app.get('/official/:tid', (req,res) => {
//   req.params.tid 
//   var tokiIDQuery = `SELECT * FROM tokimons WHERE tid=${req.params.tid}`;
//   pool.query(tokiIDQuery, (error, result) => {
//       if (error)
//           res.end(error);
//       var results = {'rows': result.rows };
//       res.render('pages/official.ejs', results)
//   });
// });



app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

