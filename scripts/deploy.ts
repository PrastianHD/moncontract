import { ethers } from "hardhat";
import * as dotenv from "dotenv";
import fs from "fs";
import { execSync } from "child_process";
import inquirer from "inquirer";

dotenv.config();

// ✅ Function to get current timestamp (YYYY-MM-DD HH:MM)
function getTimestamp(): string {
    const now = new Date();
    return now.toISOString().replace("T", " ").substring(0, 16); // Format: YYYY-MM-DD HH:MM
}

async function main() {
    console.log("🚀 Starting Deployment & Verification on Monad Testnet...\n");

    // 🔥 Prompt user for ERC20 Token details
    const answers = await inquirer.prompt([
        { name: "name", message: "Enter Token Name:", type: "input" },
        { name: "symbol", message: "Enter Token Symbol:", type: "input" },
        { name: "supply", message: "Enter Initial Supply (in tokens):", type: "number" },
    ]);

    const { name, symbol, supply } = answers;
    const tokenSupply = ethers.parseUnits(supply.toString(), 0);

    // ✅ Deploy ERC20 Contract
    console.log(`[${getTimestamp()}] 📁 Deploying ${name} (${symbol}) on Monad Testnet...`);
    const [deployer] = await ethers.getSigners();
    const ERC20 = await ethers.getContractFactory("ERC20Token", deployer);
    const token = await ERC20.deploy(name, symbol, tokenSupply);

    await token.waitForDeployment();
    const contractAddress = await token.getAddress();

    console.log(`[${getTimestamp()}] ✅ Successfully deployed ${name} (${symbol}) on Monad Testnetat`);
    console.log(`[${getTimestamp()}] ✅ Contract: https://testnet.monadexplorer.com/token/${contractAddress}`);

    // ✅ Save deployment details
    const deployResults = {
        network: "monad",
        contractAddress,
        name,
        symbol,
        supply,
        timestamp: getTimestamp(),
    };
    fs.writeFileSync("output.json", JSON.stringify(deployResults, null, 2));

    // ✅ Verify Contract on Sourcify
    console.log(`\n[${getTimestamp()}] 🔍 Starting Verification on Sourcify...\n`);

    try {
        const command = `npx hardhat verify --network monad ${contractAddress} "${name}" "${symbol}" ${tokenSupply}`;
        execSync(command, { stdio: "inherit" });

        console.log(`[${getTimestamp()}] ✅ Verified successfully on Monad Testnet!`);
    } catch (error) {
        console.error(`[${getTimestamp()}] ❌ Verification failed on Monad:`, error);
    }

    console.log(`\n[${getTimestamp()}] 🎉 Deployment, Minting, & Verification Completed on Monad!\n`);
}

main().catch((error) => {
    console.error(`[${getTimestamp()}] ❌ Process failed:`, error);
    process.exit(1);
});
