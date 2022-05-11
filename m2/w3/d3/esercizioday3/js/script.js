fetch("json/lista.json")
.then(res => {
    if(res.ok)
    console.log('ok');
    return res.json()

}).then(ciao => {

    console.log(ciao)

    ciao.discografia.forEach(e => {
        console.log(e.year);
    })
})

///



