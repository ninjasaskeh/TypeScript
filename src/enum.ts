// default nya enum tu dia valuenya ntar 0, 1, 2, ....
//tapi bisa di ganti jadi kek yg dibawah

export enum CustomerType {
    PLATINUM = 'PLATINUM',
    REGULAR = 'REGULAR',
    GOLD = 'GOLD',

}

export type Customer = {
    id: number;
    name: string;
    type: CustomerType
}