export type Annonce = {
    type: string;
    title: string;
    authorID: string;
    text: string;
    contact_phone: string;
    contact_email: string;
    contact_name: string;
    photos: string[];
    coverPhoto?: string | null;
};
