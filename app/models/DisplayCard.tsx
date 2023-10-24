import { StaticImageData } from "next/image";

export interface DisplayCard {
    id: number,
    src: StaticImageData
    flipped: boolean,
    disabled: boolean
}