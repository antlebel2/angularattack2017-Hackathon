export class EmployerDto {
    summary: {
        name: any;
        city: any;
        stateCode: any;
        phoneNumber: any;
        logoUrl: any;
    }
    
    extendedSummary: {
        addresses: any[];
        founded: any;
        numberOfEmployees: any;
        overview: any;
    }
    
    webStats: {
        onlineSince: any;
        keywords: any[];
        trafficRanking: any[];
    }
    
    socialMedia: {
        profiles: any[]
    }
}