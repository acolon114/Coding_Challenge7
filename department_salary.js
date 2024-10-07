// Task 1: Create a Department Structure

const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                name: 'Charlie',
                                salary: 60000,
                                subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};

// Task 2: Create a Recursive Function to Calculate Total Salafunction calculateDepartmentSalary()ry for a Department

function calculateDepartmentSalary(department) { 
    let totalSalary = 0
    
    // Helper funtion to recursively calculate employee salaries
    function calculateEmployeeSalary(employee) { 
        totalSalary += employee.salary;

        // Checks to see if employee has subordinates
        if (employee.subordinates.length !== 0) { 
            for (const subordinate of employee.subordinates) {
                calculateEmployeeSalary(subordinate);
            }
        }
    }

    for (const employee of department.employees) {
        calculateEmployeeSalary(employee);
    }
    return totalSalary;
}

const departmentSalary1 = calculateDepartmentSalary(company.departments[0]); // Engineering Dept.
const departmentSalary2 = calculateDepartmentSalary(company.departments[1]); // Sales Dept.
console.log("Engineering Department Total Salary: $" + departmentSalary1 + "\n" + "Sales Department Total Salary: $" + departmentSalary2); // Output: Engineering Department Total Salary: $330000 & Sales Department Total Salary: $250000

// Task 3: Create a Function to Calculate the Total Salary for All Departments

function calculateCompanySalary(company) {
    let totalSalary = 0
    for (const department of company.departments) { // Iterates through departments
        totalSalary += calculateDepartmentSalary(department); 
    }

    return totalSalary;
}

const companySalary = calculateCompanySalary(company);
console.log("Total Salary from both Departments: $" + companySalary); // Output: Total Salary from both Departments: $580000