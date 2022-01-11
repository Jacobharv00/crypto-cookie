require( '@nomiclabs/hardhat-waffle' )

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/pQq3NoG25KH_hK0oYYNhGHvRRhAUcALh',
      accounts: [ '00958f5ac7d81493808448d38634f24ede28a79ae0f9df6ec0126afba1ef99bb' ]
    },
  }
}