import type z from "zod";
import type { CryptoCurrencyResponseSchema, CryptoPriceSchema, CurrencySchema, PairCurrency } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency =z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairCurrency>
export type CryptoPrice = z.infer <typeof CryptoPriceSchema>