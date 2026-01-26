export default class ProductService {
  constructor(repository) {
    this.repository = repository;
  }

  create = async (body) => {
    try {
      const response = await this.repository.create(body);
      if (!response) throw new Error("Error create product");
      return response;
    } catch (error) {
      throw error;
    }
  };

  getAll = async () => {
    try {
      return await this.repository.getAll();
    } catch (error) {
      throw new Error(error);
    }
  };

  getById = async (id) => {
    try {
      const response = await this.repository.getById(id);
      if (!response) throw new Error("Product not found");
      return response;
    } catch (error) {
      throw error;
    }
  };

  update = async (id, body) => {
    try {
      const response = await this.repository.update(id, body);
      if (!response) throw new Error("Error update");
      return response;
    } catch (error) {
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const response = await this.repository.delete(id);
      if (!response) throw new Error("Product not found");
      return response;
    } catch (error) {
      throw error;
    }
  };
}