"use client";

import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
//import { useRouter } from "next/navigation";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { Product } from "@/types";
import Link from "next/link";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  // const router = useRouter();

  // const handleClick = () => {
  //   router.push(`/product/${data?.id}`);
  // };

  return (
    <Link
      href={`/product/${data?.id}`}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          className="aspect-square object-cover rounded-md"
          src={data?.images?.[0]?.url}
          alt="Image"
          fill
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton icon={<Expand className="text-gray-600 h-5 w-5" />} />
            <IconButton icon={<ShoppingCart className="text-gray-600 h-5 w-5" />} />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex justify-between items-center">
        <Currency value={data?.price} />
      </div>
    </Link>
  );
};

export default ProductCard;
