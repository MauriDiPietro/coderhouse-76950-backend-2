export default class ProductController {
  constructor(service) {
    this.service = service;
  }

  create = async (req, res) => {
    try {
      const response = await this.service.create(req.body);
      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  getAll = async (req, res) => {
    try {
      const response = await this.service.getAll();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await this.service.getById(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await this.service.update(id, req.body);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await this.service.delete(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
}