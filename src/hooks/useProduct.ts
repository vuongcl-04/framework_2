import { useNavigate, useParams } from "react-router-dom";
import {
  addProduct,
  deleteProduct,
  editProduct,
  Product,
} from "../services/product";
import toast from "react-hot-toast";

export function useAuth() {
  const { id } = useParams();
  const nav = useNavigate();
  function handleAdd(values: Product) {
    addProduct(values).then(() => {
      toast.success("Thanh Cong");
      nav("/product/list");
    });
  }
  function handleEdit(values: Product) {
    if (!id) return;
    editProduct(id, values).then(() => {
      toast.success("Thanh Cong");
      nav("/product/list");
    });
  }
  function handleDelete(id: string) {
    deleteProduct(id).then(() => {
      toast.success("Thanh Cong");
      location.reload();
    });
  }
  return {
    handleAdd,
    handleEdit,
    handleDelete,
  };
}
