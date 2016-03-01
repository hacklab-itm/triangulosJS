function triangulo(){
	var base; //En está variable quedará la información que nos manden del html con el valor base
	var altura; //En está variable quedará la información que nos manden del html con el valor altura
	var superficie; //En está variable quedará la información que nos manden del html con el valor superficie	

	base = document.getElementById("base").value;
	altura = document.getElementById("altura").value;	

	superficie = base * altura / 2;

	/*Creamos una variable, no importa el nombre, donde le diremos que cree un elemento en este caso p, un parrafo y será el que contenga la información resultante*/	
	var node = document.createElement("p");
	
	/*Luego creamos otra variable que será la que contenga el texto que mostrará en el DOM*/
	var textnode = document.createTextNode("La superficie del triangulo con base " + base + " y altura " + altura + " es: " + superficie);

	/*Luego con el metodo appendChild y el objeto que creamos "node" le indicamos que queremos imprimir esto siempre al final sin sobre escribir el anterior*/
	node.appendChild(textnode);

	/*Por último le decimos donde queremos que lo imprima, nosotros creamos un div para tener control de esto*/
	document.getElementById("respuesta").appendChild(node);

	/*
	En el hacklab usamos metodo document.write(), vimos que eso escribe al final del documento html lo cual puede llegar a resulta incomod.
	Pero  nosotros podemos decirle al js donde queremos poner nuestra información, utilizando los id que definimos en el html, en este caso en el html creamos un div con el id respuesta (<div id="respuesta"></div>) totalmente vacio, pero que ahí siempre será donde aparecerá la información resultante de lo que estamos consultando. */
	
}
