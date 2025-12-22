export const MAP_CONFIG = {
  imageSize: 4096,
  tileSize: 512,
  maxZoom: 3,
};

export const MAP_CENTER: [number, number] = [MAP_CONFIG.tileSize / 2, MAP_CONFIG.tileSize / 2];

export const getCoord = ([x, y]: [number, number], imageSize: number = MAP_CONFIG.imageSize): [number, number] => [
  (-y / imageSize) * MAP_CONFIG.tileSize,
  (x / imageSize) * MAP_CONFIG.tileSize,
];
