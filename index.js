// Write your solution in this file!
//declare customername variable in globalscope
var customerName="bob";

//modify customername to uppercase
function upperCaseCustomerName(){
  customerName=customerName.toUpperCase()
  console.log(customerName);
}

// declaring a variable in global scope from inside a function 

function setBestCustomer(){
    console.log(bestCustomer="not bob");
}

//function tries to changes the best customer variable
function overwriteBestCustomer(){
    console.log(bestCustomer="maybe bob");
}
//declaring a const in global scope,assign initial value.
//function to try to change const
const LeastFavoriteCustomer="Wanjira"
function changeLeastFavoriteCustomer(){
    console.log(LeastFavoriteCustomer="Linda")
}