import jwtEncode from "jwt-encode"
import jwtDecode from "jwt-decode"
import { User } from "../$shared/types";

const JWT_SECRET = "MY_SECRET";

class Database {
    static getUsers() {
        return JSON.parse(localStorage.getItem("db-users") || "[]");
    }

    static addUser(user: User) {
        const users = Database.getUsers();
        localStorage.setItem("db-users", JSON.stringify([...users, user]))
    }
}

export const login = (username: string, password: string): string => {
    const users: User[] = Database.getUsers();

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        throw new Error("Invalid username or password")
    }
    // Usually we send it via a HTTP only cookie
    return jwtEncode(user.username, JWT_SECRET);
};


export const register = (userData: User): string => {
    const users: User[] = Database.getUsers();
    const user = users.find(u => u.username === userData.username);
    if (user) {
        throw new Error("User already exists")
    }
    Database.addUser(userData)
    // Usually we send it via a HTTP only cookie
    return jwtEncode(userData.username, JWT_SECRET);

};


// Usually we send token in header or cookie
export const fetchConnectedUser = (token: string): User => {
    const payload = jwtDecode(token)
    const users: User[] = Database.getUsers();
    const user = users.find(user => user.username === payload);
    if (!user) {
        throw new Error("Invalid token")
    }
    return user;
}