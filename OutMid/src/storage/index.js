const { create } = require('ipfs-http-client');

module.exports = {
    init: async () => {
        const ipfs = create({ host: 'localhost', port: '5001', protocol: 'http' });
        console.log('Storage initialized');
        return ipfs;
    },

    addFile: async (content) => {
        const ipfs = create({ host: 'localhost', port: '5001', protocol: 'http' });
        const result = await ipfs.add(content);
        console.log('File added to IPFS with hash:', result.path);
        return result.path;
    },
};
