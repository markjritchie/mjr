export interface Weather {
    city: { name: string, population: number };
    days: { time: any, temperature: number, description: string, icon: string }[];
}