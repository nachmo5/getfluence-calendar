import { login, register, fetchConnectedUser } from "./mock-api";
import { Mutation, Query, User } from "../$shared/types";

const getToken = (): string | null => localStorage.getItem("user-token");
const setToken = (token: string): void =>
  localStorage.setItem("user-token", token);
const deleteToken = (): void => localStorage.removeItem("user-token");

const queries: Query[] = [
  {
    name: "auth.current-user",
    service: async (): Promise<User | null> => {
      const token = getToken();
      if (!token) {
        return null;
      }
      return fetchConnectedUser(token);
    },
    refresh: ["auth.register", "auth.login", "auth.logout"],
  },
];

const mutations: Mutation[] = [
  {
    name: "auth.login",
    service: async (username: string, password: string): Promise<string> => {
      const token = login(username, password);
      setToken(token);
      return token;
    },
  },
  {
    name: "auth.register",
    service: async (userData: User): Promise<string> => {
      const token = register(userData);
      setToken(token);
      return token;
    },
  },
  {
    name: "auth.logout",
    service: async () => {
      deleteToken();
    },
  },
];

const requests = { queries, mutations };

export default requests;
