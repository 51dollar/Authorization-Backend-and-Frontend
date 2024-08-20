export interface UserDetail {
    id: string;
    fullName: string;
    email: string;
    roles: string[];
    phoneNumber: string;
    twoFactorEnabled: true;
    phoneNumberConfirmed: true;
    accessFailedCount: 0;
}