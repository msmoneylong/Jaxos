import {createMDX} from 'fumadocs-mdx/next';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const rootDirectory=path.dirname(fileURLToPath(import.meta.url));
const nextConfig={
  reactStrictMode:true,
  typescript:{
    // Keep `pnpm typecheck` mandatory; bypass only Next.js' duplicate build worker.
    ignoreBuildErrors:true,
  },
  webpack:(config)=>{
    config.resolve.alias={
      ...config.resolve.alias,
      '@':path.join(rootDirectory,'src'),
      collections:path.join(rootDirectory,'.source'),
    };
    return config;
  },
};

export default createMDX()(nextConfig);
