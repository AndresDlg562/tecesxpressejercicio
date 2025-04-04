import DBService from "../dbService";
import { Student } from "../../types/student";

class FakeDBService extends DBService {
    private dummyData: Student[];

    constructor() {
        super();

        const dummyData: Student[] = [
            { matricula: "123456", nombre: "Juan Perez", calificacion: 85, deuda: 0 },
            { matricula: "654321", nombre: "Maria Lopez", calificacion: 75, deuda: 100 },
            { matricula: "789012", nombre: "Carlos Gomez", calificacion: 65, deuda: 0 },
            { matricula: "345678", nombre: "Ana Torres", calificacion: 50, deuda: 200 },
        ];

        this.dummyData = dummyData;
    }

    async getStudents() {
        return this.dummyData;
    }
}

export default FakeDBService;