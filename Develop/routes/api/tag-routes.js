const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const data = await Tag.findAll({
      attributes: ['id', 'tag_name'],
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const data = await Tag.findOne({
      where: {id: req.params.id},
      attributes: ['id', 'tag_name'],
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
    });
    if(!data) {
      res.status(404).json({message: 'Not found'});
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const data = await Tag.create({
      tag_name: req.body.tag_name
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id',async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const data = await Tag.update(req.body, {
      where: {id: req.params.id}
    });
    if(!data[0]) {
      res.status(404).json({message: 'Ther is no tag with this ID'});
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const data = await Tag.destroy({
      where: {id: req.params.id}
    });
    if(!data) {
      res.status(404).json({message: 'There is no tag with this ID'});
      return;
    }
    res.status(200).json(data);
  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
