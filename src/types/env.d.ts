// src/types/env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string;
      STRIPE_SECRET_KEY: string;
      // 如果有其他環境變量，也可以這裡聲明，例如：
      // NODE_ENV: 'development' | 'production' | 'test';
    }
  }