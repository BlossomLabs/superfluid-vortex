# Superfluid Vortex <img align="right" src="https://github.com/BlossomLabs/superfluid-vortex/blob/master/public/logo192.png" height="80px" />

Vortex is a domain-specific language for Superfluid batch calls. It allows you to perform multiple steps in a single transaction, including calls for Super Tokens, Super Apps, and both at the same time.

## Available commands:
```
token pre-approve <token> <spender> <amount>
token approve <token> <spender> <amount>
token transfer-from <token> <sender> <recipient> <amount>
token upgrade <token> <amount>
token downgrade <token> <amount>

flow create <token> <receiver> <flow-rate> [user-data]
flow update <token> <receiver> <flow-rate> [user-data]
flow delete <token> <sender> <receiver> [user-data]

index create <token> <index-id> [user-data]
index update <token> <index-id> <index-value> [user-data]

distribute <token> <index-id> <amount> [user-data]

subscription approve <token> <index-id> <publisher> [user-data]
subscription update <token> <index-id> <subscriber> <units> [user-data]
subscription revoke <token> <index-id> <publisher> [user-data]
subscription delete <token> <index-id> <subscriber> <publisher> [user-data]

claim <token> <index-id> <subscriber> <publisher> [user-data]

call <superapp> <method-signature> [...params]
```
## Example (wrap DAIx and create a flow):
```
token pre-approve token:fDAI token:fDAIx 100e18 // approve token upgrade
token upgrade token:fDAIx 100e18 // upgrade 100 DAI to DAIx
flow create token:fDAIx 0x40aD5B5b40066432c7A9c876e2C78B4a7564f0dB 1e18/mo // transfer 1 DAIx/month
```

## More information

This project was created during the ETHAmsterdam 2022 Hackathon. You can find more information in the [project page](https://showcase.ethglobal.com/ethamsterdam/superfluid-vortex-d5qwv).