import { sanity } from "../../lib/sanityClient";
import { galleryPageQuery } from "../../lib/queries";

export async function GET() {
  const slug = "mould-making";

  const mould = await sanity.fetch(galleryPageQuery, { slug });

  const images = mould?.images?.map((i) => i.asset.url) || [];
  const videos = mould?.videos?.map((v) => v.asset.url) || [];

  return new Response(
    JSON.stringify({ images, videos }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}
