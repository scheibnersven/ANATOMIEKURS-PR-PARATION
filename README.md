# Prepmeister

Statische Website für den Anatomiekurs Präparation. Kein Build und kein Backend nötig.

## Bei GitHub hochladen

1. Dieses ZIP entpacken.
2. Alle enthaltenen Dateien und Ordner in dein gewünschtes Repository hochladen.
3. `index.html` liegt direkt im Hauptverzeichnis. Den Ordner `assets` zusammen mit den JavaScript- und CSS-Dateien übernehmen.

Für dein eigenes Hosting den gesamten Inhalt unverändert ins Webverzeichnis kopieren. Die relativen Pfade funktionieren auch in einem Unterverzeichnis. Falls du GitHub Pages verwendest, ist dieses Hauptverzeichnis der Website-Einstieg.

## Lokal ansehen

Im entpackten Ordner ausführen:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Danach http://127.0.0.1:4173 öffnen.

## Dateien bearbeiten

- `index.html`: Grundgerüst und obere Navigation.
- `styles.css`: Design, Farben, Animationen und responsive Ansichten.
- `app.js`: Kursansichten, Termine, Widgets und Interaktionen.
- `auth.js`: Browser-Kennwortabfrage mit dem bisherigen Kurskennwort.
- `data.js`: Kursmaterialien, Quizdaten und Quellen.
- `priorities-data.js` / `priorities.js`: Lernprioritäten und lokal gespeicherte Selbsteinschätzungen für Testat 2.
- `diagrams.js`: interaktive Anatomieskizzen.
- `assets/`: Bilder, Favicon und Originalkursplan.
- `docs/`: Analyse, Gestaltung, Bildnachweise und Prüfprotokoll. Einige Dokumente beziehen sich auf die ursprüngliche Arbeitsstruktur mit dem Ordner `dist`; in diesem Paket liegt dessen Inhalt direkt im Hauptverzeichnis.

## Stand des Prototyps

Der Kopf-Hals-Thorax-Kursplan enthält die eingereichten Termine. Aufgaben je Einheit sind redaktionelle Vorbereitungsvorschläge. Gruppeneinteilungen sind Beispiele, Mitteilungen eine lokale Demo. Situs, Neuroanatomie und gesperrte Widgets sind noch in Vorbereitung. Betreiber- und Kontaktangaben im Impressum müssen ergänzt werden.

Fortschritte, Notizen und Einstellungen bleiben im jeweiligen Browser; es gibt keine geräteübergreifende Synchronisierung. Für die Schriftarten lädt die Seite optional Google Fonts und nutzt sonst Systemschriften. Das Paket enthält keine Sites-Konfiguration und benötigt keinen Sites-Zugang.

Die ursprüngliche Kennwortabfrage ist wiederhergestellt. Das bisherige Kurskennwort bleibt gültig. Der Zugang kann für die Sitzung oder auf dem Gerät gemerkt und über „Kurs sperren“ im Menü erneut gesperrt werden. Dies ist eine Browser-Sperre; öffentlich gehostete Dateien und Repository-Inhalte bleiben technisch abrufbar.
