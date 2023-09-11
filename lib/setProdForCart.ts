type SetProdForCart = {
  quantity: number;
  id: string;
  size: string;
  setProdQuantity: (quantity: number) => void;
  setProdId: (id: string) => void;
  setProdSize: (size: string) => void;
};

export default function setProdForCart(
  quantity,
  id,
  size,
  setProdQuantity,
  setProdId,
  setProdSize
) {
  setProdQuantity(quantity);
  setProdId(id);
  setProdSize(size);
  //   display();
}
