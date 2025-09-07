# 🧠 Assembly IntelliSense

An ultra-lightweight Visual Studio Code extension that adds intelligent auto-completion for multiple assembly dialects — including **x86**, **AT&T**, **ARM64**, and **6502**.

Perfect for learning, reverse engineering, or hacking together some retro code.

---

## ✨ Features

- 🔧 **Auto-completion** for common assembly instructions:
  - Intel x86 / NASM
  - AT&T syntax
  - ARM64 (AArch64)
  - 6502 / 6500 family
- ⚡ Fast and secure build using `esbuild`
- 🔍 Type-safe and linted with strict ESLint (Flat Config)
- 🧠 Suggestions appear as you type — no configuration needed

---

## 🖥️ Usage

1. Open (or create) a file with the `.asm` extension
2. Start typing an instruction like `mov`, `add`, `jmp`, etc.
3. Completion suggestions will appear automatically

> Supports all files with the `assembly` language ID.

---

## 🛠️ Supported Instructions

### x86 / NASM
```asm
mov, add, sub, mul, div, push, pop, call, ret, jmp, je, jne, jl, jg, cmp, lea, inc, dec, xor, and, or, not, shl, shr, nop
```
### AT&T Syntax
```asm
movq, movl, movb, addq, subq, leal, callq, retq, pushq, popq
```
### ARM64 (AArch64)
```asm
movz, movk, movn, add, sub, and, orr, eor, ldr, str, b, bl, cbz, cbnz, ret, stp, ldp
```
### 6502 / 6500

```asm
lda, sta, ldx, stx, ldy, sty, inx, dex, iny, dey, adc, sbc, and, ora, eor, jmp, jsr, rts, beq, bne, bit, php, plp

````

---

## 📦 Installation

**From Marketplace (coming soon)**  
*(will link here once published)*

**From VSIX**

```bash
vsce package
code --install-extension assembly-intellisense-0.0.1.vsix
````

---

## 👨‍💻 Development

Clone and build:

```bash
git clone https://github.com/yourusername/assembly-intellisense.git
cd assembly-intellisense
npm install
npm run compile
```

Run it in a dev host:

```bash
code .
# Press F5 to launch Extension Development Host
```

---

## 🧪 Testing

Run unit tests:

```bash
npm test
```

---

## 📋 Changelog

See [CHANGELOG.md](./CHANGELOG.md)

---

## 📄 License

MIT © [Boring-Dude](https://github.com/Boring-Dude)
