import json

data = json.load(open("police_precincts.geojson","rb"))

zero  = data['features'][0]

zero['style'] = {"fill":"red"}

data['features'][0] = zero

json.dump(data, open('myjson.geojson','wb'))
