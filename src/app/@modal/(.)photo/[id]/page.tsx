export default function Photo({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <div>{photoId}</div>;
}
