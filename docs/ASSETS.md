# Prepmeister: Bild- und Grafiknachweis

## Hero-Büste

- Datei im Projekt: `dist/assets/anatomy-hero.png`.
- Größe: 1254 × 1254 Pixel, PNG.
- Erzeugung: integriertes `image_gen.imagegen`-Tool, keine CLI und kein extern heruntergeladenes Motiv.
- Parameter: `transparent_background: false`.
- Verwendung: dekorative Hero-Illustration auf der Startseite; kein anatomisches Lehrdiagramm.
- Sichtprüfung: einzelne elfenbeinfarbene Kopf-/Hals-/Schulterbüste, terrakottafarbene freigelegte Halsmuskulatur, geschlossener stilisierter Rippenbereich, ruhiger Hintergrund, keine Beschriftungen.
- Das Original der gewählten Generierung blieb am vom Tool gelieferten Speicherort erhalten. Eine Kopie liegt im Projekt, damit die Website unabhängig davon ausgeliefert werden kann.

### Exakter erfolgreicher Prompt

```text
Use case: stylized-concept
Asset type: decorative hero illustration for a premium German anatomy education startup website; a medical museum display object, not a learning diagram.
Primary request: A premium editorial 3D render of one elegant anatomical teaching sculpture: a neutral adult head, neck, shoulders and upper ribcage. The sculpture is made of matte ivory porcelain with a small cutaway at the side of the neck that shows terracotta-colored sculpted neck muscles. The upper chest is a completely enclosed abstract ivory plinth-like shell with subtle sculpted rib contours, suitable for a public museum educational exhibit. Realistic proportions, three-quarter frontal view, precise and calm, restrained medical design.
Scene/backdrop: a perfectly uniform warm offwhite #f6f5f1 background.
Composition/framing: square portrait composition; a single centered head-and-shoulders bust occupying 85% of the image. Entire head visible, crop at the bottom of the upper ribcage.
Lighting/mood: soft studio lighting, soft realistic shadows, refined premium editorial quality.
Color palette: warm cream and muted bone tones, restrained terracotta coral sculptural muscle accents at the neck.
Materials/textures: beautiful matte porcelain with delicately striated clay muscle detailing at neck.
Constraints: non-sexual medical educational museum object, no blood or gore, no exposed breasts, no nipples, no lower body. No text, labels, logos, watermarks, UI, glow or neon.
```

## Interaktive Grafiken

Die Website verwendet eigenständig erstellte SVG-Grafiken für Kursmotive und interaktive Körperregionen. Sie sind schematische Interface-Illustrationen. Die Schädelbasisdarstellung darf als eingeschränkter Prototyp verwendet werden; sie beansprucht keine maßstabsgetreue Atlasqualität. Die fachlichen Quellen für Öffnungen und hindurchziehende Strukturen stehen in `dist/data.js` unter `sources`.

## Freigestellte Kursmotive

Vier neue Bildmotive ergänzen die Kurskarten. Sie wurden jeweils einzeln mit dem integrierten `image_gen.imagegen`-Tool und `transparent_background: true` generiert. Alle vier Dateien sind PNGs mit 1254 × 1254 Pixeln und echtem Alphakanal; die Metadaten wurden mit `sips` kontrolliert. Enge Silhouetten, matte Elfenbeinoberflächen und Terrakotta-Akzente verbinden die Motive mit dem vorhandenen Stil. Es handelt sich um dekorative Kursillustrationen, nicht um anatomische Lehrtafeln.

| Kursmotiv | Datei | Exakter Prompt und Erzeugungsnachweis |
| --- | --- | --- |
| Humerus | `dist/assets/course-humerus.png` | [PROMPTS-BONE-HEAD.md](PROMPTS-BONE-HEAD.md) |
| Kopf | `dist/assets/course-head.png` | [PROMPTS-BONE-HEAD.md](PROMPTS-BONE-HEAD.md) |
| Herz | `dist/assets/course-heart.png` | [PROMPT-HEART.md](PROMPT-HEART.md) |
| Gehirn | `dist/assets/course-brain.png` | [PROMPT-BRAIN.md](PROMPT-BRAIN.md) |

Die bisherigen Strichzeichnungen bleiben für den Kursübergang erhalten. Der Übergang verwendet nach der gewählten Vorgabe eine Dauer von 0,8 Sekunden: Das jeweilige SVG-Symbol schwebt kurz auf und verblasst, bevor die Kursansicht erscheint. Bei aktivierter Einstellung „Bewegung reduzieren“ wird direkt navigiert.

## Schrift und Gestaltung

DM Sans bildet die Interface-Schrift, Instrument Serif die sparsam eingesetzten redaktionellen Akzente. Die CSS-Datei lädt beide über Google Fonts und nennt lokale Fallback-Schriften. Branding, Kurskarten und Favicon sind im Projekt enthalten.
