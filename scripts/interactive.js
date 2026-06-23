const readline = require("readline");
const { mask, isValid } = require("../src/index");

const rl = readline.createInterface({ input: process.stdin });

console.log("\n=== cpf-mask interactive ===");
console.log("Type a CPF and press Enter. Ctrl+C to exit.\n");

rl.on("line", (input) => {
  const trimmed = input.trim();
  if (!trimmed) return;

  const formatted = mask(trimmed);
  const valid = isValid(trimmed);

  console.log(`  masked  : ${formatted}`);
  console.log(`  valid   : ${valid ? "✓ yes" : "✗ no"}`);
  console.log();
});
