export default function Room2({ goBack }) {
  return (
    <div className="relative w-full h-full bg-[url('/images/lab.jpg')] bg-cover">
      <button onClick={goBack} className="absolute left-8 bottom-8 bg-purple-800/60 p-3 rounded-lg hover:bg-purple-600">← Revenir</button>
      <p className="absolute top-8 left-8 text-lg bg-black/40 p-2 rounded">
        Un chaudron bouillonne... Peut-être une potion à créer ?
      </p>
    </div>
  );
}
