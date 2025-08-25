interface GameSettings {
    pixelate: boolean;
    zoom: boolean;
    grayscale: boolean;
    spin: boolean;
    blink_and_miss: boolean;
    blur: boolean;
    mini: boolean;
    // Add more game settings as needed
}

const defaultGameSettings: GameSettings = {
  pixelate: false,
  zoom: false,
  grayscale: false,
  spin: false,
  blink_and_miss: false,
  blur: false,
  mini: false,
};

export default GameSettings;
export { defaultGameSettings };
