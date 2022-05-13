
const APPURL = 'users.json'

let tabella = document.querySelector('#utenti')

fetch(APPURL)
.then(res => res.json())
.then(res => {

    console.log(res);

    let campiVisualizzati = ['user','nome','cognome','sesso','foto','email']
    
    let trH = document.createElement('tr')
    for(campo of campiVisualizzati){
        let th = document.createElement('th')
        th.innerHTML = campo
        trH.append(th)
    }
    tabella.append(trH)
    

    for(let utente of res){
        
        let tr = document.createElement('tr')

       
        
        for(let prop in utente){
            
            if(campiVisualizzati.includes(prop)){
                
                let key = prop;
                let value = utente[prop];
                
                let td = document.createElement('td')
                td.innerHTML = value
                
                
                tr.append(td)
            }
        }
        
        let tdAzioni = document.createElement('td')
        
        let btnContattami = document.createElement('button')
        btnContattami.innerHTML = 'Contattami'
        
        btnContattami.addEventListener('click',function(){
            window.open("touch.html")
            
        })
        
        
    
        tdAzioni.append(btnContattami)


        tr.append(tdAzioni)
        
       
       tabella.append(tr)

        
    }

})

