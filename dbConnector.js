const Pool = require('pg').Pool
const pool = new Pool({
    host: 'localhost',
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "postgres"
})

const getEmployees = (request, response) => {
    pool.query('select * from employee', (error, results) => {
        if (error) {
            console.log(error.message);
        }
        response.status(200).json(results.rows)
    })
}

const getEmpById = (request, response) => {
    const id = parseInt(request.params.roll)

    pool.query('SELECT * FROM employee WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getEmpByAge = (request, response) => {
    const age = parseInt(request.params.age)

    pool.query('SELECT * FROM employee WHERE age = $1', [age], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getEmpBySalary = (request, response) => {
    const salary = parseInt(request.params.salary)

    pool.query('SELECT * FROM employee WHERE salary > $1', [salary], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


module.exports = {
    getEmployees,
    getEmpById,
    getEmpByAge,
    getEmpBySalary
}
