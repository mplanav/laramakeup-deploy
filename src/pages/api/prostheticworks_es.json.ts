import { sanity } from "../../lib/sanityClient";
import { galleryPageQuery } from "../../lib/queries";

export async function GET() {
  const slug = "prosthetic";

  const prosthetic = await sanity.fetch(galleryPageQuery, { slug });

  const images = prosthetic?.images?.map(i => i.asset.url) || [];
  const videos = prosthetic?.videos?.map(v => v.asset.url) || [];

  return new Response(JSON.stringify({ images, videos }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
