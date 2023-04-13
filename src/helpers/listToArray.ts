export default function listToArray(list: any) {
  const keys = Object.keys(list);

  const array = keys.map((key) => {
    const value = list[key];
    return { key, ...value };
  });

  return array;
}
