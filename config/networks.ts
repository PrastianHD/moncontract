export const networks: { [key: string]: { name: string; chainId: number; rpcUrl: string; etherscanApiKey: string; customExplorer?: { apiURL: string; browserURL: string } } } = {
    monad: {
      name: "Monad Testnet",
      chainId: 17000,
      rpcUrl: "https://testnet-rpc.monad.xyz/",
      etherscanApiKey: "", 
      customExplorer: {
        apiURL: "https://sourcify-api-monad.blockvision.org", 
        browserURL: "https://testnet.monadexplorer.com",
      },
    },
  };