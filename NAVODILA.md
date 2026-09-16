# Objava igre na GitHub Pages

## Kaj naložiš

| Datoteka | Namen |
|---|---|
| `obramba-321.html` | igra — to odprejo igralke |
| `manifest.json` | omogoča dodajanje na domači zaslon |
| `ikona.svg` | ikona aplikacije |
| `urejevalnik-faz.html` | tvoje orodje za postavitve (ni nujno objaviti) |
| `besedila-faz.html` | tvoje orodje za besedila (ni nujno objaviti) |

Vse tri prve datoteke morajo biti v isti mapi, sicer manifest in ikona ne delujeta.

## Postopek

1. Na GitHubu ustvari nov repozitorij, na primer `obramba-321`. Nastavi ga na **Public** — GitHub Pages na brezplačnem računu ne objavlja zasebnih repozitorijev.
2. Naloži datoteke (`Add file` → `Upload files` → povleci vse → `Commit changes`).
3. `Settings` → `Pages` → pod **Source** izberi `Deploy from a branch`, veja `main`, mapa `/ (root)` → `Save`.
4. Počakaj minuto ali dve. Povezava bo:
   `https://<tvoje-ime>.github.io/obramba-321/obramba-321.html`
5. Če hočeš krajšo povezavo, datoteko preimenuj v `index.html`; takrat je naslov
   `https://<tvoje-ime>.github.io/obramba-321/`
   V tem primeru v `manifest.json` popravi `"start_url": "./"`.

## QR koda

Povezavo prilepi v katerikoli spletni generator QR kod in jo natisni za garderobo. Igralke jo skenirajo, odprejo stran in v brskalniku izberejo **Dodaj na domači zaslon**.

## Posodobitve

Ko popraviva igro, isto datoteko naložiš čez staro (`Add file` → `Upload files` → `Commit`). Igralkam ni treba narediti ničesar; ob naslednjem odprtju dobijo novo različico. Če je brskalnik trmast, naj enkrat osvežijo stran.

## Kaj GitHub Pages ne zna

- Ne vodi evidence, kdo je igral in s kakšnim rezultatom.
- Ne more zanesljivo omejiti števila iger — omejitev treh iger na dan je shranjena v brskalniku telefona in jo izbris podatkov brskalnika ali zasebno okno izniči.
- Za oboje bi bil potreben strežnik z bazo.

## Obvestilo staršem — kaj lahko zapišeš

- Igra teče v brskalniku, nameščanje ni potrebno.
- Ne zbira imen, e-pošte ali kakršnihkoli osebnih podatkov; nič se ne pošilja nikamor.
- Edino, kar se shrani, je število odigranih iger tistega dne, in to samo na telefonu.
- Namen: razumeti gibanje obrambe 3:2:1, ne tekmovanje.
- Trije poskusi na dan so namerni, da igra ne postane nekaj, ob čemer otrok visi.
