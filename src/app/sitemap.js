export default async function sitemap() {
  const base = "https://example.com"; // cambia al dominio real
  const routes = [
    "",
    "/juego-responsable",
    "/pais/chile",
    "/pais/peru",
    "/comparativas/operadores",
    "/blog",
    "/legales/privacidad",
    "/legales/cookies",
    "/legales/terminos",
  ];

  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1.0 : 0.7,
  }));
}
