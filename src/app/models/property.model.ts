import { Building } from './building.model';
export class Property{
    buildingCode: string | undefined;
    code: string | undefined;
    name: string | undefined;
    slug: string | undefined;
    price: number | undefined;
    description: string | undefined;
    floor: number | undefined;
    maxGuest: number | undefined;
    size: string | undefined;
    numBed: number | undefined;
    numBedRoom: number | undefined;
    numBathRoom: number | undefined;
    numKitchen: number | undefined;
    washingMachine: boolean | undefined;
    fridge: boolean | undefined;
    wifi: boolean | undefined;
    securityCam: boolean | undefined;
    airConditioner: boolean | undefined;
    fan: boolean | undefined;
    tv: boolean | undefined;
    balcony: boolean | undefined;
    images: File[] | undefined;
    isActive: boolean | undefined;
}