import { createClient } from 'redis';

const client = createClient({
    url: 'redis://redis'
});

