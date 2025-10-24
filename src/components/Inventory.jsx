import { useDrag, useDrop } from "react-dnd";

function InventoryItem({ name, onCombine }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { name },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (dragged) => onCombine(dragged.name, name),
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`w-16 h-16 rounded-lg border border-purple-400 flex items-center justify-center text-sm text-white bg-purple-700/30 cursor-move ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      {name}
    </div>
  );
}

export default function Inventory({ items, onCombine }) {
  return (
    <div className="bg-purple-900/40 border-t border-purple-500 w-full flex justify-center p-4 gap-4">
      {items.map((item, i) => (
        <InventoryItem key={i} name={item} onCombine={onCombine} />
      ))}
    </div>
  );
}
