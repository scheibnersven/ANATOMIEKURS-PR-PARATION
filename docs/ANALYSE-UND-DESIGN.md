# Prepmeister: Analyse und Designkonzept

Stand: 22. Oktober 2026, Zeitzone Europe/Berlin.

## 1. Ausgangspunkt

Die übergebene Seite ist eine eigenständige HTML-Datei mit eingebettetem CSS, JavaScript und Kursdaten. Eine unveränderte Sicherung liegt in `original.html`. Die Oberfläche konzentriert sich auf den Fahrplan des ersten Semesters; eine eigenständige Nachrichten-Startseite oder Navigation zwischen mehreren Kursen existiert im Original noch nicht.

### Vorhandenes Design

- Mintgrün, Petrol, Weiß, Gold und gedämpftes Rot bilden die Farbwelt.
- Kräftige Schriften, viele weiße Karten und deutliche Schatten bestimmen die Darstellung.
- Eine große Überschrift, zwei Statistikfelder, die Gruppeneinteilung und eine lange vertikale Zeitleiste konkurrieren auf derselben Seite um Aufmerksamkeit.
- Die Zeitleiste wechselt auf großen Bildschirmen zwischen linker und rechter Spalte; mobil werden alle Termine untereinander dargestellt.
- Der Haus-Button öffnet ein bildschirmfüllendes Lernmenü. Die Bedeutung als Lernmenü ist am Symbol allein nicht erkennbar.
- Das Original enthält bereits responsive Regeln und erste Hover-, Einblendungs- und Kartenwendebewegungen. Eine Einstellung für reduzierte Bewegung fehlt.

### Vorhandene Inhalte und Funktionen

| Bereich | Bestand | Erhalt im neuen Konzept |
| --- | --- | --- |
| Fahrplan Bewegungsapparat | 19 Termine vom 06.05. bis 10.07.2026; Thema, Datum, Schwerpunkt, Präparationshinweis | Als eigener Kurs mit horizontalem Zeitstrahl und fokussiertem Termindetail |
| Vorbereitung und Besprechung | 141 abhakbare Aufgaben; Fortschritt je Termin und insgesamt | Vollständige Inhalte und Fortschrittsberechnung weiterverwenden |
| Präpgebiete | Frühe/späte Gruppe; Hals, Arm/Hand, Bauch/Regio glutea, Bein/Fuß; interaktive SVG und Detailkarten | Als Widget „Gruppeneinteilung“ mit überarbeiteter Körperdarstellung |
| Erwartungshorizont | Themenrahmen Testat 1; farbige Markierungen und zuschaltbare Erläuterungen | Als eigenes Widget erhalten |
| Checkliste | 67 Punkte, vier große Regionen, Suche und Erledigt-Zähler | Als übersichtlich gegliederte Checkliste erhalten |
| Karteikarten | 28 Durchtrittsstellen; Vorder-/Rückseite; alle zurückdrehen | Als Lernkarten-Widget erhalten |
| Prüfungssimulation | Sechs Simulationen mit insgesamt 74 Fragen; Freitext, Aufdecken, nächste Frage, Neustart | Als aktiven Lernmodus erhalten |
| Rückmeldung | Toasts und optionaler Klicksound | Dezenter einsetzen; Sound als bewusste Einstellung |
| Zugang | Lokale Passwortabfrage mit Merken-Funktion | Kein verlässlicher Zugriffsschutz; der UI-Prototyp benötigt keine fingierte Anmeldung |

Die Originalgruppen enthalten ausschließlich `###` als Namen. Die frühe Gruppe hat zehn, die späte Gruppe neun Platzhalter. Daraus dürfen keine echten Zuteilungen abgeleitet werden.

### Technische Befunde

Das Original speichert Aufgaben und Checklisten unter `anatomiekurs-praeparation-progress-v1`. Die Terminaufgaben verwenden Schlüssel wie `p1:research:0` und `p1:presentation:0`; Checklistenpunkte verwenden `checklist:sectionIndex:groupIndex:itemIndex`. Diese Struktur lässt sich weiterverwenden. Browser-Speicher ist an die jeweilige Origin gebunden: Eine neu gehostete Seite kann die Daten einer anderen Origin nicht automatisch übernehmen.

Im Original wird nach einer Checkbox-Änderung der gesamte Termindialog neu aufgebaut. Dadurch kann der Tastaturfokus verloren gehen. Der Dialog besitzt außerdem keine vollständige Fokusführung oder Scrollsperre. SVG-Körperregionen reagieren auf Mausklicks, besitzen jedoch keine eigene Tastaturbedienung. Für jeden Klicksound wird ein neuer `AudioContext` erzeugt. Diese Muster sollten bei der neuen Umsetzung vermieden werden.

## 2. Stil: Warm Editorial

Prepmeister soll wie eine ruhige, sorgfältig gestaltete Lernplattform eines Bildungsunternehmens wirken. Die medizinische Präzision entsteht durch klare Gliederung und gute Lesbarkeit; Wärme entsteht durch Materialität, Typografie und einen zurückhaltenden Terrakotta-Akzent.

| Gestaltungsmittel | Entscheidung |
| --- | --- |
| Hintergrund | Warmes Offwhite `#f7f7f2` |
| Text | Graphit `#282b26` |
| Sekundärtext | Gedämpftes Olivgrau `#696d63` |
| Akzent | Terrakotta `#c86950`; für helle CTA-Flächen mit weißer Schrift dunkler `#ad4c35` |
| Flächen | Weiß, helles Salbei und dezentes Pfirsich; feine Rahmen `#e3e4db` |
| Typografie | DM Sans für Navigation, Inhalte und Bedienung; Instrument Serif sparsam für redaktionelle Akzente |
| Form | Ruhige rechteckige Flächen mit moderaten Radien, konsistente Abstände und wenige Schatten |
| Illustration | Matte elfenbeinfarbene anatomische Büste mit terrakottafarbener Halsmuskulatur |

Große Überschriften, großzügige Außenränder und kleinere Detailtexte erzeugen eine klare Rangfolge. Schatten signalisieren nur die Interaktion oder eine schwebende Ebene. Kurskarten erhalten eigene anatomische Illustrationen; einheitliche Strichsymbole ersetzen dekorative Emojis.

Die Hero-Büste ist ausdrücklich ein dekoratives KI-generiertes Markenmotiv. Sie ist kein anatomischer Atlas und keine Grundlage für Prüfungsantworten. Die interaktiven Körper- und Schädelansichten sind schematische Illustrationen und müssen entsprechend eingeordnet werden.

Der Dunkelmodus verwendet dieselbe Hierarchie mit dunklen olivgrauen Flächen und einem aufgehellten Terrakotta-Akzent. Inhalte und Navigation bleiben an denselben Stellen.

## 3. Informationsarchitektur

### Hauptnavigation

Das Logo „Prepmeister“ führt immer zur Startseite mit Begrüßung und chronologischen Nachrichten. Daneben liegen die Kurse in dieser Reihenfolge:

1. Erstes Semester: Bewegungsapparat.
2. Zweites Semester: Kopf, Hals & Thorax.
3. Zweites Semester: Situs.
4. (Neuroanatomie), als noch nicht freigeschalteter Bereich.

Ein dezenter Drei-Striche-Button öffnet die Seitenleiste. Darin stehen die allgemeine Übersicht, sämtliche Kurse, die direkten Zugänge zu Kursinhalten, Hell-/Dunkelmodus, die lokale Demo-Einstellung für Mitteilungen und das Impressum. Auf schmalen Bildschirmen übernimmt diese Leiste die vollständige Navigation.

### Startseite

- Begrüßung zum Anatomiekurs Präparation Prepmeister.
- Kurze redaktionelle Einführung und direkte Wege zu den Kursen.
- Kompakter chronologischer Ankündigungsbereich. Die Demo-Meldung vom Vortag kündigt neue Themeninhalte für Kopf, Hals & Thorax an.
- „Ältere Nachrichten anzeigen“ hält die Standardansicht ruhig und blendet Archivmeldungen auf Wunsch ein.
- Vier einheitliche Kurskarten machen den Umfang des Angebots sofort verständlich.

### Kurs und Widgets

Unter Kursüberschrift und Zusammenfassung liegt eine kompakte Widget-Leiste. Die Inhalte erscheinen innerhalb desselben Kurskontexts.

| Kurs | Widgets und Status |
| --- | --- |
| Bewegungsapparat | Zeitstrahl, Gruppeneinteilung, Checkliste, Erwartungshorizont, Karteikarten, Prüfungssimulation |
| Kopf, Hals & Thorax | Zeitstrahl, Gruppeneinteilung, Hirnnerven lernen/Quiz, Schädelbasis-Quiz als eingeschränkter Prototyp |
| Weitere Thorax-Werkzeuge | Lungensegmente-Trainer, Lungenfakten-Quiz und Orientierung am Herz als gesperrte „Coming soon“-Einträge |
| Situs und Neuroanatomie | Ehrliche vorbereitete Kursansichten; keine vorgetäuschten vollständig ausgearbeiteten Lerninhalte |

Das Hirnnerven-Quiz verknüpft die Nerven I–XII mit Funktion, Modalität, Schädelöffnung und grundlegender Untersuchung. Beim Schädelbasis-Prototyp steht die Verbindung zwischen Öffnung, Lokalisation und hindurchziehenden Strukturen im Mittelpunkt.

## 4. Zeitstrahl und Semestertermine

Die vertikale Kartenwand wird zu einem horizontalen Zeitstrahl mit Linealmarken. Jeder Termin bleibt direkt anwählbar. Hover oder Tastaturfokus liefert Orientierung; Klick oder Touch fixiert die Auswahl und zeigt Aufgaben und Präparationsstand darunter. Der aktuelle Kalendertag wird unabhängig vom gewählten Termin hervorgehoben. Historische Termine des ersten Semesters erhalten keine erfundene „Heute“-Markierung.

Für den zweiten Kurs wurden folgende Termine aus der vom Nutzer bereitgestellten Vorlage übernommen. Bezugsdatum dieser Dokumentation ist der 22.10.2026.

| Datum 2026 | Einordnung |
| --- | --- |
| 15.10. | Regulärer Termin; bereits vergangen |
| 20.10. | Regulärer Termin; bereits vergangen |
| 22.10. | Aktueller Kurstag am Dokumentationsdatum |
| 27.10. | Regulärer Termin |
| 29.10. | Regulärer Termin |
| 03.11. | Regulärer Termin |
| 05.11. | Reserve |
| 10.11. | Regulärer Termin |
| 12.11. | Reserve |
| 17.11. | Regulärer Termin |
| 19.11. | Reserve |

Reserve bedeutet nicht automatisch, dass ein zusätzlicher verbindlicher Inhalt stattfindet. Ergänzte Lernziele sind als didaktische Vorschläge von den gelieferten Kursdaten zu unterscheiden. Eine spätere PDF kann die genauen Arbeitsaufträge und Zuteilungen weiter präzisieren.

## 5. Anatomische Interaktion und Gruppen

Beim Bewegungsapparat bleibt die Auswahl von Hals, oberer Extremität, Rumpf/Glutealregion und unterer Extremität möglich. Im zweiten Kurs werden Kopf/Hals und Thorax mit Herz und Lunge als getrennte schematische Ebenen gezeigt. Eine sanfte Explosionsbewegung macht die Zuordnung bei Hover oder Fokus verständlich; Antippen oder Anklicken muss dieselbe Auswahl anbieten.

Die Umschaltung zwischen früher und später Gruppe verändert die angezeigte Gruppenkonstellation. Solange keine echten Namen und Zuständigkeiten geliefert werden, sind die Einträge als Demo-Plätze kenntlich. Eine Auswahl in der Grafik ist keine tatsächliche Buchung oder Zuteilung.

## 6. Responsive Bedienung und Bewegung

- Die große Ansicht nutzt eine zweispaltige Hero-Komposition und ein geordnetes Raster von Kurskarten. Mobil folgen Text und Illustration aufeinander; die Karten werden kompakter angeordnet.
- Die Hauptnavigation wechselt auf kleinen Bildschirmen in die Seitenleiste. Widget-Leiste und Zeitstrahl dürfen horizontal scrollen, ohne die ganze Seite zu verbreitern.
- Jede wichtige Hover-Interaktion erhält ein Äquivalent für Fokus, Klick und Touch.
- Sichtbare Fokusrahmen, semantische Buttons und Links sowie verständliche Beschriftungen sind Teil der Gestaltung.
- Dialoge müssen den Fokus kontrolliert übernehmen, Escape unterstützen und den Fokus beim Schließen zurückgeben. Statusänderungen sollten assistiv erfassbar sein.
- Kurze Farb- und Flächenwechsel reagieren direkt; Bewegungen verwenden eine sanft auslaufende Kurve. Karten bewegen sich nur wenige Pixel, Seiten und Detailansichten blenden dezent ein.
- `prefers-reduced-motion: reduce` reduziert Animationen und Übergänge und schaltet sanftes Scrollen ab. Information darf nie allein von einer Animation abhängen.

### Geprüfte Nachbesserungen

Im abschließenden begrenzten Code-Review wurden drei konkrete Nachbesserungen kontrolliert: Widget-Wechsel nach Quizantworten und Fragen, Gruppenumschaltung und Hinweis-Toggles erhalten eine gezielte Fokusführung; `motionBehavior()` berücksichtigt die Systemeinstellung für reduzierte Bewegung auch bei expliziten JavaScript-Scrollaufrufen; der Sekundärtext und die CTA-Farben wurden kontrastreicher abgestimmt. Im JavaScript verbleibt kein bedingungsloser Aufruf mit `behavior: 'smooth'`.

Die berechneten Kontrastwerte der korrigierten Kombinationen betragen 4,92:1 für `#696d63` auf dem Seitenhintergrund, 5,29:1 auf Weiß, 5,44:1 für weißen CTA-Text auf `#ad4c35` und 6,55:1 für dunklen CTA-Text auf dem hellen Terrakotta des Dunkelmodus. Das bestätigt diese konkreten Textkombinationen; es ist keine pauschale Zertifizierung der vollständigen Oberfläche.

## 7. Fachliche Prüfung und belegte Korrekturen

Die Originalinhalte wurden übernommen, aber nicht pauschal vollständig fachlich verifiziert. Der im Original genannte Prüfungskatalog liegt nicht als vollständige PDF vor. Die Quellen für die ergänzten Hirnnerven- und Schädelbasisinhalte sowie für zwei gezielte Korrekturen sind in `dist/data.js` unter `sources` dokumentiert.

### Karpaltunnel

Die Originalkarte führte den M. flexor carpi radialis als Inhalt des Canalis carpi auf. In der überarbeiteten Karte wird klargestellt, dass seine Sehne in einem eigenen osteofibrösen Kanal außerhalb des eigentlichen Karpaltunnels verläuft.

Beleg: [Özdemir et al., radiologische und anatomische Untersuchung, 2021](https://pubmed.ncbi.nlm.nih.gov/33705637/).

### Halsvenen

Die vereinfachte und teils falsche Beschreibung der venösen Zusammenflüsse wurde ersetzt: Die V. jugularis interna setzt den Sinus sigmoideus fort und erhält unter anderem die V. facialis communis. Die V. jugularis externa entsteht typischerweise aus V. auricularis posterior und hinterem Ast der V. retromandibularis und mündet in die V. subclavia. Varianten bleiben möglich.

Beleg: [Texas Tech University Health Sciences Center, Anatomy Tables: Parotid Gland & Face](https://anatomy.ttuhscep.edu/nervous_system/face_tables.html).

### Quellen für die neuen Lernbereiche

- [University of Michigan, BlueLink: Cranial Cavity, Brain and Spinal Cord](https://sites.google.com/a/umich.edu/bluelink/curricula/dent-545-dental-head-and-neck-anatomy/s1-cranial-cavity-brain-and-spinal-cord/s1-cranial-cavity-brain-and-spinal-cord-learning-objectives).
- [Semmelweis University, Connections of the Skull](https://semmelweis.hu/anatomia/files/2014/04/Connections-of-the-Skull.pdf).
- [Damodaran et al., Cranial nerve assessment, Clinical Anatomy, 2014](https://onlinelibrary.wiley.com/doi/full/10.1002/ca.22336).
- [Cranial Nerve Foramina Part I: anterior and middle cranial fossa](https://pmc.ncbi.nlm.nih.gov/articles/PMC5889149/).

## 8. Grenzen dieses Prototyps

Die Umsetzung konzentriert sich auf die Oberfläche und lokale Lerninteraktionen. Es gibt keine echten Gruppenzuteilungen, keine gemeinsamen Nutzerdaten und keine verbindliche Fortschrittssynchronisierung zwischen Geräten. Die Mitteilungsoption ist eine lokale Demo-Einstellung; sie aktiviert keine Push-Benachrichtigungen. Gesperrte Werkzeuge sind sichtbar angekündigt und bleiben als solche erkennbar.

Das Impressum ist ein Platzhalter und muss vor einem regulären öffentlichen Einsatz mit den tatsächlichen Angaben des Anbieters vervollständigt werden. Die dekorative KI-Büste und die schematischen Diagramme ersetzen keine anatomischen Referenzabbildungen. Die vorhandene Kursbasis bleibt als solche von ergänzten Prototyp-Inhalten unterscheidbar.
