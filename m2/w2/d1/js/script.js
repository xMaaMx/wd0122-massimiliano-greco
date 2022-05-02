let next = document.querySelector('#next')
next.addEventListener('click',function(){
    window.history.forward()
})


let prev = document.querySelector('#prev')
next.addEventListener('click',function(){
    window.history.back()
})

history.pushState({},'', '#card1')