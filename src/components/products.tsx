import useProducts from "../hook/products";
import IsError from "./iserror";
import Isloading from "./isloading";
import ProductItem from "./productitem";
interface IProduct {
  id: number;
  name: string;
  price: number;
  rate: number;
  quality: string;
  kind: string;
  imageURL: string;
}

const Products = () => {
  const { isError, isLoading, data } = useProducts();

  return (
    <>
      <section className={isLoading || isError ? "h-remain pt-12" : "pt-16 flex flex-wrap justify-between"}>
        {isLoading && <Isloading style="mb-10"/>}
        {isError && <IsError style="text-3xl"/>}
        {data?.data &&
          data?.data.map((product: IProduct) => {
            return (
              <ProductItem
                key={product.id}
                name={product.name}
                price={product.price}
                rate={product.rate}
                quality={product.quality}
                kind={product.kind}
                src={product.imageURL}
                id={product.id}
              />
            );
          })}
      </section>
    </>
  );
};

export default Products;
