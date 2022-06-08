const { Verifier } = require('@pact-foundation/pact');
const { server, provider } = require('../provider');
const path = require('path');
const { Console } = require('console');

var opts = {
  providerBaseUrl: 'http://localhost:8081',
  provider: 'DateProvider',
  pactBrokerUrl: 'http://pact_broker:8282',
  // pactBrokerUrl: 'http://localhost:8282',
  pactBrokerUsername: '',
  pactBrokerPassword: '',
  publishVerificationResult: true,
  consumerVersion: '1.0',
  providerVersion: '1.0',
  logLevel: 'DEBUG',
  timeout: 120000,
  tags: ['dev'],
  // stateHandlers: {
  //   'Superman exists': () => {
  //     'insert superman user into user table';
  //   }
  // },
  // requestFilter: (req, res) => {
  //   req.headers['Authorization'] = 'Bearer 1234'
  // },
  // customProviderHeaders: ["Authorization: Bearer 1234"]
};



describe('Pact Provider verification', () => {
  it('Should validate the date consumer', async () => {
    const output = await new Verifier(opts).verifyProvider();
    console.log(output);
    server.close(); 
  });
});
