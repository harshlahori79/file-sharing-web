import express from "express";
import { uploadHandle,downloadHandle } from "../controller/file-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();


router.post('/upload' ,upload.single('file'),  uploadHandle);

router.get('/file/:fileID' , downloadHandle);

export default router;
