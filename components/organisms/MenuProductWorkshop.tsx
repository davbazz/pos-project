import { supabase } from "@/lib/clientSupabase";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useContext } from "react";
import { ProductWorkshopContext } from "@/components/providers/ProductWorkshopProvider";
import type { ProductType } from "@/types/ProductType";
import Flex from "../atoms/Flex";
import SubText from "../atoms/SubText";
import InputLabel from "../atoms/InputLabel";
import ProductImg from "../atoms/ProductImg";
import ProductWorkshopButton from "../atoms/ProductWorkshopButton";
import Input from "../atoms/Input";
import SelectLabel from "../atoms/SelectLabel";

export default function MenuProductWorkshop() {
  const [file, setFile] = useState<File>();
  const [uniqueID, setUniqueID] = useState<string>();
  const [available, setAvailable] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [size, setSize] = useState<string[]>([]);
  const [price, setPrice] = useState<number[]>([]);
  const [ingredients, setIngredients] = useState<string>("");

  const { productWorkshop, setProductWorkshop } = useContext(
    ProductWorkshopContext
  ) as {
    productWorkshop: ProductType;
    setProductWorkshop: (prod: ProductType) => void;
  };

  // set size to input value
  const updateSize = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = e.target.value;
    setSize((prev) => {
      const newArr = [...prev];
      newArr[i] = newSize;
      return newArr;
    });
    console.log(size);
  };

  // set price to input value
  const updatePrice = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.split("");
    if (value[value.length - 1] === ".") {
      setPrice((prev) => {
        const newArr = [...prev];
        newArr[i] = e.target.value;
        console.log(newArr);
        return newArr;
      });
    } else {
      setPrice((prev) => {
        const newArr = [...prev];
        newArr[i] = parseFloat(e.target.value);
        console.log(newArr);
        return newArr;
      });
    }
  };

  // add 1 more row to size and price
  const addSizePrice = () => {
    const newSize = [...size, ""];
    const newPrice = [...price, 0];
    console.log(newSize);
    console.log(newPrice);
    setSize(newSize);
    setPrice(newPrice);
  };

  const removePriceSize = (i: number) => {
    const newSize = [...size];
    const newPrice = [...price];
    newSize.splice(i, 1);
    newPrice.splice(i, 1);
    setSize(newSize);
    setPrice(newPrice);
  };

  // set product workshop to zero value
  const setProductWorkshopToZeroValue = async () => {
    const newProd = {
      product_name: "",
      category_name: category,
      user_id: (await supabase.auth.getUser()).data.user?.id,
      description: "",
      price: [0],
      size: [""],
      img_url: "",
      ingredients: "",
      available: true,
    };
    setProductWorkshop(newProd);
  };

  // check on which function to fire (create or update) based on existense of product ID
  const checkProductID = () => {
    if (productWorkshop?.id) {
      console.log("updating existing product");
      handleUpdateProduct();
    } else {
      console.log("creating new product");
      handleCreateProduct();
    }
  };

  // collection of functions to create a new product and set prod workshop to zero value
  const handleCreateProduct = async () => {
    await uploadImg();
    await listingOrder();
    await createProduct();
    await setProductWorkshopToZeroValue();
  };

  // upload new img and return a link for it
  const uploadImg = async () => {
    if (file) {
      const user = (await supabase.auth.getSession()).data.session?.user.id;
      const { data, error } = await supabase.storage
        .from("product_img")
        .upload(`${user}/${uniqueID}`, file, {
          upsert: true,
        });

      if (error) {
        console.log(error.message);
        return;
      }
      if (data) {
        console.log("file has been suncessfullyy uploaded");
        return (
          process.env.NEXT_PUBLIC_PRODUCT_IMG_LINK + "/" + user + "/" + uniqueID
        );
      }
    }
  };

  // get the last listing order of the user of the category and return it
  const listingOrder = async () => {
    const { data, error } = await supabase
      .from("menu_products")
      .select("listing_order")
      .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
      .eq("category_name", category)
      .order("listing_order", { ascending: false })
      .limit(1);
    if (error) {
      console.log(error.message);
    }
    if (data !== null && data.length > 0) {
      return data[0].listing_order + 1;
    }
    if (data === null || data!.length === 0) {
      return 1;
    }
  };

  // create new product in the database and return the data
  const createProduct = async () => {
    const { data, error } = await supabase
      .from("menu_products")
      .insert([
        {
          id: uniqueID,
          user_id: (await supabase.auth.getUser()).data.user?.id,
          product_name: name,
          category_name: category,
          description: description,
          size: size,
          price: price,
          img_url: await uploadImg(),
          available: available,
          ingredients: ingredients,
          listing_order: await listingOrder(),
        },
      ])
      .select();
    if (error) {
      console.log(error);
      return error.message;
    }
    if (data) {
      console.log("product has been successfully added");
      console.log(data);
    }
  };

  // collection of functions to update an existing product and set prod workshop to zero value
  const handleUpdateProduct = async () => {
    let update: any;
    if (productWorkshop.product_name !== name) {
      update = { ...update, product_name: name };
    }
    if (productWorkshop.category_name !== category) {
      update = { ...update, category_name: category };
    }
    if (productWorkshop.description !== description) {
      update = { ...update, description: description };
    }
    if (productWorkshop.size !== size) {
      update = { ...update, size: size };
    }
    if (productWorkshop.price !== price) {
      update = { ...update, price: price };
    }
    if (productWorkshop.available !== available) {
      update = { ...update, available: available };
    }
    if (productWorkshop.ingredients !== ingredients) {
      update = { ...update, ingredients: ingredients };
    }

    if (update) {
      updateProduct(update);
    }
    if (file) {
      updateImg();
    }

    await setProductWorkshopToZeroValue();
  };

  const updateImg = async () => {
    const { data, error } = await supabase.storage
      .from("product_img")
      .update(
        (await supabase.auth.getUser()).data.user!.id +
          "/" +
          productWorkshop.id,
        file,
        {
          upsert: true,
        }
      );
    if (error) {
      console.log(error.message);
      return error.message;
    }
    if (data) {
      console.log("new img has been successfully updated");
      console.log(data);
    }
  };

  const updateProduct = async (update: string) => {
    const { data, error } = await supabase
      .from("menu_products")
      .update(update)
      .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
      .eq("id", productWorkshop.id)
      .select();
    if (error) {
      console.log(error.message);
      return error.message;
    }
    if (data) {
      console.log("product has been successfully updated");
      console.log(data);
    }
  };

  const handleDeleteProduct = async () => {
    await deleteProduct();
    await deleteImg();
    await setProductWorkshopToZeroValue();
  };

  const deleteProduct = async () => {
    const { data, error } = await supabase
      .from("menu_products")
      .delete()
      .eq("user_id", (await supabase.auth.getUser()).data.user!.id)
      .eq("id", productWorkshop.id)
      .select();
    if (error) {
      console.log(error.message);
    }
    if (data) {
      console.log("product has been successfully deleted");
    }
  };

  const deleteImg = async () => {
    if (productWorkshop.img_url) {
      const { data, error } = await supabase.storage
        .from("product_img")
        .remove([
          (await supabase.auth.getUser()).data.user!.id +
            "/" +
            productWorkshop.id,
        ]);
      if (error) {
        console.log(error.message);
        return;
      }
      if (data) {
        console.log("img has been successfully deleted");
      }
    }
  };

  useEffect(() => {
    // set all the state variables from the product workshop
    setAvailable(productWorkshop?.available);
    setName(productWorkshop?.product_name);
    setCategory(productWorkshop?.category_name);
    setDescription(productWorkshop?.description);
    setSize(productWorkshop?.size);
    setPrice(productWorkshop?.price);
    setIngredients(productWorkshop?.ingredients);
    console.log(productWorkshop);

    // create id for the product if it doesn't exist
    // same id is used for img url
    if (!productWorkshop?.id) {
      setUniqueID(uuidv4());
    }
  }, [productWorkshop]);

  return (
    <aside>
      {productWorkshop && (
        <Flex className="flex-col">
          <ProductImg
            src={
              productWorkshop.img_url
                ? productWorkshop.img_url
                : process.env.NEXT_PUBLIC_PRODUCT_IMG_DEFAULT_LINK
            }
            alt={name}
          />
          <Input
            type="file"
            id={`${productWorkshop.product_name} img`}
            onChange={(e) => setFile(e.target.files![0])}
          />
          <SubText onClick={() => setAvailable(!available)}>
            {available ? "Available" : "Unavailable"}
          </SubText>
          <SelectLabel
            category={category}
            setCategory={setCategory}
          ></SelectLabel>
          <InputLabel
            label="Name"
            htmlFor="name"
            placeholder="e.g Latte"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputLabel
            label="Description"
            htmlFor="description"
            placeholder="e.g Soft drink with milk"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {productWorkshop && (
            <Flex className="flex-col">
              {size?.map((s, i) => (
                <Flex className="" key={i}>
                  <InputLabel
                    label="Size"
                    htmlFor={`size${i}`}
                    placeholder="e.g Small"
                    id={`size${i}`}
                    value={(size && size[i]) || ""}
                    onChange={(e) => updateSize(i, e)}
                  />
                  <InputLabel
                    label="Price"
                    htmlFor={`price${i}`}
                    placeholder="e.g 3.19"
                    id={`price${i}`}
                    value={price[i] || 0}
                    onChange={(e) => updatePrice(i, e)}
                  />
                  <button onClick={() => removePriceSize(i)}>-</button>
                  {i === size.length - 1 && (
                    <button onClick={addSizePrice}>+</button>
                  )}
                </Flex>
              ))}
            </Flex>
          )}
          <InputLabel
            label="Ingredients"
            htmlFor="ingredients"
            placeholder="e.g Coffee, Milk, Sugar"
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <ProductWorkshopButton onClick={checkProductID}>
            Save
          </ProductWorkshopButton>
          <ProductWorkshopButton onClick={handleDeleteProduct}>
            Delete
          </ProductWorkshopButton>
        </Flex>
      )}

      {productWorkshop === null && (
        <SubText>Choose product of select existing one</SubText>
      )}
    </aside>
  );
}
