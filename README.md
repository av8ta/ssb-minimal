# ssb-minimal

A minimal way to get started talking to ssb on a testnet

Create a .ssb-test folder alongside your .ssb folder in HOME

Create a config file (no file extension) with:
```json
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
}
```

shs and sign are the keys I'm using for a testnet. By setting sign, the network can not be linked to the mainnet. Setting sign to null means your network could 'join' or 'leak' to the mainnet, depending on how you perceive that!

Terminal: set ssb_appname env variable. Make sure each terminal you use has the environment variable set

powershell
```powershell
$env:ssb_appname="ssb-test"
```
bash
```bash
set ssb_appname="ssb-test"
```

Different terminal:
```
sbot server
```

npm start

To see your message:
```
sbot createLogStream
```

All going well you should see something like this:
```powershell
{
  "key": "%O+Begs/8ayYUCmr6BzXB4SXttyLq3j6viuyRiwlbzL4=.sha256",
  "value": {
    "previous": "%NamYZ9YBc8cw5TlP6fQmO/XDey4sPE3c+QMS2TUIVJk=.sha256",
    "author": "@32eYi2kQTUrEcbXI9MD7fjU+oXIQ+jELRLTVCwj9Rrg=.ed25519",
    "sequence": 4,
    "timestamp": 1509695433805,
    "hash": "sha256",
    "content": {
      "type": "post",
      "text": "Hello scuttlers!"
    },
    "signature": "2zHW23M6fupHE+RCDIKBA0TCv5Ft07XqtVc7zBeST/kjsQ2sptJ012tvrj+sBiYG8O3HRkebEeWJC/Jf5EU3Ag==.sig.ed25519"
  },
  "timestamp": 1509695433806
}
```