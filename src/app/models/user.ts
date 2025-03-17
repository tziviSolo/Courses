export class User {
    constructor(
        public Name: string,
        public Email: string,
        public Password: string,
        public Role: "student" | "teacher" | "admin" | "Student" | "Teacher" | "Admin"
    ) { }
}