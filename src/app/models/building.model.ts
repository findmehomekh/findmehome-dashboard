import { Time } from "@angular/common";

export class Building{
    id: string | undefined
    landlord: string | undefined;
    code: string | undefined;
    name: string | undefined;
    slug: string | undefined;
    description: string | undefined;
    location: string | undefined;
    latitude: number | undefined;
    longitude: number | undefined;
    waterPrice: number | undefined;
    electricityPrice: number | undefined;
    parkingPrice: number | undefined;
    bookingFee: number | undefined;
    contractAndTerms: string | undefined;
    curfew: string | undefined;
}