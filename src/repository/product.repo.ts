import { ProductSchema } from '../model/product.model';
import { IPRODUCT } from '../documents/IPRODUCT';
export class MainProduct {
  constructor() {}
  getProduct(_id: string) {
    return ProductSchema.findById(_id);
  }
  saveProduct(Product: IPRODUCT) {
    return new ProductSchema(Product).save();
  }
  updateProduct(Admmin: IPRODUCT) {
    return ProductSchema.findByIdAndUpdate(Admmin._id, Admmin, {
      new: true
    });
  }
  deletProduct(_id: string) {
    return ProductSchema.findByIdAndDelete(_id);
  }
  getProductslist() {
   return ProductSchema.find();
  }
}