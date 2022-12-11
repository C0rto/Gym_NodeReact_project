import express from 'express';
import {
  createGymCourse,
  deleteGymCourse,
  getGymCourse,
  getGymCourses,
  updateGymCourse,
} from '../server/controller/courses.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
const route = express.Router();

// Crea un corso
route.post('/', verifyAdmin, createGymCourse);
// Modifica un corso
route.put('/:id', verifyAdmin, updateGymCourse);
// Cerca un corso
route.get('/:id', verifyUser, getGymCourse);
// Elimina un corso
route.delete('/:id', verifyAdmin, deleteGymCourse);
// Cerca tutti i corsi
route.get('/', verifyUser, getGymCourses);

export default route;
