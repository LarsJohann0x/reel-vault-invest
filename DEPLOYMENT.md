# 🚀 Vercel Deployment Guide

This guide provides step-by-step instructions for deploying the Reel Vault Invest application to Vercel.

## Prerequisites

- GitHub account with access to the repository
- Vercel account (free tier available)
- Node.js 18+ installed locally (for testing)

## Step-by-Step Deployment

### 1. Prepare the Repository

Ensure all changes are committed and pushed to GitHub:

```bash
git add .
git commit -m "feat: Complete refactor with FHE encryption and wallet connection"
git push origin main
```

### 2. Connect to Vercel

1. **Visit Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "New Project" or "Add New..." 
   - Select "Import Git Repository"
   - Find and select `LarsJohann0x/reel-vault-invest`
   - Click "Import"

### 3. Configure Build Settings

Vercel should auto-detect the project settings, but verify:

- **Framework Preset**: Vite
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 4. Environment Variables Configuration

In the Vercel dashboard, go to **Settings > Environment Variables** and add:

```env
# Network Configuration
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

# Wallet Connect Configuration  
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID

# Infura Configuration
VITE_INFURA_API_KEY=YOUR_INFURA_API_KEY
```

**Important**: Add these variables for all environments (Production, Preview, Development).

### 5. Advanced Configuration

#### 5.1 Vercel Configuration File

The project includes a `vercel.json` file with optimized settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### 5.2 Build Optimization

The project includes optimized Vite configuration:

```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          wallet: ['@rainbow-me/rainbowkit', 'wagmi', 'viem'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    }
  }
});
```

### 6. Deploy

1. **Deploy to Production**
   - Click "Deploy" in the Vercel dashboard
   - Wait for the build to complete (usually 2-3 minutes)
   - Your app will be available at `https://your-project-name.vercel.app`

2. **Custom Domain (Optional)**
   - Go to **Settings > Domains**
   - Add your custom domain
   - Configure DNS records as instructed

### 7. Post-Deployment Verification

#### 7.1 Test the Application

1. **Wallet Connection**
   - Open the deployed URL
   - Click "Connect Wallet" 
   - Verify Rainbow Kit modal appears
   - Test connection with MetaMask

2. **Network Configuration**
   - Ensure Sepolia network is selected
   - Verify RPC connection is working
   - Check that environment variables are loaded

3. **FHE Features**
   - Test encrypted investment creation
   - Verify privacy features are working
   - Check contract interactions

#### 7.2 Monitor Performance

- Check Vercel Analytics for performance metrics
- Monitor build logs for any errors
- Verify all environment variables are properly set

### 8. Continuous Deployment

The project is now set up for automatic deployments:

- **Automatic Deploys**: Every push to `main` branch triggers a new deployment
- **Preview Deploys**: Pull requests get preview URLs
- **Manual Deploys**: Use Vercel CLI for manual deployments

### 9. Troubleshooting

#### Common Issues:

1. **Build Failures**
   - Check Node.js version (should be 18+)
   - Verify all dependencies are in package.json
   - Check build logs in Vercel dashboard

2. **Environment Variables**
   - Ensure all variables are set for the correct environment
   - Check variable names match exactly (case-sensitive)
   - Verify no extra spaces or characters

3. **Wallet Connection Issues**
   - Verify WalletConnect Project ID is correct
   - Check RPC URL is accessible
   - Ensure Sepolia network configuration

4. **FHE Contract Issues**
   - Verify contract is deployed to Sepolia
   - Check contract address is correct
   - Ensure FHE utilities are properly configured

### 10. Security Considerations

- **Environment Variables**: Never commit sensitive keys to repository
- **HTTPS**: Vercel provides automatic HTTPS
- **Headers**: Security headers are configured in vercel.json
- **CORS**: Configure CORS for API endpoints if needed

### 11. Performance Optimization

- **CDN**: Vercel's global CDN is automatically enabled
- **Caching**: Static assets are cached automatically
- **Compression**: Gzip compression is enabled by default
- **Image Optimization**: Use Vercel's image optimization features

### 12. Monitoring and Analytics

- **Vercel Analytics**: Enable in project settings
- **Error Tracking**: Consider adding Sentry for error monitoring
- **Performance**: Monitor Core Web Vitals
- **Uptime**: Vercel provides uptime monitoring

## Deployment Checklist

- [ ] Repository is up to date on GitHub
- [ ] Vercel project is connected
- [ ] Environment variables are configured
- [ ] Build settings are correct
- [ ] Custom domain is configured (if applicable)
- [ ] Wallet connection is working
- [ ] FHE features are functional
- [ ] Performance is acceptable
- [ ] Security headers are in place
- [ ] Analytics are enabled

## Support

For issues with deployment:

1. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
2. Review build logs in Vercel dashboard
3. Test locally with `npm run build` and `npm run preview`
4. Verify all environment variables are set correctly

## Next Steps

After successful deployment:

1. **Smart Contract Deployment**: Deploy the FHE contract to Sepolia
2. **Contract Integration**: Update contract address in the application
3. **Testing**: Perform comprehensive testing on the live application
4. **Documentation**: Update README with live application URL
5. **Monitoring**: Set up monitoring and alerting for the application

---

**Deployment URL**: `https://your-project-name.vercel.app`
**Repository**: `https://github.com/LarsJohann0x/reel-vault-invest`
**Vercel Dashboard**: `https://vercel.com/dashboard`