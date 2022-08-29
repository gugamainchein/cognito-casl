export const config = {
  Auth: {
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
    authenticationFlowType: "USER_PASSWORD_AUTH",
    oauth: {
      domain: process.env.REACT_APP_COGNITO_DOMAIN,
      scope: [
        "phone",
        "email",
        "profile",
        "openid",
        "aws.cognito.signin.user.admin",
      ],
      redirectSignIn: process.env.REACT_APP_WEB_CLIENT_REDIRECT_URL + "login",
      redirectSignOut: process.env.REACT_APP_WEB_CLIENT_REDIRECT_URL + "logout",
      responseType: "code",
    },
  },
};
