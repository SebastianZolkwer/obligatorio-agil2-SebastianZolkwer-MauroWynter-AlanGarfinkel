Feature: Test Alta Puntos de carga
 Scenario: Creo un punto de carga con campos correctos
    Given I view the "http://localhost:4200/admin/chargingPoint/create"
    When Ingreso el valor "punto de carga 1" en el campo "nombre"
    When Ingreso el valor "Rambla gandhi 133" en el campo "direccion"
    When Ingreso el valor "Muy bueno" en el campo "descripcion"
    When Ingreso el valor "4785" en el campo "identificador"
    When  Selecciono el valor en la posicion 2 como región
    When Registro el punto de carga
    Then Veo el mensaje "Punto de carga creado con exito"

  Scenario: Creo un punto de carga con nombre mayor a 20 caracteres
    Given I view the "http://localhost:4200/admin/chargingPoint/create"
    When Ingreso el valor "Punto de carga 1, el mejor de la ciudad" en el campo "nombre"
    When Ingreso el valor "Rambla gWhenhi 133" en el campo "direccion"
    When Ingreso el valor "Muy bueno" en el campo "descripcion"
    When Ingreso el valor "4785" en el campo "identificador"
    When  Selecciono el valor en la posicion 2 como región
    When Registro el punto de carga
    Then Veo el mensaje de error "El nombre debe tener un máximo de 20 caracteres"

  Scenario: Creo un punto de carga sin nombre
    Given I view the "http://localhost:4200/admin/chargingPoint/create"
    When Ingreso el valor "Rambla gWhenhi 133" en el campo "direccion"
    When Ingreso el valor "Muy bueno" en el campo "descripcion"
    When Ingreso el valor "4785" en el campo "identificador"
    When  Selecciono el valor en la posicion 2 como región
    When Registro el punto de carga
    Then Veo el mensaje de error "El nombre debe tener un máximo de 20 caracteres"

  Scenario: Creo un punto de carga sin descripcion
    Given I view the "http://localhost:4200/admin/chargingPoint/create"
    When Ingreso el valor "punto de carga 1" en el campo "nombre"
    When Ingreso el valor "Rambla gWhenhi 133" en el campo "direccion"
    When Ingreso el valor "4785" en el campo "identificador"
    When  Selecciono el valor en la posicion 2 como región
    When Registro el punto de carga
    Then Veo el mensaje de error "La descripción debe tener un máximo de 60 caracteres"

  Scenario: Creo un punto de carga con descripcion mayor a 60 caracteres
    Given I view the "http://localhost:4200/admin/chargingPoint/create"
    When Ingreso el valor "punto de carga 1" en el campo "nombre"
    When Ingreso el valor "Rambla gWhenhi 133" en el campo "direccion"
    When Ingreso el valor " El punto de carga mejor de toda la ciudad, evndemos electricidad para los autos para que se puedan recargar facilmente" en el campo "descripcion"
    When Ingreso el valor "4785" en el campo "identificador"
    When  Selecciono el valor en la posicion 2 como región
    When Registro el punto de carga
    Then Veo el mensaje de error "La descripción debe tener un máximo de 60 caracteres"

  Scenario: Creo un punto de carga con direccion mayor a 30 caracteres
    Given I view the "http://localhost:4200/admin/chargingPoint/create"
    When Ingreso el valor "punto de carga 1" en el campo "nombre"
    When Ingreso el valor "Rambla gandhi 156 esquina TABARE Y luis alberto de herrera" en el campo "direccion"
    When Ingreso el valor "Muy bueno" en el campo "descripcion"
    When Ingreso el valor "4785" en el campo "identificador"
    When  Selecciono el valor en la posicion 2 como región
    When Registro el punto de carga
    Then Veo el mensaje de error "La dirección debe tener un máximo de 30 caracteres"

  Scenario: Creo un punto de carga sin direccion
    Given I view the "http://localhost:4200/admin/chargingPoint/create"
    When Ingreso el valor "punto de carga 1" en el campo "nombre"
    When Ingreso el valor "Muy bueno" en el campo "descripcion"
    When Ingreso el valor "4785" en el campo "identificador"
    When  Selecciono el valor en la posicion 2 como región
    When Registro el punto de carga
    Then Veo el mensaje de error "La dirección debe tener un máximo de 30 caracteres"


  Scenario: Creo un punto de carga sin region
    Given I view the "http://localhost:4200/admin/chargingPoint/create"
    When Ingreso el valor "punto de carga 1" en el campo "nombre"
    When Ingreso el valor "Rambla gandhi 133" en el campo "direccion"
    When Ingreso el valor "Muy bueno" en el campo "descripcion"
    When Ingreso el valor "4788" en el campo "identificador"
    When Registro el punto de carga
    Then Veo el mensaje de error "Debe seleccionar una región"

  Scenario: Creo un punto de carga sin identificador
    Given I view the "http://localhost:4200/admin/chargingPoint/create"
    When Ingreso el valor "punto de carga 1" en el campo "nombre"
    When Ingreso el valor "Rambla gandh 133" en el campo "direccion"
    When Ingreso el valor "Muy bueno" en el campo "descripcion"
    When Selecciono el valor en la posicion 2 como región
    When Registro el punto de carga
    Then Veo el mensaje de error "El identificador debe ser un número de 4 digitos"

  Scenario: Creo un punto de carga con identificador menor a 4 digitos
    Given I view the "http://localhost:4200/admin/chargingPoint/create"
    When Ingreso el valor "punto de carga 1" en el campo "nombre"
    When Ingreso el valor "Rambla gandhi 133" en el campo "direccion"
    When Ingreso el valor "Muy bueno" en el campo "descripcion"
    When Ingreso el valor "222" en el campo "identificador"
    When  Selecciono el valor en la posicion 2 como región
    When Registro el punto de carga
    Then Veo el mensaje de error "El identificador debe ser un número de 4 digitos"
