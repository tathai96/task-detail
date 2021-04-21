/* eslint-disable @typescript-eslint/naming-convention */
export interface ReqRes {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data:
        {
            id: number;
            email: string;
            first_name: string;
            last_name: string;
            avatar: any;
        }[];
}
