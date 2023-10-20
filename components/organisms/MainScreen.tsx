"use client";

import SelectedCategoryProvider from "../providers/SelectedCategoryProvider";
import MenuCategoriesProvider from "../providers/MenuCategoriesProvider";
import OrderProvider from "../providers/OrderProvider";
import CartProvider from "../providers/CartProvider";

export default function MainScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SelectedCategoryProvider>
      <MenuCategoriesProvider>
        <OrderProvider>
          <CartProvider>
            <article className="ml-[170px] px-6 py-6 bg-alternative">
              {children}
            </article>
          </CartProvider>
        </OrderProvider>
      </MenuCategoriesProvider>
    </SelectedCategoryProvider>
  );
}
