var display = document.getElementById('output');
var button = document.querySelectorAll('button');
for(item of button)
{
    item.addEventListener('click', function calc(e){
        btn_text = e.target.innerText;
        console.log("button text is: ", btn_text);
        if(btn_text == '÷')
        {
            btn_text = '/';
        }
        if(btn_text == '×')
        {
            btn_text = '*';
        }
        if(btn_text == 'π')
        {
            btn_text = 3.141592653;
        }
        if(btn_text == 'e')
        {
            btn_text = 2.718281828;
        }
        if(btn_text == "CE")
        {
            btn_text = "";
            display.value = display.value.substr(0, display.value.length-1);
        }
        if(btn_text == "x!")
        {
            btn_text ="";
            let fact=1;
            for(let i=1;i<=display.value;i++)
            fact*=i;
            display.value = fact;
        }
        if(btn_text == 'sin')
        {
            btn_text = "";
            display.value = Math.sin(display.value);
        }
        if(btn_text == 'cos')
        {
            btn_text = "";
            display.value = Math.cos(display.value);
        }
        if(btn_text == 'tan')
        {
            btn_text = "";
            display.value = Math.tan(display.value);
        }
        if(btn_text == '√')
        {
            btn_text = "";
            display.value = Math.sqrt(display.value, 2);
        }
        if(btn_text == "x²")
        {
            btn_text = "";
            display.value = Math.pow(display.value, 2);
        }
        if(btn_text == 'ln')
        {
            btn_text = "";
            display.value = Math.ln(display.value);
        }
        if(btn_text == '=')
        {
            btn_text = "";
            display.value = eval(display.value);
        }
        display.value += btn_text;
        if(btn_text == "AC")
        {
            display.value = "";
        }
    })
}