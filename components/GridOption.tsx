import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image?: string;
  className?: string;
};

function GridOption({ title, image, className }: Props) {
  return (
    <Link
      href={{ pathname: "/search", query: { q: title.toString() } }}
      className={cn("grid-option relative", className)}
    >
      <h2 className="text-xl font-bold">{title}</h2>

      {image && (
        <Image
          src={image}
          alt={title}
          layout="fill"
          className="object-cover opacity-20 rounded-md"
        />
      )}
    </Link>
  );
}

export default GridOption;
