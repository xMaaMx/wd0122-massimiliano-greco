async function call() {
    const url = 'https://628f5a210e69410599dadd9d.mockapi.io/api/v1/users'

    let response = await fetch(url)

    /**
     * let all = Promise.All([
     *      fetch(urlUtenti),
     *      fetch(urlIndirizzi),
     *      fetch(urlnumeritelefono), 
     *  ])
     */

    let json = await response.json()

    console.log(json);

    let {avatar, name} = json

    console.log(avatar,name);
    
    
    
}

call()