import { task, usePlugin } from "@nomiclabs/buidler/config";

usePlugin("@nomiclabs/buidler-waffle");
usePlugin("@nomiclabs/buidler-ethers");

module.exports = {
    defaultNetwork: "buidlerevm",
    networks: {
        buidlerevm: {
        }
    },
    solc: {
        version: "0.6.12",
        optimizer: {
            enabled: true,
            runs: 200
        }
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    }
}


// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, bre) => {
    const accounts = await bre.ethers.getSigners();

    for (const account of accounts) {
        console.log(await account.getAddress());
    }
});

export default {};