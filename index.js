var ssbClient = require('ssb-client')

// config for a local testnet
// set ssb_appname env var to ssb-test
// shs: network key
// sign: if not null your network cannot connect to the mainnet

// make sure ssb_appname="ssb-test" in each terminal you use, if using a testnet

// if you want to play on the mainnet, either change the opts below or comment out the opts object
// if opts isn't supplied ssbClient will look in your ~.ssb folder for the config file
ssbClient(
  // // opts
  // {
  //   "caps": {
  //     "shs": "MVZDyNf1TrZuGv3W5Dpef0vaITW1UqOUO3aWLNBp+7A=",
  //     "sign": "qym3eJKBjm0E0OIjuh3O1VX8+lLVSGV2p5UzrMStHTs="
  //   },
  //   "port": 8007,
  //   "ws": {
  //     "port": 8988
  //   },
  //   "ssb_appname": "ssb-test",
  //   "plugins": {
  //     "ssb-about": true,
  //     "ssb-backlinks": true,
  //     "ssb-fulltext": true
  //   }
  // },
  // // callback
  function (err, sbot) {
  if(err) {
    console.log('ssb-client err', err, '\n\n\n\n')
  }
  else {
    console.log('sbot:', sbot, '\n\n\n\n')
    // // uncommment to publish a message
    // sbot.publish({ type: 'post', text: 'Hello scuttlers!' }, function (err, msg) {
    //   // http://www.scuttlebot.io/docs/basics/publish-a-message.html  
    //   // msg.key           == hash(msg.value)
    //   // msg.value.author  == your id
    //   // msg.value.content == { type: 'post', text: 'My First Post!' }
    //   // ...
    // })

    // // read the log
    // sbot.createLogStream({ limit: 10}, function (err, msg) {
    //   if(err) {
    //     console.log(err, '\n\n\n\n')
    //   } else {
    //     console.log(msg, '\n\n\n\n')
    //   }
    // })

    // whoami - returns your public key, which is your unique identity. private messages are encrypted to this key
    sbot.whoami(function(err, msg) {
      if(err) { 
        console.log('sbot.whoami err', err, '\n\n\n\n') 
      } else {
        console.log('sbot.whoami', msg, '\n\n\n\n')
      }
    })

    // function to retrieve your public key
    function myPubKeyFunc() {
      console.log('myPubKeyFunc is undefined, yay async!',
        sbot.whoami(function(err, msg) {
          if(err) { 
            console.log('myPubKey.whoami err', err, '\n\n\n\n')
            return err
          } else {
            console.log('myPubKey.whoami, myPubKeyFunc is undefined above, yet here is the key', msg, '\n\n\n\n')
            console.log("copy and paste this key over top of: \nvar pubKey = '" + msg.id + "'" + '\n')
            console.log('to see your feed below', '\n\n\n\n')
            return msg
          }
        })
      )
    }
    myPubKeyFunc()

    // my public key on my testnet. use yours console logged from above
    var pubKey = '@32eYi2kQTUrEcbXI9MD7fjU+oXIQ+jELRLTVCwj9Rrg=.ed25519'

    // pull your messages as a pull-stream
    var pull = require('pull-stream')
    pull(
      sbot.createUserStream({ id: pubKey, limit: 5 }),
      pull.collect(function(err, msgs) {
        if(err) {
          console.log('createUserStream pull.collect err', err, '\n\n\n\n')
        } else {
          console.log('createUserStream pull.collect', msgs, '\n\n\n\n')
        }
      })
    )

    // get your public key with a callback function
    function getPubkey(callback) {
      sbot.whoami(function(err, msg) {
        if(err) { 
          console.log('getPubkey(callback) err', err, '\n\n\n\n')
          return callback(err)
        } else {
          console.log('getPubkey(callback) msg', msg, '\n\n\n\n')
          return callback(null, msg)
        }
      })
    }

  }
})
