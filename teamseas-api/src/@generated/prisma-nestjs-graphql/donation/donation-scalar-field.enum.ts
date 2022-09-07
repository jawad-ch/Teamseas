import { registerEnumType } from '@nestjs/graphql';

export enum DonationScalarFieldEnum {
    id = "id",
    count = "count",
    displayName = "displayName",
    email = "email",
    mobile = "mobile",
    team = "team",
    message = "message",
    createdAt = "createdAt"
}


registerEnumType(DonationScalarFieldEnum, { name: 'DonationScalarFieldEnum', description: undefined })
