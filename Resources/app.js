//Función Recursiva (SelfCallFunction)
(function(e){
	//Creamos un TabGroup
	var tabGroup = Ti.UI.createTabGroup(),
	//Reservamos memoria para las ventanas y utilizarlas despues
	//Se ubican en las carpetas ui
	win1 = require('ui/Win1'),
	win2 = require('ui/Win2'),
	//Creamos 2 Tabs
	//Tab1 -> asociamos a la ventana 1
	tab1 = Ti.UI.createTab({
		title: 'Registros',
		window: new win1()
	});
	//Tab2 -> asociamos a la ventana 2
	tab2 = Ti.UI.createTab({
		title: 'Tabla',
		window: new win2()
	});
	//Agregamos las pestañas al TabGroup (Contenedor General)
	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	//Abrimos nuestro TabGroup
	tabGroup.open();
})();
