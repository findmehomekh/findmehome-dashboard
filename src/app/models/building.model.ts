import { Time } from "@angular/common";

export class Building{
    owner: string | undefined;
    code: string | undefined;
    name: string | undefined;
    slug: string | undefined;
    description: string | undefined;
    locationg: string | undefined;
    latitude: number | undefined;
    longitude: number | undefined;
    waterPrice: number | undefined;
    electricityPrice: number | undefined;
    parkingPrice: number | undefined;
    bookingFee: number | undefined;
    contractAndTerms: string | undefined;
    curfew: Time | undefined;
}