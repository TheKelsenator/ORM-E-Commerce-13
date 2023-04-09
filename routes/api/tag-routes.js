const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  Tag.findAll()
  .then((tags) => res.json(tags))
  .catch((error) => res.status(500).json(error))
});

router.get('/:id', async (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
  })
  .then((tag) => res.json(tag))
  .catch((error) => res.status(400).json(error))
});

router.post('/', async (req, res) => {
  Tag.create(req.body)
  .then((tag) => res.status(200).json(tag))
  .catch((error) => res.status(400).json(error))
});

router.put('/:id', async (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((tag) => res.status(200).json(tag))
  .catch((error) => res.status(400).json(error))
});


router.delete('/:id', async (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((tag) => res.status(200).json(tag))
  .catch((error) => res.status(400).json(error))
});


module.exports = router;
