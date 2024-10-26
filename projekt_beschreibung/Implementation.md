# 3 Implementation

Wir befinden uns nun in der Phase der tatsächlichen Umsetzung der TechLand-Plattform, und dazu nutzen wir Visual Studio Code als Entwicklungsumgebung. Dieses Projekt ist äußerst komplex, da es sowohl das Frontend als auch das Backend umfasst und Java für die Backend-Entwicklung und Svelte für das Frontend verwendet.

Unsere Entwicklung wird sich auf verschiedene Schlüsselbereiche konzentrieren, die den Funktionsumfang der Plattform definieren. Dabei haben uns die wöchentlichen Aufgaben maßgeblich geholfen, ein tieferes Verständnis für die verschiedenen Seiten und Funktionen zu entwickeln. Durch die systematische Herangehensweise konnten wir Schritt für Schritt die einzelnen Seiten wie die Startseite, die Suchseite, die Kontoinformationsübersicht und die Transaktionsseite verstehen und umsetzen.

Die wöchentlichen Aufgaben boten uns die Möglichkeit, uns intensiv mit den Anforderungen und dem Design der Plattform auseinanderzusetzen. Dadurch konnten wir die Benutzererfahrung genau definieren und die Funktionalitäten entsprechend implementieren.

Wir konnten auch die Herausforderungen besser bewältigen, die bei der Integration von Java für das Backend und Svelte für das Frontend auftreten können. Durch die regelmäßige Auseinandersetzung mit diesen Technologien konnten wir sicherstellen, dass wir effiziente Lösungen entwickeln, die die Anforderungen der Plattform erfüllen.

Insgesamt haben uns die wöchentlichen Aufgaben dabei unterstützt, das komplexe Projekt der TechLand-Plattform strukturiert anzugehen und erfolgreich umzusetzen.

## 3.1 Tools

Im TechLand-Projekt wurden verschiedene Technologien eingesetzt, um eine optimale Lösung zu gewährleisten. Hier ist eine detaillierte Beschreibung der verwendeten Technologien:

- **Backend:** Das Backend der Anwendung basiert auf dem Spring Boot Framework, einem Java-Framework, das die Entwicklung stand-alone und produktionsreifer Spring-basierter Anwendungen erleichtert. Dies ermöglicht es den Entwicklern, sich auf die Implementierung der Geschäftslogik zu konzentrieren.
- **Frontend:** Für das Frontend wurde neben Svelte auch auf moderne JavaScript-Compiler-Frameworks zurückgegriffen, um eine einfache Syntax und hohe Performance zu gewährleisten. Dadurch entsteht eine interaktive Benutzeroberfläche, die effizient funktioniert.
- **Datenbank:** Zur Persistierung der Daten wurde MongoDB auf Atlas verwendet. MongoDB ist eine dokumentenorientierte NoSQL-Datenbank, die horizontale Skalierbarkeit und eine flexible Dokumentstruktur bietet. Die Entscheidung für MongoDB Atlas ermöglicht eine einfache Bereitstellung und Verwaltung der Datenbank in der Cloud.

### 3.1.1 Deployment

Die Anwendung wurde auf dem Azure App Service bereitgestellt. Dieser Platform-as-a-Service (PaaS) von Microsoft Azure ermöglicht eine schnelle Erstellung, Bereitstellung und Skalierung von Web-Apps.

- **Authentifizierung und Autorisierung:** Für die Authentifizierung und Autorisierung der Benutzer wurde auf Auth0 zurückgegriffen. Auth0 ist eine flexible und sichere Plattform, die eine Vielzahl von Authentifizierungsszenarien unterstützt.

### 3.1.2 Testing

Zur Erstellung von Unit-Tests und Integrationstests wurden JUnit und Mockito verwendet. Die Testabdeckung wurde mit JaCoCo gemessen. Für die Dokumentation der API und Tests wurde Postman verwendet.

- **Projektmanagement und Vorgehen:** Das Projektmanagement erfolgte über GitHub, wobei mehrere Sprints durchgeführt und dokumentiert wurden. GitHub Issues und GitHub Project wurden genutzt, um den Fortschritt zu verfolgen und zu dokumentieren. Docker und GitHub Actions wurden verwendet, um die Anwendung zu containerisieren und automatisch auf Azure App Service zu deployen.

Zusammenfassend wurden die Technologien aufgrund ihrer spezifischen Stärken und Kompatibilität mit den Anforderungen des TechLand-Projekts ausgewählt. Jede Technologie deckt eine breite Palette von Funktionen und Anforderungen ab, die für die Erstellung einer modernen und robusten Webanwendung erforderlich sind.

## 3.2 Implementation Iteration

### 3.2.1 Sign Up

Der Sign-up-Prozess ermöglicht es neuen Benutzern, ein Konto in der Webanwendung zu erstellen und auf ihre Funktionalitäten zuzugreifen. Sobald die Benutzer die Sign-up-Seite erreichen, werden sie aufgefordert, ihre persönlichen Informationen einzugeben. Dazu gehören Vorname, Nachname, E-Mail-Adresse und ein sicheres Passwort. Die Anwendung validiert dann die eingegebenen Daten, um sicherzustellen, dass alle Felder korrekt ausgefüllt sind und das Passwort den Sicherheitsstandards entspricht. Sobald die Eingaben validiert sind, wird das Konto des Benutzers erstellt und die Daten werden sicher in der Datenbank gespeichert. Anschließend erhält der Benutzer eine Bestätigungsmeldung über die erfolgreiche Kontoerstellung und wird zur Login-Seite weitergeleitet, wo er sich mit den neu erstellten Anmeldeinformationen anmelden kann.

![SignUp](/doc/figures/SignUp.png)

### 3.2.2 Login

Der Login-Vorgang ermöglicht es registrierten Benutzern, sich bei der Webanwendung anzumelden und auf ihre persönlichen Konten zuzugreifen. Auf der Login-Seite werden die Benutzer aufgefordert, ihre E-Mail-Adresse und ihr Passwort einzugeben, um sich zu authentifizieren. Sobald die Benutzer ihre Anmeldeinformationen eingegeben haben, überprüft die Anwendung die Eingaben, um sicherzustellen, dass sie mit einem vorhandenen Konto übereinstimmen. Dieser Schritt beinhaltet die Validierung der E-Mail-Adresse und die Überprüfung, ob das eingegebene Passwort mit dem in der Datenbank gespeicherten Passwort übereinstimmt.

Wenn die eingegebenen Anmeldeinformationen gültig sind, gewährt die Anwendung dem Benutzer Zugang zu seinem persönlichen Konto und seinen damit verbundenen Funktionen. Andernfalls wird dem Benutzer eine Fehlermeldung angezeigt, die ihn darüber informiert, dass die Anmeldeinformationen ungültig sind, und er wird aufgefordert, sie erneut einzugeben.

Der Login-Vorgang bietet registrierten Benutzern einen sicheren und einfachen Zugang zu ihren Konten und den Funktionen der Webanwendung.

![Anmelden](/doc/figures/Anmelden.png)


### 3.2.3 Homepage

Die Homepage von TechLand heißt die Benutzer mit einem einladenden Willkommenstext willkommen und präsentiert die Plattform stolz als Vermittlungsplattform für Elektronikgeräte, auf der Benutzer Geräte mieten oder vermieten können. Das Design ist modern und freundlich, und das TechLand-Logo steht deutlich oben auf der Seite.

Die Navigationsleiste oben auf der Seite bietet direkten Zugriff auf die wichtigsten Bereiche der Webanwendung: TechLand, Mieter, Vermieter, Elektronikgeräte und Account. Benutzer können jederzeit zur Homepage zurückkehren, die Funktionen für Mieter oder Vermieter erkunden, nach Elektronikgeräten suchen oder ihren Account verwalten.

Rechts oben auf der Seite finden Benutzer zwei Schlüsselelemente: einen Log-out-Button, der es ihnen ermöglicht, sich sicher abzumelden, und die Anzeige ihrer angemeldeten E-Mail-Adresse, die eine schnelle Referenz für ihr Konto bietet.

Die Homepage von TechLand bietet eine klare und intuitive Navigation sowie einen freundlichen Einstiegspunkt für Benutzer, um die Plattform zu erkunden und ihre Elektronikbedürfnisse zu erfüllen.

![Homepage](/doc/figures/Homepage.png)

### 3.2.4 Mieter erstellen

Auf der Mieter-Seite von TechLand haben Benutzer die Möglichkeit, sich als Mieter zu registrieren oder vorhandene Mieter auf der Plattform einzusehen. Der Registrierungsvorgang erfordert lediglich die Eingabe von Name und E-Mail-Adresse.

Wenn Benutzer sich als Mieter registrieren möchten, müssen sie lediglich ihre persönlichen Informationen, nämlich ihren Namen und ihre E-Mail-Adresse, in die entsprechenden Felder eingeben. Nachdem sie die erforderlichen Informationen eingegeben haben, können sie auf die Schaltfläche "Registrieren" oder einen ähnlichen Button klicken, um den Registrierungsvorgang abzuschließen.

Nachdem der Registrierungsvorgang erfolgreich abgeschlossen wurde, werden die neuen Mieterdaten sicher in der Datenbank gespeichert. Anschließend werden die Benutzer auf die Mieter-Seite zurückgeleitet, wo sie eine Bestätigungsnachricht erhalten, dass ihre Registrierung erfolgreich war.

Unterhalb des Registrierungsformulars finden Benutzer eine Auflistung aller bisher registrierten Mieter auf der TechLand-Seite. Diese Auflistung ermöglicht es Benutzern, einen Überblick über die vorhandenen Mieter zu erhalten und gegebenenfalls Kontakt mit ihnen aufzunehmen oder weitere Informationen zu erhalten.

Insgesamt bietet die Mieter-Seite von TechLand eine benutzerfreundliche Umgebung, in der Benutzer sich problemlos als Mieter registrieren können und gleichzeitig Zugang zu Informationen über andere registrierte Mieter haben.

![MieterErstellen](/doc/figures/MieterErstellen.png)

### 3.2.5 Vermieter erstellen

Auf der Vermieter-Seite von TechLand haben registrierte Benutzer, die Geräte vermieten möchten, Zugriff auf die entsprechenden Funktionen und Optionen. Benutzer können hier Geräte zum Vermieten einstellen, verfügbare Geräte verwalten und Informationen über ihre vermieteten Geräte einsehen.

Der Vermieter kann über das entsprechende Formular Geräte zum Vermieten einstellen, indem er Details wie Gerätetyp, Beschreibung, Verfügbarkeit und Mietpreis angibt. Nach dem Einstellen werden diese Informationen auf der Plattform veröffentlicht, damit potenzielle Mieter sie einsehen und mieten können.

Zusätzlich zur Einstellung von Geräten können Vermieter auf der Seite eine Übersicht über ihre bisher vermieteten Geräte einsehen. Hier können sie Informationen wie Mietdauer, Mieterdetails und vergangene Transaktionen einsehen, um den Überblick über ihre Vermietungen zu behalten.

Die Vermieter-Seite bietet eine benutzerfreundliche Umgebung, in der Vermieter ihre Geräte effizient verwalten und potenzielle Einnahmen maximieren können.

![VermieterErstellen](/doc/figures/VermieterErstellen.png)

### 3.2.6 Elektronikgerät erfassen

Auf der Elektronikgeräte-Seite von TechLand haben Benutzer die Möglichkeit, ihre eigenen Geräte zu inserieren sowie bereits vorhandene Geräte anderer Vermieter einzusehen. Beim Inserieren eines Geräts können Benutzer den Modellnamen, den Typ des Geräts und den Mietpreis pro Tag angeben.

Zusätzlich zur Inserierungsfunktion können Benutzer auf derselben Seite alle bereits inserierten Geräte anderer Vermieter einsehen. Diese Liste kann nach bestimmten Kriterien gefiltert werden, wie zum Beispiel dem Mindestmietpreis oder dem Gerätetyp. Nachdem die Filter angewendet wurden, werden nur die Geräte angezeigt, die die entsprechenden Kriterien erfüllen.

In der Auflistung der Geräte werden die Modellnamen, die Eigenschaften in Form eines Textes, der Gerätetyp und der Mietpreis angezeigt. Zusätzlich gibt es eine Statusspalte, die angibt, ob das Gerät für die Vermietung verfügbar ist oder ob es bereits vermietet wurde und an welchen Mieter es vermietet wurde. In der Statusspalte gibt es drei Buttons: "Mieten" (anklickbar, um das Gerät zu mieten), "Vermietet" (anklickbar, um das Gerät als vermietet zu markieren) und "Zurückgegeben" (anklickbar, um das Gerät als zurückgegeben zu markieren).

Da maximal vier Geräte pro Seite angezeigt werden, können Benutzer mit der "Mieten"-zu-"Vermietet"-Funktion auf die nächste Seite navigieren, um weitere Geräte zu sehen, und so weiter.

Die Elektronikgeräte-Seite von TechLand bietet eine übersichtliche Möglichkeit für Benutzer, Geräte zu inserieren, verfügbare Geräte anderer Vermieter einzusehen und bequem nach ihren Präferenzen zu filtern.

![DeviceCreate](/doc/figures/DeviceCreate.png)

### 3.3 Auth0-Integration

Ich habe meine Webanwendung mit Auth0 integriert, indem ich mich auf der Auth0-Website registriert und ein Konto erstellt habe. Nach dem Einloggen in das Auth0-Dashboard habe ich eine neue Anwendung erstellt, um meine Webanwendung zu integrieren. Dabei habe ich den Anwendungstyp (z. B. Regular Web Application) ausgewählt und die erforderlichen Informationen wie den Anwendungsnamen und die zugehörige Domain angegeben.

Nach der Erstellung der Anwendung habe ich die Auth0-Konfiguration in meiner Webanwendung vorgenommen. Dazu habe ich die Client ID, Client Secret und die Domain von Auth0 in meiner Anwendung hinterlegt. Anschließend habe ich die Auth0-Integration in meinem VS Code-Projekt vorgenommen und die entsprechenden Auth0-Bibliotheken installiert und konfiguriert.

Sobald die Integration abgeschlossen war, habe ich meine Webanwendung auf GitHub hochgeladen und mit Auth0 auf dem Auth0-Dashboard verbunden. Dadurch konnte ich die Authentifizierung und Autorisierung meiner Webanwendung über Auth0 verwalten. Mit den bereitgestellten Client-ID und Domain von Auth0 konnte ich dann die Authentifizierung in meiner Webanwendung ermöglichen und die Benutzer sicher anmelden lassen.

![Auth0](/doc/figures/Auth0.png)

### 3.3.1 Rollenverwaltung mit Auth0

In unserer Anwendung verwenden wir Auth0 zur Verwaltung der Benutzerrollen. Diese Rollen helfen uns, die Zugriffsrechte der Benutzer zu steuern und sicherzustellen, dass nur autorisierte Benutzer bestimmte Aktionen durchführen können. Die folgenden Rollen wurden definiert:

#### Rollenbeschreibung

##### admin
- **Beschreibung**: Diese Rolle wird Administratoren zugewiesen, die umfassende Zugriffsrechte auf alle Ressourcen und Funktionen der Anwendung haben. Administratoren können Benutzer verwalten, Rollen zuweisen und sämtliche Inhalte erstellen, lesen, aktualisieren und löschen.
- **Berechtigungen**: Vollzugriff auf alle API-Endpunkte und administrative Funktionen der Anwendung.

##### Mieter
- **Beschreibung**: Diese Rolle wird Mietern zugewiesen, die eingeschränkte Zugriffsrechte auf die Anwendung haben. Mieter können ihre eigenen Profile verwalten und auf bestimmte mieterspezifische Funktionen zugreifen.
- **Berechtigungen**: Zugriff auf mieterspezifische API-Endpunkte und Funktionen. Keine administrativen Rechte.

##### Vermieter
- **Beschreibung**: Diese Rolle wird Vermietern zugewiesen, die erweiterte Zugriffsrechte auf die Anwendung haben. Vermieter können ihre eigenen Profile verwalten, Inhalte erstellen und auf bestimmte vermieterspezifische Funktionen zugreifen.
- **Berechtigungen**: Zugriff auf vermieterspezifische API-Endpunkte und Funktionen. Keine administrativen Rechte.

#### Verwaltung der Rollen in Auth0

![Auth0Roles](/doc/figures/Auth0Roles.png)

Um die oben beschriebenen Rollen in Auth0 zu erstellen und zu verwalten, befolgen Sie die folgenden Schritte:

1. Melden Sie sich bei Ihrem Auth0-Dashboard an.
2. Navigieren Sie zu **Roles** im linken Menü.
3. Klicken Sie auf **Create Role**, um eine neue Rolle zu erstellen.
4. Geben Sie der Rolle einen Namen und eine Beschreibung entsprechend der oben definierten Rollen.
5. Fügen Sie die entsprechenden Berechtigungen hinzu, die dieser Rolle zugewiesen werden sollen.
6. Speichern Sie die Rolle.

#### Zuweisen von Rollen zu Benutzern

Um Rollen zu Benutzern zuzuweisen, befolgen Sie die folgenden Schritte:

1. Melden Sie sich bei Ihrem Auth0-Dashboard an.
2. Navigieren Sie zu **Users** im linken Menü.
3. Wählen Sie den Benutzer aus, dem Sie eine Rolle zuweisen möchten.
4. Gehen Sie zum Tab **Roles** und klicken Sie auf **Assign Roles**.
5. Wählen Sie die gewünschte Rolle aus und klicken Sie auf **Assign**.

Durch die Verwendung dieser Rollenverwaltung können wir sicherstellen, dass Benutzer nur auf die Ressourcen und Funktionen zugreifen können, für die sie autorisiert sind, und dass sensible administrative Aufgaben nur von berechtigten Administratoren durchgeführt werden können.



### 3.4 Webanwendung auf Azure deployen: VS Code, Docker, GitHub

#### 3.4.1 Integration mit VS Code

Die Azure-Ressourcen wurden direkt von Visual Studio Code aus erstellt und verwaltet. Dazu wurden passende Erweiterungen verwendet, um eine nahtlose Interaktion mit Azure-Diensten wie Azure App Service und Azure Functions zu ermöglichen.

#### 3.4.2 Dockerfile-Erstellung

Ein Dockerfile wurde erstellt, um die Anwendung in einem Docker-Container zu containerisieren. Das Dockerfile enthält Anweisungen zum Erstellen des Anwendungsimages mit allen benötigten Abhängigkeiten und Konfigurationen.

![Dockerfile](/doc/figures/Dockerfile.png)

#### 3.4.3 GitHub-Verbindung

Die Codebasis wurde auf GitHub gehostet, um eine effektive Versionskontrolle und Zusammenarbeit mit anderen Entwicklern zu ermöglichen. Die Verbindung von Azure mit GitHub wurde genutzt, um automatisierte Bereitstellungsprozesse wie Continuous Deployment (CI/CD) einzurichten.

![PublishProfile](/doc/figures/PublishProfile.png)

#### 3.4.4 Erstellung der YAML-Datei

Eine YAML-Datei wurde erstellt, die die Pipeline für den Bereitstellungsprozess beschreibt. Diese Datei enthält Anweisungen zum Aufbau, Testen und Bereitstellen der Anwendung mithilfe von Tools wie Azure Pipelines.

![YAML](/doc/figures/YAML.png)

#### 3.4.5 Bereitstellung auf Azure

Nachdem die Konfigurationen und Dateien vorbereitet wurden, wurde der Bereitstellungsprozess gestartet. Azure verwendet die Informationen aus dem Dockerfile, der YAML-Datei und der GitHub-Verbindung, um die Anwendung automatisch auf Azure bereitzustellen.

![Azure](/doc/figures/Azure.png)

Auf GitHub kann man unter "Actions" überprüfen, ob die Verbindung zur YAML-Datei erfolgreich war. Zuerst wird der Build-Prozess gestartet und anschließend die Azure-Website bereitgestellt. Dieser Vorgang wird aus Visual Studio Code heraus mit der Push-Funktion initiiert. Wenn alles erfolgreich verläuft, erhält man den Link zur Webseite. Zudem können in "Actions" detaillierte Protokolle eingesehen werden, die den Verlauf und eventuelle Fehler während des Build- und Bereitstellungsprozesses dokumentieren. So kann man sicherstellen, dass jeder Schritt ordnungsgemäß ausgeführt wurde und mögliche Probleme schnell identifiziert und behoben werden können.

![BuildDeploy](/doc/figures/BuildDeploy.png)

Wenn das Deployment erfolgreich abgeschlossen wurde, sollten Sie in der Lage sein, den bereitgestellten Azure-Link zu öffnen. Die Applikation sollte dann wie gewohnt angezeigt werden, vergleichbar mit der Darstellung und Funktionalität, die Sie von Ihrem lokalen Host kennen.

![DeploySuccess](/doc/figures/DeploySuccess.png)


Dieser Iterationsabschnitt fokussiert sich auf die Implementierung der grundlegenden Funktionen der TechLand-Webanwendung. Dazu gehören das Erfassen und Anzeigen von Elektronikgeräten, das Erfassen und Anzeigen von Mietern sowie das Erfassen und Anzeigen von Vermietern. Diese Funktionen bilden die Grundlage für die Vermietung und Buchung von Elektronikgeräten über die TechLand-Plattform. Die folgenden Issues wurden im ersten Sprint der Implementierungsphase umgesetzt.

![Iteration1](/doc/figures/Iteration1.png)

### 3.5 Endpoints

#### 3.5.1 Auflistung aller gespeicherten Geräte

Diese Grafik zeigt den Endpoint `localhost/api/device`, der eine JSON-Auflistung aller gespeicherten Elektronikgeräte darstellt. Diese Geräte werden in einer MongoDB-Datenbank gespeichert und sind mit meiner Webapplikation, die in Visual Studio Code entwickelt wurde, verbunden. Über diesen Endpoint können alle Geräte abgerufen werden, die auf der Vermittlungsplattform TechLand verfügbar sind. Die angezeigten Informationen umfassen die Geräte-ID, den Namen, die Eigenschaften des Geräts, den Gerätetyp, den Mietpreis, die Vermieter-ID und den Gerätestatus (verfügbar oder vermietet).

![ApiDevice](/doc/figures/ApiDevice.png)

#### 3.5.2 Gerät an Mieter vermieten

Diese Grafik zeigt den Endpoint `localhost/api/service/assignDevice`. Hierbei handelt es sich um die Funktion zur Vermietung eines Geräts an einen Mieter. Über diesen Endpoint können die Details eines Mietvorgangs übermittelt werden. Die relevanten Informationen umfassen die Geräte-ID, den Namen, die Eigenschaften des Geräts, den Gerätetyp, den Mietpreis, die Vermieter-ID und den Gerätestatus, der von "verfügbar" auf "vermietet" geändert wird.

![ApiAssignDevice](/doc/figures/ApiAssignDevice.png)

#### 3.5.3 Vermietung abschließen

Diese Grafik zeigt den Endpoint `localhost/api/service/completeDevice`. Diese Funktion ermöglicht es, einen Mietvorgang abzuschließen. Wenn die Vermietung beendet ist, wird der Gerätestatus von "vermietet" auf "retourniert" geändert. Dadurch wird angezeigt, dass das Gerät zurückgegeben wurde und nicht mehr im Besitz des Mieters ist.

![ApiServiceCompleteDevice](/doc/figures/ApiServiceCompleteDevice.png)

#### 3.5.4 Aggregationszustand aller Geräte

Diese Grafik zeigt den Endpoint `localhost/api/device/aggregation/state`, der eine Liste aller Geräte sowie deren aktuellen Zustand darstellt. Dieser Endpoint bietet eine Übersicht darüber, welche Geräte verfügbar, vermietet oder retourniert sind. Die Informationen umfassen die Geräte-ID, den Namen, die Eigenschaften des Geräts, den Gerätetyp, den Mietpreis, die Vermieter-ID und den aktuellen Gerätestatus.

![ApiDeviceAggregationState](/doc/figures/ApiDeviceAggregationState.png)

Sobald ein Vermieter erfasst wird, werden seine Informationen in der MongoDB-Datenbank gespeichert. Dabei werden Details wie der vollständige Name, die E-Mail-Adresse und die Anschrift des Vermieters erfasst. Diese Daten können entweder direkt über die TechLand-Webanwendung oder durch direkte Eingaben in die MongoDB-Datenbank erzeugt und verwaltet werden. Dadurch wird sichergestellt, dass alle relevanten Vermieterinformationen zentral gespeichert und bei Bedarf leicht zugänglich sind.

![MongoDB](/doc/figures/MongoDB.png)


### 3.6 Frontend Erweiterungen: Pagination, Filtering, Berücksichtigung von User-Rollen

#### 3.6.1 Pagination

Für die Techland-Plattform wurde eine Pagination-Funktion implementiert, um die Benutzerfreundlichkeit bei der Anzeige der Elektronikgeräte zu verbessern. Mit der Pagination können die Geräte in mehrere Seiten unterteilt dargestellt werden, anstatt alle auf einmal anzuzeigen. Dies wird durch die Erweiterung des Endpoints `localhost/api/device` um die Query-Parameter `pageNumber` und `pageSize` ermöglicht. Diese Parameter erlauben es, die gewünschte Seite und die Anzahl der Geräte pro Seite festzulegen. Im Frontend wurde die Pagination mithilfe von Bootstrap realisiert, was eine einfache und intuitive Navigation zwischen den Seiten ermöglicht. So können Benutzer bequem durch die verschiedenen Seiten blättern und die Geräteübersicht effizient durchsuchen.

![Pagination](/doc/figures/Pagination.png)

Die Grafik zeigt die implementierte Pagination-Funktion der Techland-Plattform. Auf dem Bildschirm ist eine Liste von Elektronikgeräten zu sehen, die in Seiten unterteilt ist. Am unteren Rand der Liste befinden sich Navigationsschaltflächen, mit denen der Benutzer zwischen den Seiten wechseln kann.

### 3.6.2 Filterfunktion

Um die Suche nach Elektronikgeräten auf der Techland-Plattform zu erleichtern, wurde eine umfassende Filterfunktion implementiert. Diese Funktion ermöglicht es den Benutzern, gezielt nach bestimmten Geräteeigenschaften zu suchen. Nutzer können Filter wie den Gerätetyp oder einen Mindestmietpreis anwenden. Diese Filter werden durch zusätzliche Query-Parameter im Endpoint `localhost/api/device` realisiert. Im Frontend wurde ein Formular hinzugefügt, über das Benutzer die gewünschten Filterkriterien eingeben können. Nach Eingabe der Filterkriterien wird die Gerätekatalog aktualisiert, sodass nur die Geräte angezeigt werden, die den Suchkriterien entsprechen. Dies verbessert die Benutzererfahrung erheblich und ermöglicht eine gezieltere Suche nach den gewünschten Geräten.

![Filter](/doc/figures/Filter.png)

Die Grafik zeigt die implementierte Filterfunktion der Techland-Plattform. Oberhalb der Liste der Elektronikgeräte befinden sich Eingabefelder und Dropdown-Menüs, über die der Benutzer spezifische Kriterien wie Geräteeigenschaften oder Mietpreise eingeben kann. Nach Anwendung der Filter werden nur die Geräte angezeigt, die den eingegebenen Kriterien entsprechen.

### 3.6.3 Devicezuweisung

Ein wesentlicher Bestandteil der Techland-Plattform ist die Verwaltung der Gerätevermietung. Hierfür wurde der Endpoint `localhost/api/service/assignDevice` implementiert, der die Zuweisung eines Geräts an einen bestimmten Mieter ermöglicht. Diese Funktion ist entscheidend, um den Mietprozess zu verwalten und sicherzustellen, dass Geräte effizient und nachvollziehbar vermietet werden können. Im Frontend wurde eine Benutzeroberfläche entwickelt, die es Administratoren erleichtert, verfügbare Geräte auszuwählen und sie den entsprechenden Mietern zuzuweisen. Die relevanten Informationen, wie die Geräte-ID, der Name des Mieters und der Mietstatus, werden hierbei übersichtlich dargestellt. Diese Erweiterung trägt wesentlich zur Verbesserung der Verwaltung und Nachverfolgung von Mietvorgängen auf der Techland-Plattform bei.

![AssignDevice](/doc/figures/AssignDevice.png)

Die Grafik zeigt die implementierte Funktion zur Zuweisung von Geräten an Mieter. Auf dem Bildschirm ist eine Liste der Geräte zu sehen, und daneben befindet sich ein Bereich, in dem Administratoren ein Gerät auswählen und es einem bestimmten Mieter zuweisen können. Nach der Zuweisung wird der Mietstatus des Geräts aktualisiert.