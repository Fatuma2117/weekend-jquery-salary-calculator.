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
    // $('.deleteButton').on('click', addDeleteButton)
    // addDeleteButton();


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

    $('#tableBody').append(`<tr>
    <td> ${inputs.firstInput}</td>
    <td>${inputs.lastInput} </td>
    <td> ${inputs.idInput}</td>
    <td> ${inputs.titleInput}</td>
    <td> ${inputs.annualInput}</td>
    </tr>`,`<td><button class= "deleteButton"> Delete </button></td>`);


    $("#firstNameInput").val('');
    $("#lastNameInput").val('');
    $("#idInput").val('');
    $("#titleInput").val('');
    $("#annualInput").val('');

    calculateTotalMonthly();
    // addDeleteButton();
console.log($('.deleteButton'))
}

function calculateTotalMonthly() {
    // the total monthly costs of $("#annualInput").
    let monthlyTotal = 0;
    // loop through addNewEmployee
    for (let i = 0; i < employee.length; i++) {
        //for each employee, add up total annual/12
       monthlyTotal += Number(employee[i].annualInput/12)
       if(monthlyTotal > 20000) { 
        $("#totalMonthlyOut").addClass('overBudget')
       }
    }
// console.log(monthlyTotal)    // display calculateTotalMonthly
let outPut = $('#totalMonthlyOut')
outPut.empty();
outPut.append(Number(monthlyTotal))


}

// function addDeleteButton(){
// $('.deleteButton').closest('tr').remove()
// $('this').remove(addNewEmployee)
// }



