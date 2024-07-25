import { Organic } from "@/typings/searchTypings";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

function Product({ product }: { product: Organic }) {
  return (
    <Link
      href={{ pathname: "/product", query: { url: product.url } }}
      className="flex flex-col relative border rounded-md h-full p-5"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="mx-auto"
      />

      <p className="text-xl font-bold">
        {product.price?.currency}
        {product.price.price}
      </p>

      {product.badge && (
        <Badge className="w-fit absolute top-2 right-2 bg-red-400">
          {product.badge}
        </Badge>
      )}

      <p className="font-light">{product.title}</p>

      {product.rating &&
        product.rating.rating !== undefined &&
        product.rating.count > 0 && (
          <p className="text-yellow-500 text-sm flex items-center">
            {[1, 2, 3, 4, 5].map((num) => (
              <span key={num}>
                {product.rating.rating >= num
                  ? "★"
                  : product.rating.rating >= num - 0.5
                  ? "☆"
                  : ""}
              </span>
            ))}
            <span className="ml-1">({product.rating.count})</span>
          </p>
        )}
    </Link>
  );
}

export default Product;
