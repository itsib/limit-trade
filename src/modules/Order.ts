import { Address } from "@graphprotocol/graph-ts"

export const OPEN = 'open'
export const EXECUTED = 'executed'
export const CANCELLED = 'cancelled'

export function getAddressByNetwork(network: string): Address {
  if (network == 'mainnet') {
    return Address.fromString('0xC632734C623659916694126a2793d8EC11485137')
  } if (network == 'kovan') {
    return Address.fromString('0xC632734C623659916694126a2793d8EC11485137')
  }

  throw 'No Address specified'
}