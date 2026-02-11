/* Práctica trabajo con Clases
1.Crea la clase cuentaBancaria con las siguientes propiedades:
• Titular
• Iban
• Saldo
• Activa
2.Crea el constructor para construir el objeto.
3.Agrega los siguientes métodos:
• Mostrar toda la información de las clases
• Crea un método que si el cliente intenta retirar un importe superior al saldo, no le de
opción al usuario.
4. Crea tres objetos basados en esta clase. */

class cuentaBancaria {
    // 1 propiedades de la clase
    titular;
    iban;
    saldo;
    activa;

    constructor (titular, iban, saldo, activa){
        this.titular = titular;
        this.iban = iban;
        this.saldo = saldo;
        this.activa = activa;
    }

    printInfo () {
        console.log(`titular: ${this.titular}\niban: ${this.iban}\nsaldo: ${this.saldo}€\nactiva: ${this.activa}`);
    }

    retiro (monto) {
        if (monto > this.saldo) {
            console.log(`El monto ${monto} a retirar es mayor al saldo ${this.saldo}`);
        } else {
            this.saldo -= monto;
            console.log(`${monto}€ retirados. Saldo actual:${this.saldo}€`)
        }
    }
}

//Primer nuevo obejeto y prueba de métodos.
const cuentaPaco = new cuentaBancaria("Paco De Lucia", "ES000001", 1000, true);

cuentaPaco.printInfo();
cuentaPaco.retiro(101);

//Segundo objeto
const cuentaPaquita = new cuentaBancaria("Paquita La Del Barrio", "ES000002", 19999, false);
cuentaPaquita.printInfo();
cuentaPaquita.retiro(1999999);

//Tercer Objeto
const cuentaCamaron = new cuentaBancaria("Camarón De La Isla", "ES000003", 7777,  true);
cuentaCamaron.printInfo();
cuentaCamaron.retiro(7);
cuentaCamaron.retiro(7777);