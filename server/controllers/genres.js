import model from '../models';

const {Genres} = model;

export const createGenre = async (req, res) => {
    try {
        const genre = await Genres.create({
            name: req.body.name
        });
        return res.status(201).send(genre);
    } catch (error) {
        return res.status(400).send(error);
    }
}

export const getAllGenre =  async (req, res) => {
    try {
        const getGenre = await Genres.findAll();

        return res.status(200).send(getGenre);
    } catch (error) {
        return res.status(400).send(error)
    }
}