export interface PostingCreate {
    postID?: number;	
    userID?: string;	
    title:	string;	
    details: string;	
    address: string;	
    city: string;
    state: string;	
    nameOfProvider:	string;	
    category: string;	
    datePosted?: string;	
    dateAvailable: Date;	
    isCompleted?: boolean;
}