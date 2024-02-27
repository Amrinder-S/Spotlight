const { Pool } = require('pg');

async function getDatabasePool() {
    const pool = new Pool({
        user: 'postgres',
        host: '192.168.1.6',
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
