import express from 'express';

import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../server/controller/user.js';

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const route = express.Router();

// Crea un utente
route.post('/', verifyAdmin, createUser);

// Modifica un utente
route.put('/:id', verifyUser, updateUser);
// Cerca un utente
route.get('/:id', verifyUser, getUser);
// Elimina un utente
route.delete('/:id', verifyAdmin, deleteUser);
// Cerca tutti gli utente
route.get('/', getUsers, verifyAdmin);

export default route;
