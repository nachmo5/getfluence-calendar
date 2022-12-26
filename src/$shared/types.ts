export interface Request {
    name: string;
    service: Function;
}

export interface Query extends Request {
    defaultValue?: any;
    refresh?: string[];
    subscribe?: Record<string, Function>;
}

export interface Mutation extends Request { }

export type QueryResult<T> = [T, boolean, string];

export interface User {
    username: string;
    password: string;
    city: string;
}