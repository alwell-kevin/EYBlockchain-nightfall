export default function({
  uri,
  tokenId,
  shieldContractAddress,

  receiver,
  receiverAddress,
  sender,
  senderAddress,

  isMinted,
  isTransferred,
  isReceived,
  isBurned,
  isShielded,
}) {
  return {
    [uri ? 'uri' : undefined]: uri,
    [tokenId ? 'token_id' : undefined]: tokenId,
    [shieldContractAddress ? 'shield_contract_address' : undefined]: shieldContractAddress,

    [receiver ? 'receiver' : undefined]: receiver,
    [receiverAddress ? 'receiver_address' : undefined]: receiverAddress,
    [sender ? 'sender' : undefined]: sender,
    [senderAddress ? 'sender_address' : undefined]: senderAddress,

    [isMinted ? 'is_minted' : undefined]: isMinted,
    [isTransferred ? 'is_transferred' : undefined]: isTransferred,
    [isReceived ? 'is_received' : undefined]: isReceived,
    [isBurned ? 'is_burned' : undefined]: isBurned,
    [isShielded ? 'is_shielded' : undefined]: isShielded,
  };
}
