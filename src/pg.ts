
import { Client } from 'pg';

export async function query() {
    const client = await new Client().connect()

    const res = await client.query('SELECT $1::text as message', ['Hello world!'])

    await client.end();

    return res.rows[0].message;
}