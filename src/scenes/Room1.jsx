export default function Room1({ addItem, goNext }) {
  return (
    <div className="relative w-full h-full bg-[url('/images/room1.jpg')] bg-cover">
      <button onClick={() => addItem("cristal de lumière")} className="absolute left-48 top-72 bg-purple-700/60 p-2 rounded hover:bg-purple-600">✨ Cristal</button>
      <button onClick={() => addItem("clé d’argent")} className="absolute left-64 top-72 bg-blue-700/60 p-2 rounded hover:bg-blue-600">🗝️ Clé</button>
      <button onClick={goNext} className="absolute right-8 bottom-8 bg-green-700/60 p-3 rounded-lg hover:bg-green-600">Aller à la salle suivante →</button>
    </div>
  );
}
