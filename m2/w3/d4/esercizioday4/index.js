const express = require('express')
const app = express()
const port = 3000

/*fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))*/

  //per recuperare dati dall' HTML
  /*app.get('/', (req,res)=>{
      // res.send('Hello World')
      res.sendFile(__dirname + '/index.html')
   })*/

app.get('/', (req, res) => {
  res.send('Hello Flavio!')
})
app.listen(3000, () => {
  console.log(`Server running at http://127.0.0.1:3000`)
})
app.use("/", function(req, res , next){
    res.render("index.html")
})
 /*     
        let tdNome = document.createElement('td')
        tdNome.innerHTML = utente.name

        let tdCognome = document.createElement('td')
        tdCognome.innerHTML = utente.lastname
        tr.append(tdNome,tdCognome)
*/



