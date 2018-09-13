import { Cleanup } from "../cleanup/cleanup";

export class Person {
    id: number;
    username: string;
    cleanup: Cleanup;
}