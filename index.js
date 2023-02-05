const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2";
const database = "Human_Resource";

const client = new MongoClient(url);

async function employee(){

    await client.connect();
    const db = await client.db(database);
    console.log("connected to Database");

    const collection = db.collection("employee");

    const data = [
        {
        "firstName": "John",
        "lastName": "Doe",
        "salary": "25000",
        "department": "HR",
        "lastCompany": "X",
        "lastSalary": "10000",
        "overallExp": "2",
        "contactInfo": "1234567890",
        "yearGrad": "2016",
        "gradStream": "CSE"
        },
        {
        "firstName": "Rohan","lastName": "Jame","salary": "30000","department": "Technical","lastCompany": "Y","lastSalary": "15000","overallExp": "1","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"
        },
        {
        "firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"
        },
        {
        "firstName": "Sao","lastName": "Avika","salary": "30000","department": "Sales","lastCompany": "Y","lastSalary": "15000","overallExp": "2","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"
        },
        {
        "firstName": "Jame","lastName": "roh","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"
        },
        {
        "firstName": "Rohan","lastName": "Jame","salary": "30000","department": "Technical","lastCompany": "Y","lastSalary": "15000","overallExp": "1","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"
        },
        {
        "firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"
        },
        {
        "firstName": "Sao","lastName": "Avika","salary": "30000","department": "Sales","lastCompany": "Y","lastSalary": "15000","overallExp": "2","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"
        },
        {
        "firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"
        },
        {
        "firstName": "Rohan","lastName": "Jame","salary": "30000","department": "Technical","lastCompany": "Y","lastSalary": "15000","overallExp": "1","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"
        },
        {
        "firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"
        },
        {
        "firstName": "Sao","lastName": "Avika","salary": "30000","department": "Sales","lastCompany": "Y","lastSalary": "15000","overallExp": "2","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"
        },
        {
            "firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"
        }
    ];

    // Insert given data into collection "employee"

    const response = await collection.insertMany(data);
    console.log("created")
    console.log(response);

    // Q1.  Query the collection "employee" and list all the documents

    const allEmp = await collection.find({}).toArray()
    console.log(allEmp);

    // Q2.  Query the collection "employee" and list all the employees who are having salary more than 30000

    const condOne = await collection.find({
        "salary" : { $gt : "30000"}
    }).toArray();
    console.log(condOne);

    // Q3. Query the collection "employee" and list all the employees who are having experience more than 2 years

    const expTwo = await collection.find({
        "overallExp" : { $gt : "2"}
    }).toArray();
    console.log(expTwo);

    // Q4. Query the collection "employee" and list all the employees who are graduated after 2015 and having experience more than 1 year

    const expOne = await collection.find({
        "yearGrad" : { $gt : "2015"},
        "overallExp" : { $gt : "1"}
    }).toArray()
    console.log(expOne);

    // Q5.  Query the collection "employee" and update the salary of the employee whose salary is greater than 70000 to 65000

    const updateRes = await collection.updateMany(
        {
            "salary" : { $gt : "70000"}
        },
        {
            $set : {
                "salary" : "65000"
            }
        }
    )
    console.log(updateRes);

    // Q6. Delete all the documents from employee where last company is Y

    const delRes = await collection.deleteMany(
        {
            "lastCompany" : "Y"
        }
    )
    console.log(delRes);

}

employee();