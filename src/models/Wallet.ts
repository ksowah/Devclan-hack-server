import { model, Schema } from "mongoose";

const Wallet = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        default: 0.00,
    }
}, {timestamps: true})

export const WalletModel = model("Wallet", Wallet);