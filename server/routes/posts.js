import express from 'express';

import { getPosts, getPost, createPost, updatePost, bidPost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getPosts);
router.post('/',auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/bidPost', auth, bidPost);

export default router;