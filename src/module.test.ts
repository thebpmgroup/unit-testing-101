type RedisCommandArgument = string | Buffer;

interface IMockClient {
    connect: jest.MockedFn<any>;
    HGET: jest.MockedFn<any>;
    HSET: jest.MockedFn<any>;
    HDEL: jest.MockedFn<any>;
    scanIterator: jest.MockedFn<any>
    multi: jest.MockedFn<any>;
    isOpen: jest.MockedFn<any>;
    on: jest.MockedFn<any>;
}
interface IMockCrypto {
    update: jest.MockedFn<any>;
}

jest.mock('redis', () => ({
    __esModule: true,
    createClient: jest.fn().mockReturnValue({
        connect: jest.fn(),
        HGET: jest.fn(),
        HSET: jest.fn(),
        HDEL: jest.fn(),
        scanIterator: function* () { 
            yield "a";
            yield "b";
            yield "c";
        },
        isOpen: {},
        on: jest.fn(),
        multi: jest.fn().mockReturnValue({
            HSET: jest.fn()
        })
    } as IMockClient)
}));

jest.mock('crypto', () => ({
    __esModule: true,
    createHmac: jest.fn().mockReturnValue({
        update: jest.fn().mockReturnValue({
            digest: jest.fn()
        })
    } as IMockCrypto)
}));

let unitUnderTest;
let createClient;
let createHmac;

describe('Redis tests', () => {
    beforeEach(async () => {
        jest.clearAllMocks();
        
        import('redis').then((module) => {
            createClient = module.createClient;
            (createClient() as unknown as IMockClient).HGET.mockImplementation(
                //@ts-ignore
                (key: RedisCommandArgument, value: RedisCommandArgument) => Promise.resolve()
            );
            jest.resetModules();
        });
        import('crypto').then((module) => {
            createHmac = module.createHmac;
        });
    });
    it('should', () => {

    });
})