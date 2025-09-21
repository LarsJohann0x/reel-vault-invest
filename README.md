# 🎬 Reel Vault Invest

> **Privacy-Preserving Film Investment Platform**  
> *Where Cinema Meets Cryptography*

A revolutionary Web3 platform that enables private film investments using Fully Homomorphic Encryption (FHE) technology. Invest in the next blockbuster while keeping your financial data completely confidential.

## ✨ Key Features

### 🔐 **Privacy-First Architecture**
- **FHE Encryption**: All investment data encrypted using Zama's cutting-edge FHE technology
- **Anonymous Investments**: Contribute to projects without revealing your investment amounts
- **Private Analytics**: Project insights computed on encrypted data
- **Confidential Reputation**: Build your investor reputation while maintaining privacy

### 🎭 **Film Investment Ecosystem**
- **Project Discovery**: Browse verified film projects across genres
- **Secure Funding**: Invest with complete financial privacy
- **Smart Contracts**: FHE-enabled smart contracts on Ethereum
- **Transparent Operations**: All transactions verifiable on-chain

### 🌐 **Web3 Integration**
- **Multi-Wallet Support**: Connect with Rainbow, MetaMask, and more
- **Sepolia Testnet**: Deployed on Ethereum testnet for testing
- **Decentralized**: No central authority controlling your investments
- **Open Source**: Fully transparent and auditable codebase

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git
- MetaMask or compatible wallet
- Sepolia testnet ETH for testing

### Installation

```bash
# Clone the repository
git clone https://github.com/LarsJohann0x/reel-vault-invest.git
cd reel-vault-invest

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup

Create a `.env` file in the project root:

```env
# Network Configuration
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

# Wallet Connect
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_PROJECT_ID

# Infura Configuration
VITE_INFURA_API_KEY=YOUR_INFURA_KEY
```

## 🏗️ Architecture

### Smart Contracts
- **ReelVaultInvest.sol**: Main FHE-enabled contract
- **Privacy-Preserving**: All sensitive data encrypted
- **Gas Optimized**: Efficient contract interactions
- **Upgradeable**: Secure upgrade mechanisms

### Frontend Stack
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Beautiful component library

### Web3 Integration
- **Rainbow Kit**: Wallet connection
- **Wagmi**: React hooks for Ethereum
- **Viem**: TypeScript Ethereum library
- **Hardhat**: Smart contract development

## 🔧 Development

### Smart Contract Development

```bash
# Compile contracts
npm run compile

# Deploy to Sepolia
npm run deploy

# Run tests
npm run test
```

### Frontend Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
reel-vault-invest/
├── contracts/              # Smart contracts
│   └── ReelVaultInvest.sol # Main FHE contract
├── scripts/                # Deployment scripts
│   └── deploy.ts          # Contract deployment
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Footer component
│   ├── pages/            # Application pages
│   │   ├── Index.tsx     # Home page
│   │   ├── FilmProjects.tsx # Project listings
│   │   ├── Investments.tsx  # Investment dashboard
│   │   └── Vault.tsx     # Vault management
│   ├── lib/              # Utility functions
│   │   ├── wallet-config.ts # Wallet configuration
│   │   ├── fhe-utils.ts  # FHE utilities
│   │   └── contract.ts   # Contract interactions
│   └── hooks/            # Custom React hooks
├── public/               # Static assets
├── hardhat.config.ts     # Hardhat configuration
└── vercel.json          # Vercel deployment config
```

## 🔒 Security Features

### Privacy Protection
- **FHE Encryption**: All sensitive data encrypted
- **Anonymous Transactions**: Investment amounts are private
- **Secure Analytics**: Analytics computed on encrypted data
- **Privacy-Preserving Reputation**: User reputation is encrypted

### Smart Contract Security
- **Access Control**: Role-based permissions
- **Reentrancy Protection**: Prevents reentrancy attacks
- **Input Validation**: Comprehensive input checking
- **Upgradeable Contracts**: Secure upgrade mechanisms

## 🌍 Deployment

### Vercel Deployment

1. **Connect Repository**: Import from GitHub
2. **Configure Environment**: Set environment variables
3. **Deploy**: Automatic deployment on push

### Smart Contract Deployment

```bash
# Deploy to Sepolia
npm run deploy

# Verify contract
npx hardhat verify --network sepolia <CONTRACT_ADDRESS>
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **GitHub Issues**: Report bugs and request features
- **Documentation**: Comprehensive guides and API docs
- **Community**: Join our developer community
- **Security**: Report security vulnerabilities privately

## 🔮 Roadmap

- [ ] Multi-chain support
- [ ] Advanced analytics dashboard
- [ ] Mobile application
- [ ] Enhanced privacy features
- [ ] Integration with more DeFi protocols

---

**Built with ❤️ by the Reel Vault Invest Team**

*Empowering the future of private film investment through cutting-edge cryptography*