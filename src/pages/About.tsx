import { Leaf, Heart, Star } from "lucide-react";
import almondsImg from "@/assets/Almonds.jpeg";
import cashewImg from "@/assets/Cashew.jpeg";

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section
        className="parallax-section relative flex min-h-[50vh] items-center justify-center"
        style={{ backgroundImage: `url(${almondsImg})` }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center text-primary-foreground">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">About Us</span>
          <h1 className="mt-3 font-serif text-4xl font-bold md:text-6xl">Our Story</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                A Family Tradition of Quality
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                NanheRam was born from a simple belief — that every family deserves access to the purest, most wholesome dry fruits and snacks. What began as a small family trade has grown into a brand trusted by thousands.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We source directly from trusted farms, ensuring every product meets our rigorous quality standards. No shortcuts, no compromises — just pure, natural goodness in every pack.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src={cashewImg} alt="NanheRam quality cashews" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            What We Stand For
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { icon: Leaf, title: "Purity", desc: "Every product is 100% natural — free from preservatives, colours, and artificial additives." },
              { icon: Heart, title: "Care", desc: "From sourcing to packaging, we handle every step with attention and love." },
              { icon: Star, title: "Quality", desc: "Only the finest, hand-selected ingredients make it into a NanheRam pack." },
            ].map((v) => (
              <div key={v.title} className="rounded-lg bg-card p-8 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
