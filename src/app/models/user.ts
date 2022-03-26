export class User {
    _id: string;
    fullName : string;
    email : string;
    password : string;
    gender? : string;
    dob? : Date;
    mobileNumber : string;
    userType: UserType;
    tags: string[];
    credit?: number;
    signedUpInitiatives?: string[];
}

export enum UserType {
    beneficiary =  'beneficiary',
    volunteer = 'volunteer',
    organisation = 'organisation'
}
