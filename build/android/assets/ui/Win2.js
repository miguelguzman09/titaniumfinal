function Win2(){
	//Creamos una ventana
	var win = Ti.UI.createWindow({
		backgroundColor:'#000'
	}),
	dataBase = require('ui/DataBase'),
	//Creamos un TableView
	table = Ti.UI.createTableView({

	});
	//Añadimos el TableView a nuestro contenedor
	win.add(table);
	
	//Evento
	//Cada vez que win tenga el foco se actualiza
	win.addEventListener('focus',function(e){
		//Creamos una nueva consulta
		var dataBaseObj = new dataBase('querying',null);
		//Nuestro arreglo de objetos TableViewRow
		data = [];
		//Mientras i este en dataBaseObj
		for (var i in dataBaseObj) {
			//Genera una fila
			var row = Ti.UI.createTableViewRow({
				title: dataBaseObj[i]
			});
			//Agregamos la fila
			data.push(row);
		};
		//Para mostrar los datos en la Tabla
		table.data = data;
	});
	
	//Nos regresara la ventana con todos los elementos
	return win;
}
module.exports = Win2;
