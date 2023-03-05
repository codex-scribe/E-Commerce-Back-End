const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [{model: Product}]
  })
  .then((tagData) => {
    res.json(tagData)
  })
  .catch((err) => {
    res.status(400).json(err)
  })
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }] 
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that ID.'});
      return;
    }
    res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err)
  }

});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((tag) => {
    res.status(200).json(tag);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, { 
    where: {
      id: req.params.id
    }
  })
  .then((tag) => {
    res.json(tag)
  })
  .catch((err) => res.status(400).json(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((deletedTag) => res.json(deletedTag))
    .catch((err) => res.json(err))
});

module.exports = router;
