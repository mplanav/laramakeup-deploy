import { sanity } from "../../lib/sanityClient";
import { galleryPageQuery } from "../../lib/queries";

export async function GET() {
  const slug = "sculpting";

  const sculpting = await sanity.fetch(galleryPageQuery, { slug });

  const images = sculpting?.images?.map((i) => i.asset.url) || [];
  const videos = sculpting?.videos?.map((v) => v.asset.url) || [];

  return new Response(
    JSON.stringify({ images, videos }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}
