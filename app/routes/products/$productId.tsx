import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({context}:LoaderArgs) => {
    return json(
        await context.kmj.get('kyle')
    )
}

export default function Product() {
  const product = useLoaderData<typeof loader>();

  if (!product) throw new Response(null, { status: 404 })

  return (
    <div>
      <p>Kyle</p>
      <p>Record: {product}</p>
      <p>First: {product.first}</p>
      <p>Middle: {product.middle}</p>
      <p>Last: {product.last}</p>
    </div>
  );
}