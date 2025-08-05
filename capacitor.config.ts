import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.76d1552e52b94d279e0146c9032f67f1',
  appName: 'moo-ai-farm',
  webDir: 'dist',
  server: {
    url: "https://76d1552e-52b9-4d27-9e01-46c9032f67f1.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#ffffff",
      androidSplashResourceName: "splash",
      showSpinner: false
    }
  }
};

export default config;