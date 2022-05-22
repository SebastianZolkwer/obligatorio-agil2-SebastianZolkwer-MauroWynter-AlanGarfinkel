Feature: SpecFlowFeature1
	Simple calculator for adding two numbers

@mytag
Scenario: Delete Charging Point with valid id
	Given the id is 3
	When the user presses the button Eliminar
	Then the result should be 200

Scenario: Delete Charging Point with invalid id
	Given the id is 57
	When the user presses the button Eliminar
	Then the result should be 404