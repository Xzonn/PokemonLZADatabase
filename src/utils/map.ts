export const MAP_CONFIG = {
  imageWidth: 4096,
  imageHeight: 4096,
  boundaryWidth: 512,
  boundaryHeight: 512,
  tileSize: 512,
  maxZoom: 3,
};

export const MAP_CENTER: [number, number] = [MAP_CONFIG.boundaryWidth / 2, MAP_CONFIG.boundaryHeight / 2];

export const getCoord = ([x, y]: [number, number]): [number, number] => [
  (-y / MAP_CONFIG.imageHeight) * MAP_CONFIG.boundaryHeight,
  (x / MAP_CONFIG.imageWidth) * MAP_CONFIG.boundaryWidth,
];
