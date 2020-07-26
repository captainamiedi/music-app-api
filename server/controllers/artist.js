import {
    dataUri
} from '../Utils/multer'
import {
    uploader
} from '../Utils/cloudinayConfig'
import model from '../models';

const {Artist, Genres} = model

export const createArtist = async (req, res) => {
    try {
        let song;
        if (req.file) {
            const file = dataUri(req).content;
            song = await uploader.upload(file)
        }
        console.log(song, '..........')
        const artist =await Artist.create({
            name: req.body.name,
            title: req.body.title,
            description: req.body.description,
            release_date: req.body.release_date,
            song: req.body.song,
            image: req.body.image,
            rating: req.body.rating,
            genreId: req.body.genreId
        });
        return res.status(201).send(artist);
    } catch (error) {
        return res.status(400).send(error)
    }
}

export const getByArtistName = async (req, res) => {
    try {
        const artist =await Artist.findAll({
            where: {
                name: req.params.name
            },
            include: [{
                model: Genres
            }]
        });
        return res.status(200).send(artist);
    } catch (error) {
        return res.status(400).send(error)
    }
}

export const getByGenre = async (req, res) => {
    try {
        const artist = await Artist.findAll({
            where: {
                genreId: req.params.genreId
            },
            include: [{
                model: Genres
            }]
        });

        return res.status(200).send(artist);
    } catch (error) {
        return res.status(400).send(error)
    }
}

export const getByTitle = async (req, res) => {
    try {
        const artist = await Artist.findAll({
            where: {
                title: req.params.title
            },
            include: [{
                model: Genres
            }]
        });

        return res.status(200).send(artist);
    } catch (error) {
        return res.status(400).send(error)
    }
}