# Objava igre na GitHub Pages

## Kaj naložiš

| Datoteka | Namen |
|---|---|
| `obramba-321.html` | igra — to odprejo igralke |
| `manifest.json` | omogoča dodajanje na domači zaslon |
| `sw.js` | omogoča namestitev in delovanje brez povezave |
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

## Ikona na zaslonu telefona

Aplikacije se ne da namestiti samodejno — brskalniki to preprečujejo, namestitev mora potrditi uporabnik. Igra zato sama ponudi namestitev:

| Telefon | Kaj vidi igralka |
|---|---|
| Android (Chrome) | Na prvem zaslonu pas z gumbom **Dodaj**; en tap in ikona je na zaslonu |
| iPhone (Safari) | Pas z navodilom: tapni **Deli**, nato **Na začetni zaslon** |
| Že nameščena | Pasu ni |

Pogoj je, da so `manifest.json`, `sw.js` in `ikona.svg` v isti mapi kot igra in da stran teče prek `https`, kar GitHub Pages zagotavlja. Na iPhonu mora biti odprta v Safariju — v Chromu ta možnost ne obstaja.

## QR koda

Povezavo prilepi v katerikoli spletni generator QR kod in jo natisni za garderobo. Igralke jo skenirajo, odprejo stran in v brskalniku izberejo **Dodaj na domači zaslon**.

## Posodobitve

Ko popraviva igro, isto datoteko naložiš čez staro (`Add file` → `Upload files` → `Commit`). Igralkam ni treba narediti ničesar; ob naslednjem odprtju dobijo novo različico. Če je brskalnik trmast, naj enkrat osvežijo stran.

## Kaj posodobiti ob novi različici

| Datoteka | Kaj narediti |
|---|---|
| `obramba-321.html` | **zamenjaj** z novo (ali `index.html`, če si jo preimenoval) |
| `sw.js` | zamenjaj samo, če ti povem; v njem povečam številko različice |
| `manifest.json` | pustiš, razen če se spremeni |
| `ikona.svg` | pustiš |
| karkoli drugega | ničesar ni treba brisati |

Datotek ni treba brisati — nalaganje iste datoteke jo prepiše. Če si igro preimenoval v `index.html`, mora tudi nova različica nositi to ime.

Po posodobitvi naj igralke enkrat osvežijo stran (potegnejo navzdol). Če imajo igro na domačem zaslonu in vidijo staro različico, naj jo zaprejo in znova odprejo.

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
