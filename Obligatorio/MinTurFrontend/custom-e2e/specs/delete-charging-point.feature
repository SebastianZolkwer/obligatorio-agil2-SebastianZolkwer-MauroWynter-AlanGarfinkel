Feature: Test Puntos de carga

  Scenario: Elimino un punto de carga valido
    Given I view the "http://localhost:4200/admin/chargingPoint"
    When Selecciono el boton borrar del punto de carga "1"
    Then Veo el mensaje "Punto de carga eliminado"

