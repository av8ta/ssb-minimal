var ssbClient = require('ssb-client')

// config for a local testnet
// set ssb_appname env var to ssb-test
// shs: network key
// sign: if not null your network cannot connect to the mainnet
ssbClient(
  {
    "caps": {
      "shs": "MVZDyNf1TrZuGv3W5Dpef0vaITW1UqOUO3aWLNBp+7A=",
      "sign": "qym3eJKBjm0E0OIjuh3O1VX8+lLVSGV2p5UzrMStHTs="
    },
    "port": 8007,
    "ws": {
      "port": 8988
    },
    "ssb_appname": "ssb-test",
    "plugins": {
      "ssb-about": true,
      "ssb-backlinks": true,
      "ssb-fulltext": true
    }
  },
  function (err, sbot) {
  if(err) {
    console.log('err', err)
  }
  else {
    console.log('sbot', sbot)
    // publish a message
    sbot.publish({ type: 'post', text: 'Hello scuttlers!' }, function (err, msg) {
      // msg.key           == hash(msg.value)
      // msg.value.author  == your id
      // msg.value.content == { type: 'post', text: 'My First Post!' }
      // ...
    })
  }
})
