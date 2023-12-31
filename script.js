function getinput(){
    let inp=document.getElementById("input").value
    console.log(inp)
}



let d={"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"0":0}

let operator={"plus":"+","minus":"-","multiply":"*","divide":"/","point":"."}
function getvalue(button){
    res=""
    let val=button.value
    // if val is empty rhe ndont append +-*/
    let inp=document.getElementById("input")


    if (inp!=="" && val in operator ){
        if (inp.value.charAt(inp.value.length-1)  in d){
            res+=operator[val]
        }
       
    }
    else if (val in d){
        res+=d[val]
    }
    else if(val==="delete"){
        // last char to be delted until inp lengthgreater 0
        if (inp.value.length>0){
            let temp=inp.value.slice(0,-1)
            inp.value=temp
        }

    }

    else{
        if(val==="reset"){
            inp.value=""
        }
        else{
            
            inp.value=eval(inp.value)
        }

    }

    inp.value+=res
    
    
}

getvalue()

