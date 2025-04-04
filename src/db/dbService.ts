import { Student } from "../types/student";
class DBService {

    private initialized : boolean = false;
    constructor() { 
        this.initialized = false;
    }

    async getStudents() : Promise<Student[]> {
        if (!this.initialized) {
            throw new Error("Database not initialized");
        }
        return [];
    }
}

export default DBService;