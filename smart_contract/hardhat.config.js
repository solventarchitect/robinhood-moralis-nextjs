require('@nomiclabs/hardhat-waffle')

module.exports = {
	solidity: '0.8.4',
	networks: {
		rinkeby: {
			url: process.env.ALCHEMY_URL,
			accounts: [
				'a79cf2e3aeddc485826bbda36972f0b27eb5de37eb52931d8d87e17e331e4791',
			],
		},
	},
}
