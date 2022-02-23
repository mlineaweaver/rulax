// Team interfaces
export type Position = 'Attack' | 'Midfield' | 'Defense' | 'Goalie';

export type Title = 'Head Coach' | 'Assistant Coach' | 'Volunteer Assistant Coach' | 'Graduate Assistant Coach';

export interface Person {
    // id: string; will add back when we start using the database
    name: string;
    hometown: string;
}

export interface Players extends Person {
    gradYear: string;
    position: Position;
    number: string;
}

export interface Staff extends Person {
    title: Title;
    college: string;
    bio: string;

}

// Registration Interfaces

export interface Registration {
    playerSignup: PlayerSignup;
    purchaseSignup: PurchaseSignup;
}
export interface PlayerSignup {
    playerName: string;
    playerDOB: Date;
    PlayerGradYear: string;
    parentName: string;
    parentPhone: string;
    parentEmail: string;
}

export interface PurchaseSignup {
    dayCamper: boolean;
    overnightCamper: boolean;
    tShirt: boolean;
    gatorade: boolean;
    chips: boolean;
    candy: boolean;
}