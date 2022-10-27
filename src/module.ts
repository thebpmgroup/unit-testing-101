import { createClient } from 'redis';

const client = createClient({
    url: 'redis://redis'
});

client.on('error', (err) => console.log('Redis Client Error', err));

const doQuery = async () => {
    await client.connect();
    await client.set('key', 'value');
    const value = await client.get('key');
    return value;
}

export default doQuery;