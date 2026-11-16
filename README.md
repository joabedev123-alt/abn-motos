# ABN MOTOS

Site institucional da ABN MOTOS, aluguel de motos em Betim e região.

## Executar

```bash
cd site
npm install
npm run dev
```

Abra http://localhost:3000.

Para verificar o projeto:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Onde editar

- Empresa, Instagram e textos institucionais: `src/data/company.ts`
- WhatsApp: `src/data/contacts.ts`
- Mensagens do WhatsApp: `src/lib/whatsapp.ts`
- Menu e rodapé: `src/data/navigation.ts`
- Motos: `src/data/motorcycles.ts` e fotos em `public/images/motos`
- Dúvidas frequentes: `src/data/faq.ts`
- Privacidade: `src/data/privacy.ts`
- Domínio público (sitemap, canonical e redes sociais): `.env` com `NEXT_PUBLIC_SITE_URL`

Não publique modelo, ano, cilindrada ou preço antes da confirmação. Enquanto o preço não existir, mantenha `preco: null`.

## Antes de publicar

Ainda precisam ser confirmados, se forem usados no site: nome comercial de cada moto, ano, cilindrada, preços, endereço, CNPJ, horários, regras de contratação, documentação, caução, seguro, entrega e cidades da região além de Betim.
