# Anforderungen

## 2.1 Datenmodell

In diesem Abschnitt des Projekts wird ein Entity-Relationship-Diagramm (ER-Diagramm) vorgestellt, das als grundlegende Struktur für die TechLand-Plattform dient. Das ER-Diagramm fungiert als visuelle Darstellung der verschiedenen Entitäten und ihrer Beziehungen zueinander. Es bietet einen umfassenden Überblick über die Datenstruktur und die Wechselwirkungen innerhalb des Systems. 

Durch die sorgfältige Ausarbeitung dieses Modells wird eine klare Roadmap für die Entwicklung und Implementierung der Plattform geschaffen. Dies ermöglicht es Entwicklern und Stakeholdern gleichermaßen, ein gemeinsames Verständnis der Funktionsweise und der zugrunde liegenden Daten zu erlangen.

Im nächsten Schritt werden die einzelnen Komponenten des ER-Diagramms detailliert erläutert. Jede Entität und Beziehung wird gründlich betrachtet, um eine solide Grundlage für das weitere Vorgehen zu schaffen. Dieser Schritt ist entscheidend, um sicherzustellen, dass das Datenmodell präzise die Anforderungen und Funktionalitäten der TechLand-Plattform abbildet und somit eine effektive Entwicklung und Implementierung ermöglicht.

![Datenmodell](/doc/figures/Datenmodell.png)

Im oben aufgeführten Datenmodell sind vier Hauptentitäten bereitgestellt: Vermieter, Elektronikgerät, Mieter und Buchung. Diese Entitäten sind miteinander verbunden durch verschiedene Beziehungen, die das Zusammenspiel im System darstellen:

- **Vermieter und Elektronikgerät:** 1:n-Beziehung. Ein Vermieter kann mehrere Elektronikgeräte besitzen, während jedes Elektronikgerät eindeutig einem Vermieter zugeordnet ist.
- **Elektronikgerät und Buchung:** 1:n-Beziehung. Ein einzelnes Elektronikgerät kann in verschiedenen Buchungen verwendet werden, wobei jede Buchung genau auf ein bestimmtes Elektronikgerät verweist.
- **Vermieter und Buchung sowie Mieter und Buchung:** jeweils 1:n-Beziehung. Ein Vermieter kann mehrere Buchungen koordinieren, während jede Buchung einem bestimmten Vermieter zugeordnet ist. Gleichzeitig kann ein Mieter mehrere Buchungen haben, wobei jede Buchung einem spezifischen Mieter zugeordnet ist.

Diese Beziehungen ermöglichen ein klares Verständnis der Interaktionen zwischen den Entitäten in unserem Datenmodell. Sie bilden die Grundlage für eine erfolgreiche Realisierung unseres Projekts, indem sie die Struktur und Dynamik der Vermietungsprozesse abbilden und somit eine effektive Plattform ermöglichen.

## 2.2 Use-Case-Diagramm

Mein Ziel für dieses Projekt, das unter dem Namen TechLand läuft, besteht darin, eine klare Struktur für die geplanten Anforderungen meiner Webanwendung zu schaffen, um mögliche Probleme bei der Umsetzung zu vermeiden. Zu diesem Zweck habe ich ein Use-Case-Diagramm erstellt.

![Use-Case-Diagramm](/doc/figures/Use-Case-Diagramm.png)

Ich habe den Vermieter auf der linken Seite und den Mieter auf der rechten Seite des Diagramms platziert. Zwischen ihnen befindet sich das System mit allen zweckdienenden Use-Cases. Die Use-Cases bieten einen groben Überblick über alle geplanten Funktionen der Webanwendung TechLand zu diesem Zeitpunkt.

## 2.3 Beschreibung der Use-Cases

Im Anschluss habe ich jeden Use-Case im Detail beschrieben. Dabei erläutere ich für jeden Anwendungsfall das Ziel, die beteiligten Akteure, bestehende Bedingungen, den Auslöser, den Ablauf des Normalfalls und das erwartete Ergebnis. 

![Register](/doc/figures/Register.png)

![Search for Device](/doc/figures/SearchForDevice.png)

![StartDeviceRenting](/doc/figures/StartDeviceRenting.png)

![StopDeviceRenting](/doc/figures/StopDeviceRenting.png)

![EditOffer](/doc/figures/EditOffer.png)

![DeleteOffer](/doc/figures/DeleteOffer.png)

![RentalDetails](/doc/figures/RentalDetails.png)

![Transactions](/doc/figures/Transactions.png)

## 2.4 BPMN 2.0 Modell

Ein grundlegender Eckpfeiler bei der Entwicklung unserer Webanwendung ist die detaillierte Modellierung von Prozessen. Indem wir Geschäftsabläufe visualisieren, stellen wir sicher, dass unsere Anwendung den Benutzern dabei unterstützt, ihre täglichen Aufgaben auf effektive und effiziente Weise zu erledigen. In diesem Abschnitt werde ich zwei Kernprozesse unserer Webanwendung anhand von Business Process Model and Notation (BPMN) Diagrammen genauer beleuchten: das Hinzufügen eines Elektronikgeräts zum Inventar und das Ausleihen eines Elektronikgeräts. Dabei werde ich zusätzliche Elemente einführen, die die Flexibilität und Leistungsfähigkeit unserer Anwendung verdeutlichen. Diese detaillierte Analyse der Prozesse bietet einen tieferen Einblick in die Funktionalität und das Design unserer Plattform.

## 2.5 Elektronikgerät mieten

Der Prozess des Ausleihens eines Elektronikgeräts ist ein zentraler Bestandteil meiner Webanwendung. Er ermöglicht es dem Benutzer, ein Elektronikgerät für einen bestimmten Zeitraum zu mieten. Dieser Prozess beginnt mit der Auswahl des gewünschten Elektronikgeräts aus dem Inventar, gefolgt von der Eingabe der Buchungsdaten. Anschließend wird die Verfügbarkeit des Elektronikgeräts überprüft, bevor das System die Buchung abschließend bestätigt. Wichtig ist dabei, dass nur registrierte Benutzer Buchungen vornehmen können und dass die eingegebenen Buchungsdaten valide sind. Die nachfolgende BPMN-Darstellung veranschaulicht diesen Prozess im Detail:

![DeviceBPMN](/doc/figures/DeviceBPMN.png)

## 2.6 Elektronikgerät auf der Plattform registrieren

Hierbei erhalten Vermieter die Möglichkeit, ihre Geräte in einem einfachen Verfahren zu registrieren und für die Vermietung anzubieten. Der Registrierungsprozess wird initiiert, sobald ein Vermieter seine Geräteinformationen an uns übermittelt. Unsere Systeme führen eine gründliche Prüfung der eingereichten Unterlagen durch. Sind sämtliche Angaben korrekt und vollständig, erfolgt die erfolgreiche Erfassung der Daten im System, und das Gerät wird für die Vermietung freigegeben. Im Falle von Unstimmigkeiten oder fehlenden Informationen werden die Unterlagen zur Überarbeitung an den Vermieter zurückgesandt. Unser besonderes Augenmerk liegt auf der Qualität und Richtigkeit der Informationen, um unseren Nutzern ein herausragendes Miet- und Vermietungserlebnis zu gewährleisten.

![DeviceRegister](/doc/figures/DeviceRegister.png)

## 2.7 Klassendiagramm

In diesem Teil meiner Arbeit liegt der Fokus auf der Darstellung des Klassendiagramms und des technischen Datenmodells meiner Anwendung, die sich mit elektronischen Geräten beschäftigt. Innerhalb der Struktur meiner Webanwendung, welche als TechLand bekannt ist, stehen zentrale Klassen wie "Buchung", "Elektronikgerät", "Mieter" und "Vermieter" im Mittelpunkt. Diese Klassen repräsentieren die Hauptbausteine des Systems und beinhalten essenzielle Informationen für die reibungslose Funktionsweise der Anwendung.

![Klassendiagramm](/doc/figures/Klassendiagramm.png)

Diese diversen Klassen und Strukturen formen gemeinsam ein umfassendes Datenmodell, das sowohl den geschäftlichen als auch den technischen Anforderungen der Anwendung gerecht wird. Das Modell bildet somit eine klare Grundlage für die effiziente Verwaltung und Verarbeitung von Daten innerhalb der Anwendung.

## 2.8 Mockup

Die Erstellung von Mockups ist ein entscheidender Schritt bei der Entwicklung einer Webplattform für die Vermietung von Elektronikgeräten. Mockups dienen als visuelle Vorstellung davon, wie die Website aussehen und funktionieren wird, noch bevor sie programmiert oder designt wird. Diese Phase bietet zahlreiche Vorteile und spielt eine wichtige Rolle im Entwicklungsprozess.

Zunächst einmal ermöglichen Mockups den Stakeholdern, einschließlich Entwicklern, Designern und potenziellen Benutzern, ein klares Verständnis der geplanten Funktionalitäten und des Erscheinungsbilds der Plattform zu gewinnen. Durch die Visualisierung von Layouts, Benutzeroberflächen und Interaktionsmöglichkeiten können potenzielle Probleme frühzeitig erkannt und behoben werden, noch bevor die eigentliche Entwicklung beginnt.

Darüber hinaus fördern Mockups die Kommunikation und Zusammenarbeit im Entwicklerteam, da sie eine gemeinsame Referenz bieten, um über Designentscheidungen zu diskutieren und Feedback zu geben. Dies trägt dazu bei, Missverständnisse zu vermeiden und sicherzustellen, dass alle Beteiligten dasselbe Ziel vor Augen haben.

Nicht zuletzt dienen Mockups als wertvolles Werkzeug, um potenzielle Investoren, Partner und Interessenten von der Vision und dem Potenzial der Webplattform zu überzeugen. Ein überzeugendes und ansprechendes Mockup kann das Interesse wecken und dazu beitragen, Unterstützung und Ressourcen für die weitere Entwicklung zu gewinnen.

In diesem Abschnitt meiner Arbeit werde ich daher die Mockups für die Webplattform zur Vermietung von Elektronikgeräten präsentieren und erläutern. Ich werde die verschiedenen Seiten und Funktionen der Plattform visualisieren und die zugrunde liegenden Designentscheidungen erklären, um ein umfassendes Verständnis für das geplante Produkt zu vermitteln.

### 2.8.1 Startseite

Auf der Startseite von TechLand werden Besucher mit einem freundlichen Willkommenstext begrüßt. Hier können Nutzer sich durch einen Klick auf den Login-Button anmelden und eine Auswahl an elektronischen Geräten wie Laptops, Smartphones und Haushaltsgeräten entdecken. Wir laden Sie ein, unsere Plattform zu erkunden, die für Qualität, Vielfalt und erstklassigen Service steht, um Ihnen bei technologischen Entscheidungen zu helfen.

![Startseite](/doc/figures/Startseite.png)

### 2.8.2 Suchen

Auf der Suchseite von TechLand finden Besucher eine benutzerfreundliche Oberfläche für die gezielte Suche nach elektronischen Geräten. Klar strukturierte Kategorien erleichtern die Navigation, während die Suchbox eine schnelle Suche nach bestimmten Geräten, Marken oder Funktionen ermöglicht. Die Suchergebnisse werden dynamisch aktualisiert und in Echtzeit angezeigt. Vorgeschlagene Geräte in Bildform helfen dabei, neue Produkte zu entdecken und die Suche zu erleichtern. Unsere Suchseite lädt Sie ein, die Vielfalt elektronischer Geräte bei TechLand zu erkunden, ohne von überflüssigen Informationen überwältigt zu werden.

![Suchen](/doc/figures/Suchen.png)

### 2.8.3 Konto

Auf der Kontoinformationsseite bei TechLand finden Nutzer alle ihre persönlichen Daten wie Name, E-Mail-Adresse, Adresse und Zahlungsmethode übersichtlich dargestellt. Hier können sie ihre Daten einfach einsehen und verwalten. TechLand legt großen Wert auf die Sicherheit der Nutzerdaten und stellt sicher, dass alle Informationen verschlüsselt und geschützt sind.

![Konto](/doc/figures/Konto.png)

### 2.8.4 Gerät Hinzufügen

Auf der Seite zum Hinzufügen von Mietgeräten bei TechLand können Nutzer problemlos neue Produkte zur Vermietung hinzufügen. Ein benutzerfreundliches Formular ermöglicht es, alle relevanten Informationen einzugeben. Dazu gehören der Name des Geräts, eine detaillierte Beschreibung, der Preis pro Mieteinheit und die Verfügbarkeit mit genauen Datumseingaben. Zusätzlich können Nutzer Bilder hochladen, um ihre Geräte ansprechend zu präsentieren. Dieses Formular bietet eine einfache und effiziente Möglichkeit, neue Mietgeräte zum TechLand-Angebot hinzuzufügen und die Vermietung zu verwalten.

![DeviceAdd](/doc/figures/DeviceAdd.png)

### 2.8.5 Transaktionen

Auf der Transaktionsseite bei TechLand sehen Nutzer alle ihre Transaktionen auf einen Blick. Hier werden die Namen der Mieter, das Transaktionsdatum und der Betrag übersichtlich dargestellt. Zusätzlich gibt es eine Checkbox, die anzeigt, ob die Transaktion abgeschlossen ist. Diese Seite bietet eine einfache Möglichkeit, den Überblick über alle Transaktionen zu behalten und den Status jeder einzelnen zu verfolgen.

![Transaktion](/doc/figures/Transaktion.png)
