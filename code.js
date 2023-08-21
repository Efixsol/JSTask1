var a= prompt("Enter any digit");
var opt= prompt("Enter any + - x % operator");
var b= prompt("Enter any digit");
var add= parseFloat(a) + parseFloat (b);
var sub=parseFloat(a) - parseFloat (b);
var mul=parseFloat(a) * parseFloat (b);;
var div=parseFloat(a) / parseFloat (b);

switch (opt) {
    case '+':
        console.log(`The sum of two values: ${add}`);
        document.write `The answer is ${add}`;
        break;
    case '-':
                console.log(`The sum of two values: ${sub}`);
                document.write `The answer is ${sub}`;
                break;
     case '*':
                    console.log(`The sum of two values: ${mul}`);
                    document.write `The answer is ${mul}`;
                    break;
    case '/':
                        console.log(`The sum of two values: ${div}`);
                        document.write `The answer is ${div}`;
                        break;
    default:
        console.log(`You have entered invalid operator`);
        break;
}