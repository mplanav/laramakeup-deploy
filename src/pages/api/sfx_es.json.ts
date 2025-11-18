import { sanity } from "../../lib/sanityClient";
import { galleryPageQuery } from "../../lib/queries";

export async function GET() {
  const slug = "sfx";

  const sfx = await sanity.fetch(galleryPageQuery, { slug });

  const images = sfx?.images?.map((i) => i.asset.url) || [];
  const videos = sfx?.videos?.map((v) => v.asset.url) || [];

  return new Response(
    JSON.stringify({ images, videos }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}
