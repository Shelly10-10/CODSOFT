let input= document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');//select all the text written inside the button
let string="";//input string which will store the result
let arr=Array.from(buttons);//form a array of all the elements
arr.forEach(button => {
    button.addEventListener('click',(e)=>{//when we are clicking on that particular button
        if(e.target.innerHTML=='='){//whenever we willclick on equal to the inbuilt function eval will evaluate the entire string
            string= eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){//all clear will clear everything
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=e.target.innerHTML;
            input.value=string;
        }
    })
})