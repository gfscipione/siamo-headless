// app/head.tsx
export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Preload del HERO para evitar el flash del background */}
      <link rel="preload" as="image" href="/assets/img/hero.webp" />

      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
