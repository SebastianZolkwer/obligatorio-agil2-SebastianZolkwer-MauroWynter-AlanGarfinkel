Feature: ChargingPoint
![Calculator](https://specflow.org/wp-content/uploads/2020/09/calculator.png)
Simple calculator for adding **two** numbers

Link to a feature: [Calculator](SpecChargingPoint/Features/Calculator.feature)
***Further read***: **[Learn more about how to generate Living Documentation](https://docs.specflow.org/projects/specflow-livingdoc/en/latest/LivingDocGenerator/Generating-Documentation.html)**

@mytag
Scenario: Create Charging Point with correct fields
	Given the name is "Punto de carga 1"
	And the description is "Servicio barato"
	And the address is "Rambla gandhi 133"
	And the identifier is "4785"
	And the regionId is 2
	When the administrator press the button Crear
	Then the result code should be 201

Scenario: Create Charging Point with wrong name
	Given the name is ""Punto de carga 1, el mejor de la ciudad"
	And the description is "Servicio barato"
	And the address is "Rambla gandhi 133"
	And the identifier is "4785"
	And the regionId is 2
	When the administrator press the button Crear
	Then the result code should be 400

Scenario: Create Charging Point with null name
	Given the name is ""
	And the description is "Servicio barato"
	And the address is "Rambla gandhi 133"
	And the identifier is "4785"
	And the regionId is 2
	When the administrator press the button Crear
	Then the result code should be 400

Scenario: Create Charging Point with wrong description
	Given the name is "punto de carga"
	And the description is "El punto de carga mejor de toda la ciudad, evndemos electricidad para los autos para que se puedan recargar facilmente"
	And the address is "Rambla gandhi 133"
	And the identifier is "4785"
	And the regionId is 2
	When the administrator press the button Crear
	Then the result code should be 400

Scenario: Create Charging Point with nil description
	Given the name is "punto de carga"
	And the description is ""
	And the address is "Rambla gandhi 133"
	And the identifier is "4785"
	And the regionId is 2
	When the administrator press the button Crear
	Then the result code should be 400

Scenario: Create Charging Point with wrong address
	Given the name is "punto de carga"
	And the description is "Muy bueno"
	And the address is "Rambla gandhi 156 esquina TABARE Y luis alberto de herrera"
	And the identifier is "4785"
	And the regionId is 2
	When the administrator press the button Crear
	Then the result code should be 400

Scenario: Create Charging Point with nil address
	Given the name is "punto de carga"
	And the description is "Muy buen"
	And the address is ""
	And the identifier is "4785"
	And the regionId is 2
	When the administrator press the button Crear
	Then the result code should be 400

Scenario: Create Charging Point with identifier with letters
	Given the name is "punto de carga"
	And the description is "Muy buen"
	And the address is "Rambla gandhi"
	And the identifier is "aa"
	And the regionId is 2
	When the administrator press the button Crear
	Then the result code should be 400

Scenario: Create Charging Point with identifier shorter
	Given the name is "punto de carga"
	And the description is "Muy buen"
	And the address is "Rambla gandhi"
	And the identifier is "234"
	And the regionId is 2
	When the administrator press the button Crear
	Then the result code should be 400

Scenario: Create Charging Point with not existent region id
	Given the name is "punto de carga"
	And the description is "Muy buen"
	And the address is "Rmbla gandhi"
	And the identifier is "4444"
	And the regionId is 0
	When the administrator press the button Crear
	Then the result code should be 400