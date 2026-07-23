import { useEffect } from "react";
import { findArticle } from "../data";
import { navigate } from "../router";

export default function ArticlePage({ slug }: { slug: string }) {
  const article = findArticle(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const backToJournal = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/#journal");
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-cream dot-grid">
        <div className="framed max-w-[820px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <h1 className="font-display font-bold uppercase text-3xl md:text-5xl text-maroon-deep mb-6">
            Article not found
          </h1>
          <a
            href="/#journal"
            onClick={backToJournal}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-maroon hover:gap-2.5 transition-all"
          >
            <span aria-hidden>←</span> Back to journal
          </a>
        </div>
      </div>
    );
  }

  const body = article.body ?? [article.excerpt];
  const heroImage = article.images?.[0];
  const extraImages = article.images?.slice(1) ?? [];

  return (
    <div className="min-h-screen bg-cream dot-grid">
      <article className="framed max-w-[820px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <a
          href="/#journal"
          onClick={backToJournal}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-maroon hover:gap-2.5 transition-all mb-10"
        >
          <span aria-hidden>←</span> Back to journal
        </a>

        <div className="flex items-center gap-2 mb-4 text-[11px] font-semibold uppercase tracking-wide text-maroon">
          <span>{article.category}</span>
          <span className="text-maroon-deep/30" aria-hidden>
            ·
          </span>
          <span className="text-maroon-deep/50">{article.date}</span>
        </div>

        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-maroon-deep leading-tight mb-8">
          {article.title}
        </h1>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-blue-light/40 mb-10">
          {heroImage ? (
            <img
              src={heroImage}
              alt={article.title}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-display font-bold text-6xl text-maroon-deep/20">
                {article.fallbackLabel}
              </span>
            </div>
          )}
        </div>

        <div className="space-y-5">
          {body.map((p, i) => (
            <p key={i} className="text-base md:text-lg text-maroon-deep/80 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {extraImages.map((src, i) => (
          <div
            key={src}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-blue-light/40 mt-10"
          >
            <img
              src={src}
              alt={`${article.title} — ${i + 2}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </article>
    </div>
  );
}
