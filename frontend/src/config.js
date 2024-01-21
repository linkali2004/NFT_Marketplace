import { http, createConfig } from 'wagmi'
import {  sepolia} from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

const projectId = '2747d27cf6f7af6e320ef82705ecaec3'

export const config = createConfig({
  chains: [sepolia],
  connectors: [injected(), ],
  transports: {
    [sepolia.id]: http(),
  },
})