import * as Express from 'express';
import * as Knex from 'knex'

const pg = Knex({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING
});



const app = Express();

app.post('/users', function (req, res) {
    if(!req.body.tkn || req.body.tkn !== getToken("write")) return;
    
    pg('users')
        .insert([{}])

});

app.get('/users', function (req, res) {
    if(!req.body.tkn || (req.body.tkn !== getToken("read"))) return res.status(!req.body.tkn ? 400 : 403);

    const r = await pg('users').where('id',req.body.id).select('*');

    return res.status(200).send({data:r});

});