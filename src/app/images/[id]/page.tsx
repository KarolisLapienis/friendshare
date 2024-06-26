import { getImage } from "~/server/queries";

export default async function Image({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(imageId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid image ID");

  const image = await getImage(idAsNumber);
  return (
    <div>
      <img src={image.url} alt={image.name} className="w-auto" />
    </div>
  );
}
