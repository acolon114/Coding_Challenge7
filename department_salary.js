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

//Task 2: Create a Recursive Function to Calculate Total Salafunction calculateDepartmentSalary()ry for a Department

function calculateDepartmentSalary(department) {
    let totalSalary = 0
    
    function calculateEmployeeSalary(employee) {
        totalSalary += employee.salary;

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

const departmentSalary1 = calculateDepartmentSalary(company.departments[0]);
const departmentSalary2 = calculateDepartmentSalary(company.departments[1]);
console.log(departmentSalary1 + "\n" + departmentSalary2);
