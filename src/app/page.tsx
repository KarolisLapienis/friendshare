import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/fd71e2a2-fc6d-4ec1-a8c5-ce14f3ded92d-65dpc7.jpg",
  "https://utfs.io/f/8ac6fb93-b1a7-44e7-8c00-8ec80a066adb-uxtyud.jpg",
  "https://utfs.io/f/ba313850-e97c-417b-8cf1-4600bfc407ce-7r4by7.jpg",
  "https://utfs.io/f/e3e15efd-a0ab-4b94-84e8-dcef437a947d-pusr3m.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <h1>Welcome to t3 gallery</h1>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
