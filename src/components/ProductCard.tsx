import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { getWhatsAppLink } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-4 md:p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.categoryLabel}
        </span>
        <Link to={`/product/${product.slug}`}>
          <h3 className="mt-1 font-serif text-lg font-semibold text-foreground transition-colors hover:text-accent">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {product.shortDesc}
        </p>
        <a
          href={getWhatsAppLink(product.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-all hover:bg-primary/90"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Order Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
