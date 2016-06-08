from gluon.serializers import loads_json
	
def index():
	mapas = db().select(db.mapa.ALL)
	return dict(mapa=mapas)

def getMarkers():
	mapas = []
	datos = []
	rows = db(db.mapa.id>0).select()
	for row in rows:
		mapa = {
			'lat': row.lat,
			'lng': row.lng,
			'title': row.nombre,
			'infowindow': { 'content': "<h1>" + row.nombre +"</h1>"+ row.tel +"</p><p>Direccion: "+row.direccion+"</p><p>"+row.descripcion+"</p>" },
		}
		dato = row.nombre
		mapas.append(mapa)
		datos.append(dato)
	return response.json(mapas)

def getRestaurantes():
	mapas = []
	rows = db(db.mapa.tipo=='Restaurante').select()
	for row in rows:
		mapa = {
			'lat': row.lat,
			'lng': row.lng,
			'title': row.nombre,
			'infowindow': { 'content': "<h1>" + row.nombre +"</h1>"+ row.tel +"</p><p>Direccion: "+row.direccion+"</p><p>"+row.descripcion+"</p>" },
		}
		mapas.append(mapa)
	return response.json(mapas)

def getKioscos():
	mapas = []
	rows = db(db.mapa.tipo=='Kiosco').select()
	for row in rows:
		mapa = {
			'lat': row.lat,
			'lng': row.lng,
			'title': row.nombre,
			'infowindow': { 'content': "<h1>" + row.nombre +"</h1>"+ row.tel +"</p><p>Direccion: "+row.direccion+"</p><p>"+row.descripcion+"</p>" },
		}
		mapas.append(mapa)
	return response.json(mapas)

def getBares():
	mapas = []
	rows = db(db.mapa.tipo=='Bar').select()
	for row in rows:
		mapa = {
			'lat': row.lat,
			'lng': row.lng,
			'title': row.nombre,
			'infowindow': { 'content': "<h1>" + row.nombre +"</h1>"+ row.tel +"</p><p>Direccion: "+row.direccion+"</p><p>"+row.descripcion+"</p>" },
		}
		mapas.append(mapa)
	return response.json(mapas)