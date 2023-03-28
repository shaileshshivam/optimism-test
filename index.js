import { Alchemy, Network } from "alchemy-sdk"
import dotenv from "dotenv"

dotenv.config()

const alchemy = new Alchemy({
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.OPT_MAINNET,
})


const address = "0xB2a0449699876824CC16121dD19195E821A5956B"
const transactionHash = "0x1599ea8a9866a1c6d435c7a3b1443cd31273a8835c65a2c4ad05dbf8af3e51f7"

async function getTransactionReceipt(hash) {
    const receipt = await alchemy.core.getTransactionReceipt(transactionHash)
    const gasUsed = receipt.gasUsed
    const effectiveGasPrice = receipt.effectiveGasPrice

    console.log({
        gasUsed,
        effectiveGasPrice
    })

}


await getTransactionReceipt(transactionHash);