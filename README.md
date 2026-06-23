# cpf-mask

A tiny, zero-dependency utility to apply, remove and validate Brazilian CPF masks.

[![npm version](https://img.shields.io/npm/v/cpf-mask)](https://www.npmjs.com/package/cpf-mask)
[![license](https://img.shields.io/npm/l/cpf-mask)](./LICENSE)

---

## Installation

```bash
npm install cpf-mask
```

---

## Usage

```js
const { mask, unmask, isValid } = require("cpf-mask");
```

### `mask(value)`

Applies the CPF mask `XXX.XXX.XXX-XX`. Works with partial input, making it ideal for live form masking.

```js
mask("12345678909");     // "123.456.789-09"
mask("123.456.789-09"); // "123.456.789-09"  ← already masked, stays the same
mask("1234");           // "123.4"           ← partial input
mask("123456");         // "123.456"         ← partial input
```

---

### `unmask(value)`

Strips all non-digit characters from the input.

```js
unmask("123.456.789-09"); // "12345678909"
unmask("12345678909");    // "12345678909"  ← already clean
```

---

### `isValid(value)`

Validates a CPF using the official check-digit algorithm. Accepts both masked and unmasked strings. Rejects known invalid sequences like `111.111.111-11`.

```js
isValid("529.982.247-25"); // true
isValid("12345678909");    // false  ← invalid check digits
isValid("111.111.111-11"); // false  ← all identical digits
isValid("0000000");        // false  ← wrong length
```

---

## Real-world example — masking an input field

```js
inputEl.addEventListener("input", (e) => {
  e.target.value = mask(e.target.value);
});

formEl.addEventListener("submit", (e) => {
  const cpf = unmask(inputEl.value);
  if (!isValid(cpf)) {
    alert("Invalid CPF");
    e.preventDefault();
  }
});
```

---

## API reference

| Function | Parameters | Returns | Description |
|---|---|---|---|
| `mask(value)` | `value: string` | `string` | Applies CPF mask |
| `unmask(value)` | `value: string` | `string` | Removes CPF mask |
| `isValid(value)` | `value: string` | `boolean` | Validates a CPF |

All functions return `""` / `false` for non-string inputs instead of throwing.

---

## Running tests

```bash
npm test
```

---

## License

MIT
