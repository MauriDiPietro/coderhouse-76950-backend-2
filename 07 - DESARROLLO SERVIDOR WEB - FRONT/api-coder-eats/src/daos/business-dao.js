import { BusinessModel } from "../models/business-model.js"
import MongoDao from "./mongo-dao.js"

class BusinessDao extends MongoDao {
    constructor(model) {
        super(model)
    }
}

export const businessDao = new BusinessDao(BusinessModel)