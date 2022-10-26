import { createClient } from 'redis';

const client = createClient({
    url: 'redis://redis'
});

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

const doQuery = async () => {
    await client.set('key', 'value');
    const value = await client.get('key');
}

export default doQuery;