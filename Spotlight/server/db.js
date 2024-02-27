const { Pool } = require('pg');

async function getDatabasePool() {
    const pool = new Pool({
        user: 'postgres',
        host: '127.0.0.1',
        database: 'buspass',
        password: 'Raghav6969Jit42O',
        port: 7070,
    });

    return pool;
}

// Example query
// (async () => {

//     const poool = await getDatabasePool();
//     poool.query('SELECT * FROM test', (err, res) => {
//         if (err) {
//             console.error('Error executing query', err.stack);
//         } else {
//             console.log('Connected to PostgreSQL at', res.rows);
//         }
//     });
// })();

module.exports = {
    getDatabasePool
};
