import express from 'express';
import {createArtist, getByArtistName, getByGenre, getByTitle} from '../controllers/artist';
import {multerUploads} from '../Utils/multer'
import {createGenre, getAllGenre} from '../controllers/genres';

const router = express.Router();

router.post('/api/v1/artist', multerUploads, createArtist);
router.post('/api/v1/genre', createGenre);
router.get('/api/v1/genre', getAllGenre);
router.get('/api/v1/artist/:name', getByArtistName);
router.get('/api/v1/artist/genre/:genreId', getByGenre);
router.get('/api/v1/artist/title/:title', getByTitle);

export default router;