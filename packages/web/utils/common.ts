import { Point } from "../types/common";

export const rectangularCollision = ({ rectangle1, rectangle2 }) => {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
  );
};

export const getDistance = (point1: Point, point2: Point) => {
  const dx = point2.x - point1.x;
  const dy = point2.y - point1.y;
  const directions = [dx > 0 ? "right" : "left", dy > 0 ? "down" : "up"];

  return {
    value: Math.sqrt(dx ** 2 + dy ** 2),
    directions,
  };
};

export const divideByColumns = <T extends any>(items: T[], columns: number) => {
  const dividedItems: T[][] = [];

  for (let i = 0; i < items.length; i++) {
    const columnIndex = i % columns;
    if (!dividedItems[columnIndex]) {
      dividedItems[columnIndex] = [];
    }
    dividedItems[columnIndex].push(items[i]);
  }

  return dividedItems;
};

export function valueOrLastItem<T>(value: T | T[]) {
  if (Array.isArray(value)) {
    return value[value.length - 1];
  }

  return value;
}

// export const checkForCharacterCollision = ({
//   characters,
//   player,
//   characterOffset = {x: 0, y: 0},
// }) => {
//   player.interactionAsset = null
//   // monitor for character collision
//   for (let i = 0; i < characters.length; i++) {
//     const character = characters[i]
//
//     if (
//       rectangularCollision({
//         rectangle1: player,
//         rectangle2: {
//           ...character,
//           position: {
//             x: character.position.x + characterOffset.x,
//             y: character.position.y + characterOffset.y,
//           },
//         },
//       })
//     ) {
//       player.interactionAsset = character
//       break
//     }
//   }
// }
export const range = (start: number, end: number) => {
  const arr: number[] = [];
  const increment = start < end ? 1 : -1;

  if (start === end) {
    return [start];
  }

  for (let i = start; i <= end; i += increment) {
    arr.push(i);
  }

  return arr;
};

export const dedupe = (arr: string[]) => {
  return Array.from(new Set(arr));
};

export const numWithCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
