import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getUserImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getUserImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Image
            src={image.url}
            style={{ objectFit: "contain" }}
            width={192}
            height={192}
            alt="{image.name}"
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <p className="p-8 text-center">Please sign in to view the images.</p>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
