//Funcion con dos parametros
function DataBase(request,name){
	switch(request){
		//En caso de que sea el click del boton create
		//Aquí solo se usa el parametro request
		case 'create':{
			//var db = Ti.DataBase.install('ui/DataBase','dataBaseName');
			//var db = Ti.DataBase.install('/mydatabase/DataBase','dataBaseName');
			//Abre la base de datos
			var db = Ti.Database.open('miBaseDeDatos');
			//Creamos la tabla con 2 campos (id y name)
			db.execute('CREATE TABLE IF NOT EXISTS data ( id INTEGER PRIMARY KEY,name TEXT);');
			//Cerramos nuestra base de datos
			db.close();
			//Mensaje para mostra si se creó la tabla
			alert("Tabla creada");
		}
		break;
		//En caso de que sea el click del boton insert
		case 'insert':{
			var db = Ti.Database.open('miBaseDeDatos');
			//Utilizamos el parametro name
			db.execute('INSERT INTO data(name) VALUES ("'+name+'")');
			db.close();
			alert("Dato Insertado");
		}
		break;
		//En caso de que sea el click del boton delete
		case 'delete':{
			var db = Ti.Database.open('miBaseDeDatos');
			//Esta es otra forma de concatenar =?
			db.execute('DELETE FROM data WHERE name= ?', name);
			db.close();
			alert("Elemento Eliminado");
		}
		break;
		//En caso de que se quiera hacer una consulta
		case 'querying':{
			var db = Ti.Database.open('miBaseDeDatos');
			//Guardamos el query
			var allData = db.execute('SELECT * FROM data');
			//Guardamos los datos en un Array (Strings)
			var data =[];
			//Mientras allData tenga Rows validos
			while(allData.isValidRow()){
				//Obtiene el campo que tiene name
				//y lo mete en el arreglo data
				data.push(allData.fieldByName('name'));
				//Pasa al Row siguiente
				allData.next();
			}
			db.close();
			//Regresamos data para utilizarla en la interfaz
			return data;
		}
		break;
	}
}
module.exports = DataBase;
