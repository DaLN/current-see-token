import { run, ethers } from "@nomiclabs/buidler";

async function main() {
  await run("compile");

  const factory = await ethers.getContractFactory("CTSToken")

  // If we had constructor arguments, they would be passed into deploy()
  let contract = await factory.deploy();

  // The address the Contract WILL have once mined
  console.log("Contract address: " + contract.address);

  // The transaction that was sent to the network to deploy the Contract
  console.log("Contract transaction hash: " + contract.deployTransaction.hash);

  // The contract is NOT deployed yet; we must wait until it is mined
  await contract.deployed();
  console.log("Contract deployed.");

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });