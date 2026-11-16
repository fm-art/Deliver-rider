import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gossaigaonbazar.admin',
  appName: 'GB Admin',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
