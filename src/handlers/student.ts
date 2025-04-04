import StudentController from "../controllers/student";
import { Student } from "../types/student";

class StudentHttpHandler {
    studentController : StudentController;
    constructor(studentController) {
        this.studentController = studentController;
    }
    
    async getStudents(req, res) {
        try {
            const students = await this.studentController.getStudents();
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching students' });
        }
    }
}

export default StudentHttpHandler;