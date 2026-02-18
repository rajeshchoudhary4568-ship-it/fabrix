import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 p-10">
      <h1 className="text-4xl font-bold text-zinc-900">
        Fabrix
      </h1>

      <p className="mt-4 text-lg text-zinc-600">
        Grey & finished fabric marketplace
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">
          Available Fabrics
        </h2>

        <p className="mt-2 text-zinc-500">
          Fabric listings will appear here
        </p>
      </section>
    </main>
  );
}
