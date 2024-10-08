import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItemToCart } from "../utils/CartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left p-2 m-2 border-gray-200 border-b-2 flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-2">
            <div className="absolute">
              <button
                className=" p-2 mx-24 mt-32 bg-white shadow-lg border border-green-500 text-green-500 rounded-lg"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
