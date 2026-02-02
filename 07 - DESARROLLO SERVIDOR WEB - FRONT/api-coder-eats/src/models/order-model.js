import { Schema, model} from 'mongoose';

const OrderProductSubSchema = new Schema({
    productId: { type: Schema.Types.ObjectId },
    nombre: { type: String, required: true },
    precioUnitario: { type: Number, required: true },
    cantidad: { type: Number, default: 1 },
})

const OrderSchema = new Schema({
    numeroOrden: { type: String, required: true, unique: true },
    negocio: { type: Schema.Types.ObjectId, ref: "business", required: true },
    usuario: { type: Schema.Types.ObjectId, ref: "user", required: true },
    productos: [OrderProductSubSchema],
    precioTotal: { type: Number, required: true },
})

export const OrderModel = model('order', OrderSchema);