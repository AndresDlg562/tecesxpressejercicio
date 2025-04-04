import { Router } from "express";

// Ensure the correct path to the student.controller file
import StudentController from "../controllers/student";
import StudentHttpHandler from "../handlers/student";
import DBFactory from '../db/factory';
const router = Router();

const dbService = DBFactory.create();
const studentController = new StudentController(dbService);
const studentHttpHandler = new StudentHttpHandler(studentController);

router.get("/students", studentHttpHandler.getStudents.bind(studentHttpHandler));
export default router;
