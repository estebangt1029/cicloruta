moto=document.getElementById('moto')
enviar=document.getElementById('enviar')
cancelar=document.getElementById('cancelar')
robo=document.getElementById('robo')


containermodalmoto=document.querySelector('.containermodalmoto')
containermodalrobo=document.querySelector('.containermodalrobo')


moto.addEventListener('click',()=>{
    containermodalmoto.style.top=0
    containermodalmoto.style.position='fixed'

})
robo.addEventListener('click',()=>{
    containermodalrobo.style.top=0
    containermodalrobo.style.position='fixed'
})




enviarmoto=document.getElementById('enviarmoto')
cancelarmoto=document.getElementById('cancelarmoto')
enviarrobo=document.getElementById('enviarrobo')
cancelarrobo=document.getElementById('cancelarrobo')


enviarmoto.addEventListener('click',()=>{
    containermodalmoto.style.top='-1000vh'
    
})
cancelarmoto.addEventListener('click',()=>{
    containermodalmoto.style.top='-1000vh'
})
enviarrobo.addEventListener('click',()=>{
    containermodalrobo.style.top='-1000vh'
    
})
cancelarrobo.addEventListener('click',()=>{
    containermodalrobo.style.top='-1000vh'
})