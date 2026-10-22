# Verifikation – 22. Oktober 2026

- Browserprüfung im In-App-Browser bei 1440 × 1000, 390 × 844 und 320 × 780 Pixeln.
- Startseite: Name „Prepmeister.“, Kursnavigation, ältere Nachrichten ein-/ausblenden und vollständig geladenes Hero-Bild geprüft.
- Zeitstrahl: 11 Kopf-Hals-Thorax-Termine inklusive drei Reserveeinheiten; 22.10.2026 korrekt als Heute. Originalmaterial aus Mai–Juli bleibt als Archiv erhalten. Hover-Vorschau, Auswahl sowie horizontales Zentrieren implementiert.
- Termindialog: Checkbox und Notiz speichern, schließen und erneut öffnen geprüft; Testeingaben anschließend entfernt.
- Gruppeneinteilung: frühe/späte Gruppe, Gebietsauswahl und anatomische Explosionsansicht geprüft.
- Hirnnerven: 48 Fragen aus zwölf Nerven und vier Kategorien; korrektes Feedback, Punktestand, nächste Frage und Fokusführung geprüft.
- Schädelbasis: zehn Öffnungen, Inhalte und Nervenverknüpfungen; Quiz mit 20 Fragen geprüft. Schematischer Prototyp.
- Erste-Semester-Checkliste nach Rotatorenmanschette durchsucht; Karteikarte umgedreht; Simulation mit Freitext, Musterantwort und nächster Frage geprüft.
- Menü und Dunkelmodus geprüft. Kursordner nach Lunge durchsucht. Native Dialoge besitzen Fokusbegrenzung und Escape-Schließen; Inhaltsdialoge schließen nur über Schließen/Escape.
- Kein horizontaler Dokumentüberlauf auf 390 und 320 Pixeln nach Korrektur des Dekorationsrings.
- JavaScript-Syntax für app.js, data.js und diagrams.js erfolgreich mit node --check geprüft.
- Keine Browserfehler im geprüften Konsolenprotokoll.
- Unabhängiger Code-Review durchgeführt. Gefundene Fokus-, Kontrast- und Reduced-Motion-Probleme korrigiert. Sekundärtextkontrast 4,92:1, primärer CTA hell 5,44:1, dunkel 6,55:1.

Die Prüfung umfasst exemplarische Interaktionen, keine vollständige medizinische Inhaltsprüfung und keine Prüfung auf sämtlichen Browsern oder Geräten. Daten und Einstellungen sind browserlokal; es gibt keinen Serverbetrieb für Gruppenverwaltung oder Push-Mitteilungen.

## Ergänzungen: Kursmotive und Übergang

Implementierungsstand der neuen Ergänzungen; eine erneute Browserprüfung durch den Hauptagenten steht für diesen Abschnitt noch aus:

- Vier generierte Kursmotive liegen unter `dist/assets/course-humerus.png`, `course-head.png`, `course-heart.png` und `course-brain.png`. Für alle vier bestätigt die Metadatenprüfung 1254 × 1254 Pixel und einen Alphakanal. Exakte Prompts sind über `docs/ASSETS.md` verknüpft.
- Der Kursübergang ist mit 400 Millisekunden umgesetzt und nutzt die bisherigen SVG-Strichmotive. Bei „Bewegung reduzieren“ ist die direkte Navigation vorgesehen. Ziel der anschließenden Browserprüfung sind Ablauf, Dauer, wiederholte Kurswechsel, Tastaturbedienung und Abbruchverhalten.
- Die Begrüßung wurde auf Studienstart, Kursplan, aktuelle Ankündigungen und ergänzende Lernmaterialien ausgerichtet.
- Die neue Orientierung „Was erwartet mich im Präpariersaal?“ beschreibt Vorbereitung, Orientierung am Präparat und Nachbereitung. Der lokale Ablauf bleibt an die Hinweise der Kursleitung gebunden.
- Noch zu prüfen: Einbindung aller vier freigestellten Motive auf hellen und dunklen Karten, Lesbarkeit bei kleinen Größen, mobile Umbrüche und Vollständigkeit der aktualisierten Exporte.

## Export

Die eigenständige HTML enthält alle drei lokalen Assets, CSS und die drei Scripts. Die eingebetteten Scripts wurden gesondert mit node --check geprüft; das Quellcode-ZIP wurde mit zipfile auf Integrität geprüft. Das direkte Öffnen des file-Protokolls ist im Prüf-Browser gesperrt, daher betrifft die visuelle Browserprüfung die inhaltlich identische HTTP-Vorschau. Auf Wunsch des Nutzers erfolgt kein Sites-Deployment; ein separates GitHub-Paket dient dem selbst verwalteten Upload und Hosting.

## Abschließende Prüfung der Ergänzungen

- Vier neue freigestellte Kursbilder im Browser vollständig geladen (je 1254 × 1254 Pixel); Original-PNGs mit Alphakanal bestätigt. Keine sichtbaren Hintergrundrechtecke in der Kartenansicht.
- Kurswechsel aus den Karten geprüft. Übergang 400 ms; Symbol, Kursname und Semester; danach der Zeitstrahl bedienbar, alle inert-Attribute entfernt und Fokus auf der Kursüberschrift. Interne Widgetwechsel zeigen keinen Kursübergang.
- Unabhängiger Review der Übergangspfade abgeschlossen; scrollbar-gutter: stable ergänzt, damit das vorübergehende Sperren des Scrollens keine seitlichen Sprünge verursacht.
- Begrüßung für Studierende überarbeitet. Der oben platzierte Link „Was erwartet mich im Präpsaal? ↗“ ersetzt die Werbezeile und öffnet eine eigenständige ethische Einführung unter #praepsaal. Kein doppelter Link unter den Buttons.
- Einführung, offizielle JLU-Verweise und ausklappbare Fixierungsantwort im Browser geprüft; unabhängiger fachlich-redaktioneller Review ohne konkrete Beanstandungen.
- Startseite und ethische Leseseite bei 1440, 390 und 320 Pixeln überprüft; bei beiden mobilen Breiten kein horizontaler Dokumentüberlauf.
- Browserkonsole bei den abschließend geprüften Interaktionen ohne Fehler. Die neuen Ansichten wurden visuell geprüft; Quellen sind in PRAEPSAAL-QUELLEN-ETHIK.md dokumentiert.

## Anpassung der Öffnungsanimation

Auf Nutzerwunsch beträgt der Kursübergang jetzt 800 statt 400 Millisekunden. Alle zugehörigen CSS-Animationen sind entsprechend verlängert; der Kurswechsel erfolgt weiterhin bei 45 Prozent des Übergangs hinter der Überblendung. Die bisherigen visuellen Prüfungen beziehen sich auf denselben Ablauf mit 400 Millisekunden. Für die neue Dauer wurden JavaScript-Syntax und die aktualisierten Exportdateien geprüft.

## Wiederhergestellte Kennwortabfrage (22.10.2026)

- Unveränderter SHA-256-Prüfwert gegenüber dem Original; bestehendes Kurskennwort bleibt gültig.
- Frischer direkter Kurslink zeigt ausschließlich die Kennwortabfrage. Falsches Kennwort wird mit echtem SHA-256 abgewiesen; Escape schließt die Abfrage nicht. Im Browser visuell geprüft.
- DOM-/Storage-Test prüft Freigabe, Sitzung, dauerhaftes Merken, bestehende Speicherschlüssel, erneutes Sperren und blockierten Browser-Speicher. Für den Erfolgszweig wurde ein passender Digest simuliert, da das Klartextkennwort nicht vorliegt.
- Syntaxprüfungen für auth.js und app.js erfolgreich.
- Die Browser-Sperre ersetzt keine serverseitige Zugriffskontrolle.

## Lernprioritäten · Testat 2 (22.10.2026)

- Alle sechs PDF-Seiten gerendert und visuell geprüft; Textfarben zusätzlich pro Textzeichen ausgelesen. 95 Originalpunkte sind durch drei begründete Aufteilungen als 98 Themen abgebildet. 25 Themengebiete, 48 × drei, 36 × zwei und 14 × ein Stern. Die vier Ösophagus-Themen bleiben enthalten.
- Datentest: eindeutige IDs, vollständige Abdeckung aller 95 Ursprungsnummern, korrekte gemischte Prioritäten, 294 Bewertungsschaltflächen und keine PDF-Verlinkung.
- Browserprüfung mit ausschließlich lokaler Testsitzung: Bewertung aller drei Kategorien, Aktualisierung der Statistik, Speicherung nach Reload, kombinierte Such-/Prioritäts-/Statusfilter, leere Trefferliste mit deaktiviertem Start, Selbsttest mit automatischem Wechsel, Zurück und Überspringen sowie Abschluss mit offenem Thema.
- Desktop, 390 px und 320 px geprüft. Kein horizontaler Seitenüberlauf; mobile Bewertungsschaltflächen bleiben bedienbar. Keine Konsolenfehler. Viewport danach zurückgesetzt.
- Syntaxprüfungen der neuen Module und von app.js erfolgreich. Originale Kennwortprüfung unverändert. Die PDF und die lokale Testsitzung werden nicht veröffentlicht.
