import {z} from 'zod'

export const CurrencySchema = z.object({
    code: z.string(),
    name:z.string()
})

export const CryptoCurrencyResponseSchema = 
    z.object({
    CoinInfo: z.object({
        FullName:z.string(),
        Name:z.string()
    })
})

export const CryptoCurrenciesResponseSchema = z.array(
CryptoCurrencyResponseSchema
)


export const PairCurrency = z.object({
    currency: z.string(),
    cryptocurrency:z.string()
})

export const CryptoPriceSchema = z.object({
    IMAGEURL:z.string(),
    PRICE:z.string(),
    HIGHDAY:z.string(),
    LOWDAY:z.string(),
    CHANGEPCT24HOUR:z.string(),
    LASTUPDATE:z.string()
})