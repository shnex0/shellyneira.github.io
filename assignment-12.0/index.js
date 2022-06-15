import express from 'express';
import { urlencoded } from 'express';
const app = express();

app.use(urlencoded({extended: true}));

app.get('', (req,res) => {
  res.sendFile(__dirname + '/views/calculator.html');
})

app.post('/', (req,res)=>{
  const n1 = req.body.first;
  const n2 = req.body.second;
  const operation = req.body.operation;

  console.log('Calculation: ' + eval(n1 + operation + n2));
  res.send('Calculation: ' + eval(n1 + operation + n2));

})
app.listen(8080,(res)=>{
  console.log('Listening in port 8080');
})