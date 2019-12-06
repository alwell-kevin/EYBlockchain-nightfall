import { Schema } from 'mongoose';

export default new Schema(
  {
    ft_commitment_value: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    ft_commitment: {
      type: String,
      unique: true,
      required: true,
    },
    ft_commitment_index: {
      type: Number,
      required: true,
    },

    // receiver info
    receiver: String,

    batch_transfer: [
      {
        ft_commitment_value: String,
        salt: String,
        ft_commitment: String,
        ft_commitment_index: String,
        receiver: String,
      },
    ],

    // coin info transferred to receiver
    transferred_ft_commitment_value: String,
    transferred_salt: String,
    transferred_ft_commitment: String,
    transferred_ft_commitment_index: String,

    // coin info of change got from transfer
    change_ft_commitment_value: String,
    change_salt: String,
    change_ft_ommitment: String,
    change_ft_commitment_index: Number,

    // boolean stats
    is_minted: Boolean,
    is_transferred: Boolean,
    is_burned: Boolean,
    is_received: Boolean,
    is_change: Boolean,
    is_batch_transferred: Boolean,

    // boolean stats - correctness checks
    coin_commitment_reconciles: Boolean, // for a given A, pk, S and z, do we have that h(A,pk,S)=z?
    coin_commitment_exists_onchain: Boolean, // does z exist on-chain?
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);
