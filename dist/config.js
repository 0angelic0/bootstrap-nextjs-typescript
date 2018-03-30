var config = {
    jwt: {
        cookieName: 'x-access-token',
        secret: 'secret',
        option: {
            expiresIn: '24h'
        }
    },
    path: {
        home: '/',
        login: '/auth/login'
    },
    azureStorage: {
        account: 'xxx',
        accessKey: 'yyy==',
        host: 'https://zzz.blob.core.windows.net',
        container: 'home'
    }
};
module.exports = config;
//# sourceMappingURL=config.js.map