import { Howl } from "howler";

export const sounds = {
  bg: new Howl({ src: ["/sounds/ambience.mp3"], loop: true, volume: 0.3 }),
  success: new Howl({ src: ["/sounds/magic.wav"], volume: 0.5 }),
  fail: new Howl({ src: ["/sounds/fail.mp3"], volume: 0.5 }),
  fusion: new Howl({ src: ["/sounds/fusion.mp3"], volume: 0.6 }),
  aura: new Howl({ src: ["/sounds/aura.mp3"], loop: true, volume: 0.4 }),
};
