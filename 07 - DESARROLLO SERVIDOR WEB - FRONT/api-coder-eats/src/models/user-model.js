import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  rol: {
    type: String,
    required: true,
    enum: ["admin", "user"],
    default: "user",
  },
  pedidos: [{ type: Schema.Types.ObjectId, ref: "order" }],
});

export const UserModel = model("user", UserSchema);
