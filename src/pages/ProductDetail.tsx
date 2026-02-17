import { useParams, Link } from "react-router-dom";
import { MessageCircle, ChevronLeft, Check } from "lucide-react";
import { getProduct, getRelatedProducts, getWhatsAppLink } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProduct(slug || "");

  if (!product) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground">Product Not Found</h1>
          <Link to="/shop" className="mt-4 inline-block text-accent underline">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const related = getRelatedProducts(product.id);

  return (
    <main className="py-10 md:py-16">
      <div className="container">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        {/* Product Detail */}
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {product.categoryLabel}
            </span>
            <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Benefits */}
            <ul className="mt-6 space-y-2">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  {b}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={getWhatsAppLink(product.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              You May Also Like
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
