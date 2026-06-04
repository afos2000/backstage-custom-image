export interface Config {
  app: {
    baseUrl?: string;
    title?: string;
  };
  backend: {
    baseUrl?: string;
    listen?: {
      port?: number;
    };
    database?: {
      client?: string;
      connection?: {
        host?: string;
        port?: number;
        user?: string;
        password?: string;
      };
    };
    cors?: {
      origin?: string;
    };
  };
  auth: {
    environment: string;
    providers?: {
      oidc?: {
        [env: string]: {
          metadataUrl: string;
          clientId: string;
          clientSecret: string;
          callbackUrl: string;
          signIn?: {
            resolvers?: Array<{ resolver: string }>;
          };
        };
      };
    };
  };
}
