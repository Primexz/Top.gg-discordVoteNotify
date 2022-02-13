export interface tggUser {
    discriminator: string,
    id: string,
    username: string,
    defAvatar: string,
    admin: boolean,
    webMod: boolean,
    mod: boolean,
    certifiedDev: boolean,
    supporter: boolean
}