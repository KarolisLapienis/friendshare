import { getImage } from "~/server/queries";
import { Modal } from "~/app/components/modal";

export default async function Image({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(imageId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid image ID");

  const image = await getImage(idAsNumber);
  return (
    <Modal title={image.name}>
      <img src={image.url} alt={image.name} className="w-full" />
    </Modal>
  );
}
