$(document).ready(readyNow)
let employee = []
////Psuedo Code!! 
//input form should collect data✅
// add information for submit button ✅
// append inputs to DOM✅
// store the input information ✅
// clear input fields✅
// calculate monthly costs✅
// if monthly costs> 20000 return red background ✅
// create delete button and append to dom
// click delete button works 


function readyNow() {
    $('#submitEmployee').on('click', addNewEmployee)
    // addDeleteButton();
    $(document).on('click','.deleteButton',addDeleteButton)
}
function addNewEmployee() {
    // console.log('working?') 
    let inputs = {
        firstInput: $("#firstNameInput").val(),
        lastInput: $("#lastNameInput").val(),
        idInput: $("#idInput").val(),
        titleInput: $("#titleInput").val(),
        annualInput: $("#annualInput").val()
    }
    employee.push(inputs)
    // console.log(inputs.annualInput)
    let deleteButton = `<td><button class= "deleteButton"> Delete </button></td>`

    $('.tableBody').append(`<tr class ="deleteEmployee">
    <td> ${inputs.firstInput}</td>
    <td>${inputs.lastInput} </td>
    <td> ${inputs.idInput}</td>
    <td> ${inputs.titleInput}</td>
    <td> ${inputs.annualInput}</td>
    <td> ${deleteButton}</td></tr>`);


    $("#firstNameInput").val('');
    $("#lastNameInput").val('');
    $("#idInput").val('');
    $("#titleInput").val('');
    $("#annualInput").val('');

    calculateTotalMonthly();
}

function calculateTotalMonthly() {
    // the total monthly costs of $("#annualInput").
    let monthlyTotal = 0;
    // loop through addNewEmployee
    for (let i = 0; i < employee.length; i++) {
        //for each employee, add up total annual/12
       monthlyTotal += Number(employee[i].annualInput/12)
       if(monthlyTotal >= 20000) { 
        $("#totalMonthlyOut").css('color','red');
        // console.log('conditional is working')
       }
    }
// console.log(monthlyTotal)    // display calculateTotalMonthly
let outPut = $('#totalMonthlyOut')
outPut.empty();
outPut.append(Number(monthlyTotal))
// console.log(monthlyTotal)

}


function addDeleteButton(){
console.log('delete button connected to functions?')
$(this).closest('tr').remove()
}



