import { ActionDispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";
import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  dispatch: ActionDispatch<[action: OrderActions]>

};

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      className="border-2 rounded-xl border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => dispatch({type:'add-item', payload: { item: item}})}
    >
      <p>{item.name}</p>
      <p className="font-black">$ {item.price}</p>
    </button>
  );
}
