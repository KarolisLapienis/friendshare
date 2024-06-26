export default function Image({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  return <div>{imageId}</div>;
}
