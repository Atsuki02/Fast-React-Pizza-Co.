import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { delteteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(delteteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
