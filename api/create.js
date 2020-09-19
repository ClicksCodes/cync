import * as Knex from 'knex'

const pg = Knex({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING
});

pg.schema.createTable('users', table => {
    table.unique('id');
    table.increments('bid');
    table.unique('email');
    table.string('username');
    table.unique('lusername');
    table.string('password');
    table.string('discord')
    table.enum('level',['basic','vip','pro','admin','system']);
    table.bigInteger('points');
    table.enum('visibility',['private','public'])
});
