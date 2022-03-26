export class Initiative {
    _id: string;
    name : string;
    crisis : Crisis;
    volunteersRequired: number;
    description?: string;
    metaData: Metadata;
    signedUpVolunteers: string[];
    tags: string[]
}

export class Metadata {
    dateInitiated: Date;
    dateModified: Date;
    createdBy: string;
}

export class Crisis {
    _id: string;
    name: string;
    tags: string[];
    details: string;
}
