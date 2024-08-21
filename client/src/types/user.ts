// src/types/User.ts
export interface User {
    id: string;
    name: string | null; // Ajustez ici pour correspondre aux données réelles
    email: string;
    password?: string | null;
    role: "user" | "admin";
    emailVerified?: string | null;
    image?: string | null;
    createdAt: string;
}
  