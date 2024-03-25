// Get a reference to the #add-employees-btn element
var addEmployeesBtn = document.querySelector('#add-employees-btn');
//collect employee data
const collectEmployees = function() {
  //TODO: Get user input to create and return an array of employee objects
const employee = [];

  let addEmployee = true;
  while (addEmployee) {
    const firstName = prompt('Enter first name of employee:');
    const lastName = prompt('Enter last name of employee :');
    const salary = parseFloat(prompt('Enter salary of employee:'));

    employee.push({ firstName, lastName, salary });

    addEmployee = confirm('Do you want to add another employee?');
  }

  return employee;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;

  employeesArray.forEach(employee => {
    totalSalary += employee.salary;
  });

  const averageSalary = totalSalary / employeesArray.length;

  console.log('Average Salary: ' + averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  }))
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
var rand = Math.floor(Math.random() * employeesArray.length);
var randEmployee = employeesArray [rand];

console.log('Random Employee:');
console.log(randEmployee);

//display random employee winner on console
console.log(`Congratulations to ${randEmployee.firstName} ${randEmployee.lastName}, our random drawing winner!`);

} 

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button

addEmployeesBtn.addEventListener('click', trackEmployeeData);

