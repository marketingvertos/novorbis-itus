import { useEffect, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { loadScripts } from "@/lib/load-scripts";

export type PageMeta = {
  title: string;
  tags: Array<{ name?: string; property?: string; content: string }>;
  canonical?: string;
  jsonLd?: object[];
};

type Props = {
  meta: PageMeta;
  /** Classic scripts from public/js that add this page's behaviour, in load order. */
  scripts?: string[];
  children: ReactNode;
};

/** Sets the page's SEO tags and runs its behaviour scripts once the markup is mounted. */
export default function PageShell({ meta, scripts = [], children }: Props) {
  useEffect(() => {
    void loadScripts(scripts);
    // Scripts run once per page load; links between pages are full page loads.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        {meta.tags.map((t, i) =>
          t.name ? <meta key={i} name={t.name} content={t.content} /> : <meta key={i} property={t.property} content={t.content} />,
        )}
        {meta.canonical && <link rel="canonical" href={meta.canonical} />}
        {meta.jsonLd?.map((j, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(j)}
          </script>
        ))}
      </Helmet>
      {children}
    </>
  );
}
