import "next-auth";

declare module "next-auth" {
  export interface AdapterUser {
    id: string;
    name: string;
    email: string;
    image: string;
  }

  interface Session {
    user: AdapterUser;
  }
}
