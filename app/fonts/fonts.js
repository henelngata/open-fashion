import { Tenor_Sans, Bodoni_Moda } from "next/font/google";

const tenor = Tenor_Sans({ subsets: ["latin"], weight: ["400"] })
const bodoni = Bodoni_Moda({subsets:["latin"], weight:["400","500","700"], style:["italic", "normal"]})
export {
    tenor,
    bodoni
}