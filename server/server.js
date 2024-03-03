// const express = require('express');
// const { Client } = require('pg');
// const cors=require('cors');
// const app = express();
// const port = process.env.PORT || 5004; // Added line
// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "Lakshmi@442003",
//     database: "postgres"
// });

// client.connect();
// app.use(cors)
// app.get('/api/customers', async (req, res) => {
//     try {
//         const { rows } = await client.query('SELECT * FROM cust');
//         res.json(rows);
//     } catch (error) {
//         console.error('Error fetching customers:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });



// import express from 'express';
// import cors from 'cors';
// import pg from 'pg';


// const app = express();

// const port = 9000;

// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "Lakshmi@442003",
//     database: "postgres"
// });
// app.use(cors(
//     {
//         origin: 'http://localhost:',
//         methods: 'GET'
//     }
// ));




// client.connect();
// //create table users (sno varchar(12), name varchar(300), age int,phoneno varchar(10),location varchar(100), created_at varchar(100)) 
// //insert into users (sno, name,age,phoneno,location,created_at)values('101126505', 'Bob',24,'9758914832','Hyderabad','01/01/2024@10:12am')
// app.get('/api/data',async(req,res)=>{
//     try{
//             const result = await client.query('SELECT * FROM users');
//             res.status(200).send(result.rows);  
//     }
//     catch(err)
//     {
//         console.error(err);
//         return res.status(500).send({message: 'Internal Server Error'})
//     }
// });

// app.listen(client.port, ()=>{
//     console.log(`Listening on port ${client.port}`);
// })


const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 9000;

// CORS middleware
app.use(cors());

// PostgreSQL configuration
const pool = new Pool({
        host: "localhost",
        user: "postgres",
        port: 5432,
        password: "Lakshmi@442003",
        database: "postgres"
});

// Example route
app.get('/data', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM cust');
    const data = result.rows;
    res.json(data);
    console.log(data);
    client.release();
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
