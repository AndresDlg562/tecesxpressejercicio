import { Student } from "../types/student";
import DBService from "../db/dbService";

class StudentController {

    service: DBService;
    constructor(service) {
        this.service = service;
    }

    getStatus(calificacion : number, deuda: number): "Aprobado" | "Pendiente" | "Reestructura" | "Expulsado" {
        if (calificacion >= 70 && deuda === 0) {
            return "Aprobado";
        } else if (calificacion >= 70 && deuda > 0) {
            return "Pendiente";
        } else if (calificacion < 70 && deuda === 0) {
            return "Reestructura";
        } else {
            return "Expulsado";
        }
    }

    async getStudents() {
        const students : Student[] = await this.service.getStudents();

        return students.map((student) => {
            return {
                matricula: student.matricula,
                nombre: student.nombre,
                estatus: this.getStatus(student.calificacion, student.deuda),
            };
        });
    }
}

export default StudentController;