function Win1(){
	//Creamos una ventana
	var win = Ti.UI.createWindow({
		backgroundColor:'white'
	}),
	//Creamos una variable para utilizar el archivo DataBase
	dataBase = require('ui/DataBase'),
	//Creamos un boton con algunas propiedades
	//Para crear la base de datos
	buttonCreate = Ti.UI.createButton({
		title:'create',
		width:80,
		height:50,
		top:0
	}),
	//Creamos un campo de texto
	//Donde ingresamos los datos
	textField = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color:'black',
		width:200,
		top:35
	}), //AQUI NOS QUEDAMOS EN LA CLASE
	//Creamos un boton para insertar los datos en la base de datos
	buttonInsert = Ti.UI.createButton({
		title:'insert',
		width:80,
		height:50,
		left:50,
		top:70
	});
	//Creamos un boton para borrar los datos de la base de datos
	buttonDelete = Ti.UI.createButton({
		title:'delete',
		width:80,
		height:50,
		right:50,
		top:70
	});
	
	//Agregamos todos los elementos a nuestra ventana
	win.add(buttonCreate);
	win.add(textField);
	win.add(buttonInsert);
	win.add(buttonDelete);
	
	//Eventos
	//Evento para el boton Create
	buttonCreate.addEventListener('click', function(e){
		dataBase('create',null);
	});
	//Evento para el boton Insert
	buttonInsert.addEventListener('click', function(e){
		//Necesitamos agregar el valor del textField
		dataBase('insert',textField.value);
	});
	//Evento para el boton Delete
	buttonDelete.addEventListener('click', function(e){
		dataBase('delete',textField.value);
	});
	
	//Regresamos la ventana, todo lo que agreguemos en el contenedor se podra visualizar
	return win;
}
//Para mostrar las ventanas
module.exports = Win1;
