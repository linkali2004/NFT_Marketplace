import { http, createConfig } from 'wagmi'
import { base, sepolia, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = '2747d27cf6f7af6e320ef82705ecaec3'

export const config = createConfig({
  chains: [sepolia, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [sepolia.id]: http(),
    [base.id]: http(),
  },
})