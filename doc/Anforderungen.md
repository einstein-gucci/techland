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