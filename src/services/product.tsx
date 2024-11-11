import axios from "axios";

export type Product = {
  name: string;
  image: string;
  quantity: number;
  category: string;
};
export function addProduct(data: Product) {
  return axios.post("http://localhost:3000/products", data);
}
export function editProduct(id: string, data: Product) {
  return axios.put("http://localhost:3000/products/" + id, data);
}
export function deleteProduct(id: string) {
  return axios.delete("http://localhost:3000/products/" + id);
}
export function getDetail(id: string) {
  return axios.get("http://localhost:3000/products/" + id);
}
export function getAll() {
  return axios.get("http://localhost:3000/products");
}
