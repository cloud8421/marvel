exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/features/*_test.js'],
  baseUrl: 'http://marvel-explorer.dev'
}
