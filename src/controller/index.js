const { Pool } = require('pg');

// const pool = new Pool({
//     host: 'ec2-3-227-15-75.compute-1.amazonaws.com',
//     user: 'ytdsvzzanmptvo',
//     password: '75a2dcc22143fda327c592b47e0cf0e64c4894f78e381ccec57ef10e3b1e10c6',
//     database: 'd1tsp0qr7gensr',
//     port: 5432
// });

const getUsers = async(req, res) => {
    // const response = await pool.query('SELECT * FROM users');
    // console.log(response.rows);
    res.send('users');
}

module.exports = {
    getUsers
}