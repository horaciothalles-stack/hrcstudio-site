# HRC Lab — Rebranding: Guia de Implementação

## O que foi alterado

| Arquivo | O que muda |
|---|---|
| `src/index.css` | Fonte display: Space Grotesk → **Spectral** (serif premium). Cor primária: #F2490C → **#FF7F00** (Deep Orange do brandbook). Border-radius: 0.75rem → **0.125rem** (bordas retas = estética premium/editorial). |
| `src/components/sections/Hero.tsx` | Nova copy alinhada ao posicionamento HRC Lab. Badge com símbolo ≠. Stats atualizados. CTAs reformulados. |
| `src/components/sections/Ecosystem.tsx` | **NOVO** — substitui a seção de infoprodutos. Apresenta Frees.io e Biz.io com cards premium. |

---

## Passo 1 — Instalar a nova fonte

```bash
bun add @fontsource/spectral
```

> Pode remover o `@fontsource/space-grotesk` depois se quiser:
> ```bash
> bun remove @fontsource/space-grotesk
> ```

---

## Passo 2 — Substituir o index.css

Substitua o conteúdo de `src/index.css` pelo arquivo `src/index.css` desta pasta.

---

## Passo 3 — Substituir o Hero.tsx

Substitua o conteúdo do seu `Hero.tsx` existente pelo arquivo `src/components/sections/Hero.tsx` desta pasta.

> O caminho pode variar no seu projeto. Procure pelo arquivo que contém `"Economize tempo"`.

---

## Passo 4 — Adicionar o Ecosystem.tsx

1. Copie `src/components/sections/Ecosystem.tsx` para a pasta de seções do seu projeto.
2. No arquivo onde você monta a página (provavelmente `App.tsx` ou `Home.tsx`), substitua a importação da seção de infoprodutos:

```tsx
// Remover:
import { InfoProduto } from "@/components/sections/InfoProduto"; // (nome pode variar)

// Adicionar:
import { Ecosystem } from "@/components/sections/Ecosystem";
```

3. No JSX, troque o componente antigo pelo novo:

```tsx
// Antes:
<InfoProduto />

// Depois:
<Ecosystem />
```

---

## Passo 5 — Testar localmente

```bash
bun dev
```

---

## Resultado esperado

- Tipografia editorial (Spectral) nos headings — sensação de autoridade e sofisticação
- Laranja Deep Orange (#FF7F00) alinhado ao brandbook 2026
- Hero com novo posicionamento "ativos financeiros de alto valor"
- Seção do ecossistema com Frees.io e Biz.io no lugar dos infoprodutos
- Bordas retas em botões e cards — estética premium, não "startup genérica"
