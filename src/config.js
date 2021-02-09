const config = {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-api-prod-serverlessdeploymentbucket-1gpagb43a3y0i',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://n1a4etrcj3.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_wTqGEj6HP',
    APP_CLIENT_ID: '7l6qt6hibat1nrle7scc4p8mfj',
    IDENTITY_POOL_ID: 'us-east-1:9908c294-f69d-47ed-81f2-6bba68bb579c',
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51IGm0XIpqBA4GlHrKckBinV4iWcJCTUFj1oKfrzgPs0zdArYl0sqZoYVnfzCNFxeyftuLPiN8NpnPcir6wrctp6P00931xu9d0",
};

export default config;
