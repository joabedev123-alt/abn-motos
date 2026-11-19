import { cp, rm } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const source = path.join(root, "out");

for (const folder of ["dist", "build"]) {
  const destination = path.join(root, folder);
  await rm(destination, { recursive: true, force: true });
  await cp(source, destination, { recursive: true });
}
