import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getUserImages } from "~/server/queries";
export const dynamic = "force-dynamic";

async function Images() {
  const images = await getUserImages();

  return (
    <div className=" flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="flex flex-col  duration-300 ease-in-out hover:scale-105"
        >
          <Link key={image.id} href={`/images/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt="{image.name}"
            />
          </Link>
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
