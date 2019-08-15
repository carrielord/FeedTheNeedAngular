export interface Posting {
    PostID?: number;	
    UserID?: string;	
    Title:	string;	
    Details: string;	
    Address: string;	
    City: string;
    State: string;	
    NameOfProvider:	string;	
    Category: string;	
    DatePosted?: string;	
    DateAvailable: Date;	
    IsCompleted?: boolean;
}