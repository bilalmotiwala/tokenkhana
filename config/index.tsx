
// config/index.tsx
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// Your WalletConnect Cloud project ID
export const projectId = '352d1b467ac70f299098d1366e6357bb'

// Create a metadata object
const metadata = {
  name: 'Tokenkhana',
  description: 'Create and launch your ERC20 token within seconds across 10+ EVM blockchains for free.',
  url: 'https://tokenkhana.vercel.app/',
  icons: ['https://avatars.githubusercontent.com/u/179300599']
}

// Create wagmiConfig
const chains = [mainnet, sepolia] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
})