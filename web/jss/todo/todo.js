const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')




btn.addEventListener('click',(e)=>{
    console.log(input.value)
    if(input.value=='') return;
    createDeleteElements(input.value);
    input.value = '';
}
)





function createDeleteElements(value){
    console.log(value)
    
    

    const li =  document.createElement('li')
    li.className = 'li'
    li.textContent = value 

    const inpu = document.createElement('input')
    inpu.id = 'check'
    inpu.type = 'checkbox'
   
    result.appendChild(inpu)
    

    const btn  = document.createElement('button')
    btn.className  = 'btn'
    li.appendChild(btn)

    result.appendChild(li)

    btn.addEventListener('click', (e)=>  {
        result.removeChild(li)
        result.removeChild(inpu)

    })
    

    
    const inpu1 = document.querySelector('#check')
    if(inpu1){
        inpu1.addEventListener('change', function(){
            
           if(this.checked) {
               li.className = 'li1'
           }
           
        })
    }
}








