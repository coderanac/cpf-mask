const { mask, unmask, isValid } = require("../src/index");

const examples = [
  { input: "12345678909",    fn: mask,    label: 'mask("12345678909")' },
  { input: "1234",           fn: mask,    label: 'mask("1234")' },
  { input: "123456",         fn: mask,    label: 'mask("123456")' },
  { input: "123.456.789-09", fn: mask,    label: 'mask("123.456.789-09")' },
  { input: "123.456.789-09", fn: unmask,  label: 'unmask("123.456.789-09")' },
  { input: "529.982.247-25", fn: isValid, label: 'isValid("529.982.247-25")' },
  { input: "111.111.111-11", fn: isValid, label: 'isValid("111.111.111-11")' },
  { input: "00000000000",    fn: isValid, label: 'isValid("00000000000")' },
];

console.log("\n=== cpf-mask demo ===\n");
for (const { input, fn, label } of examples) {
  console.log(`  ${label.padEnd(30)} => ${fn(input)}`);
}
console.log();
