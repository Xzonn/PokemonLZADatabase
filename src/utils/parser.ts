export const parseTSV = <T>(raw: string, handleDict: (dict: Record<string, string>, index: number) => T): T[] => {
  const lines = raw.trim().split("\n");
  const header = lines[0].split("\t");

  return lines.slice(1).map((line, index) => {
    const parts = line.split("\t");
    const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
    return handleDict(dict, index);
  });
};
