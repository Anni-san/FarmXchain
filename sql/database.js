const { create } = require('domain');
const {
  createPool
} =require('mysql');
const pool = createPool({
  host: 'localhost',
  user ="root",
  password: '',
  database: 'test',
  connectionLimit: 10
});
pool.query(`selct * from  registration` ,(err, res,fields)=>{
  if(err){
    console.log(err);
  }
  return console.log(result);
});