//Operadores de asignacion
console.log('Operadores de asignacion');
console.log('signo "=": asigna valor a una variable');
console.log('Ejemplo: let a = 7, ahora a vale 7');
let a = 7;

a += 1;
console.log('a += 1 =', a);
a -= 2;
console.log('a -= 2 =', a);
a *= 2;
console.log('a *= 2 =', a);
a /= 4;
console.log('a /= 4 =', a);

//Operadores aritmeticos
console.log("Operadores aritmeticos");
console.log('adicion: a + 4 =', a + 4);//adicion
console.log('resta: a - 2 =', a - 2);//resta
console.log('multiplicacion: a * 5 =', a * 5);//multiplicacion
console.log('division: a / 3 =', a / 3);//division
console.log('sobrante o modulo: a % 2 =', a % 2);//sobrante o modulo

//Operadores de incremento y decremento
console.log("Operadores de incremento y decremento");
a++;
console.log('a++ =', a);
a--;
console.log('a-- =', a);


//Operadores de comparacion
console.log("Operadores de comparacion");
console.log("igualdad: a == 3", a == 3);
console.log("desigualdad: a != 3", a != 3);
console.log("mayor que: a > 4", a > 4);
console.log("menor que: a < 4", a < 4);
console.log("Mayor o igual que: a >= 4", a >= 4);
console.log("Menor o igual que: a <= 4", a <= 4);
console.log("Identidad (igualdad estricta): a === 3", a === 3);
console.log("No identidad (desigualdad estricta): a !== 3", a !== 3);

//Operadores logicos
console.log("Operadores logicos");
console.log("AND (y): a && 1", a && 1);
console.log("OR (o): a || 1", a || 1);
console.log("NOT (no): !a", !a);

//Operadores bitwise (operaciones binarias)
console.log("Operadores bitwise (operaciones binarias)");
console.log("AND: a & 1", a & 1);
console.log("OR: a | 1", a | 1);
console.log("XOR: a ^ 1", a ^ 1);
console.log("NOT: ~a", ~a);
console.log("desplazamiento izquierdo: a << 1", a << 1);
console.log("desplazamiento derecho: a >> 1", a >> 1);

//Operadores de cadena
console.log("Operadores de cadena");
let w1 = "hola ";
let w2 = "mundo";
let frase = w1 + w2;
console.log("concatenacion: cadena1 + cadena2:", frase);
let cadena = "hola ";
console.log("concatenacion abreviada: cadena += string:", cadena += "mundo");

//Operadores condicionales 
console.log("Operadores condicionales");
console.log("condicional ternario: a = 3? a es 3 : a no es 3 =", a = 3? "a es 3" : "a no es 3");
