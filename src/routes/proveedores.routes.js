import { Router } from "express";
import { getProveedores, getProveedor, createProveedor, updateProveedor, deleteProveedor } from "../controllers/proveedores.controller.js";

const router = Router()

router.get('/proveedores', getProveedores)

router.get('/proveedores/:id', getProveedor)

router.post('/proveedores', createProveedor)

router.patch('/proveedores/:id', updateProveedor)

router.delete('/proveedores/:id',deleteProveedor)

export default router