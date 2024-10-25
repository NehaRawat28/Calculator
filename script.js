//To do: Make M+ M- and MC functional
let string = "";
let button = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addeventListner('click', (e)=>{
        if(e.target.innertHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
         else if(e.target.innertHTML == 'C'){
            string = ""
            document.querySelector('input').value = string;
        }
        else{

        
        console.log(e.target)
        string= string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })


})