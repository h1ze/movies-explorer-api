const { ValidationError, CastError, DocumentNotFoundError } = require('mongoose').Error;
const Movie = require('../models/movie');
const ForbiddenError = require('../errors/forbidden-err');
const BadRequestError = require('../errors/bad-request-err');
const NotFoundError = require('../errors/not-found-err');

module.exports.getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send({ data: movies }))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country, director, duration, year, description, image, trailerLink,
    thumbnail, movieId, nameRU, nameEN,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  })
    .then((movie) => movie.populate('owner'))
    .then((movie) => res.status(201).send({ data: movie }))
    .catch((err) => {
      if (err instanceof ValidationError) {
        next(new BadRequestError('Некорректные данные при запросе'));
      } else {
        next(err);
      }
    });
};

module.exports.deleteMoviedByID = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .orFail()
    .then((movie) => {
      if (movie.owner._id.toString() !== req.user._id) {
        throw new ForbiddenError('Нельзя удалить чужие фильмы!');
      }
      movie.deleteOne()
        .then(() => res.send({ message: 'Фильм успешно удален' }))
        .catch(next);
    })
    .catch((err) => {
      if (err instanceof CastError) {
        next(new BadRequestError('Некорректные данные при запросе'));
      } else if (err instanceof DocumentNotFoundError) {
        next(new NotFoundError(`Не найден фильм с ID ${req.params.movieId}`));
      } else {
        next(err);
      }
    });
};
