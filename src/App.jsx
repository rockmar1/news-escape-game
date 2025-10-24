import { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { sounds } from "./utils/sounds.js";
import MagicParticles from "./components/MagicParticles";
import FusionEffect from "./components/FusionEffect";
import SceneTransition from "./components/SceneTransition";
import Inventory from "./components/Inventory";
import AuraEffect from "./components/AuraEffect";
import Room1 from "./scenes/Room1";
import Room2 from "./scenes/Room2";

export default function App() {
  const [scene, setScene] = useState("room1");
  const [inventory, setInventory] = useState([]);
  const [fusionActive, setFusionActive] = useState(false);
  const [message, setMessage] = useState("Bienvenue dans la tour magique...");

  useEffect(() => {
    sounds.bg.play();
    const saved = JSON.parse(localStorage.getItem("inventory")) || [];
    setInventory(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }, [inventory]);

  const addItem = (item) => {
    if (!inventory.includes(item)) {
      setInventory([...inventory, item]);
      sounds.success.play();
      setMessage(`Tu trouves ${item} !`);
    }
  };

  const combineItems = (a, b) => {
    if ((a === "cristal de lumière" && b === "clé d’argent") || (b === "cristal de lumière" && a === "clé d’argent")) {
      setInventory([...inventory.filter(i => i !== a && i !== b), "clé enchantée"]);
      sounds.fusion.play();
      setFusionActive(true);
      setTimeout(() => setFusionActive(false), 2000);
      setMessage("✨ Une clé enchantée brille d'une aura mystique !");
    } else {
      sounds.fail.play();
      setMessage("Rien ne se passe...");
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white overflow-hidden">
        <MagicParticles />
        <FusionEffect visible={fusionActive} />
        <AuraEffect visible={inventory.includes("clé enchantée")} color="purple" />

        <div className="text-4xl font-bold mb-4 text-purple-300 animate-pulse">🪄 Le Grimoire du Temps</div>

        <SceneTransition show={scene === "room1"}>
          <Room1 addItem={addItem} goNext={() => setScene("room2")} />
        </SceneTransition>

        <SceneTransition show={scene === "room2"}>
          <Room2 goBack={() => setScene("room1")} />
        </SceneTransition>

        <p className="mt-3 text-sm text-purple-200">{message}</p>
        <Inventory items={inventory} onCombine={combineItems} />
      </div>
    </DndProvider>
  );
}
