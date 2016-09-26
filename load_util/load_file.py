import urllib
import json as json_parse


def loadSongs(json_file):
	save_path = loadSetup()
	if not save_path:
		save_path = './'

	file = open(json_file);
	json = json_parse.load(file);

	for i in range(0, len(json)):
		url = json[i]['url']
		name = json[i]['name']
		try :
			file_to_save = urllib.URLopener()
			file_to_save.retrieve(url, save_path + name)
			print name, 'LOADED'
		except Exception as e:
			print 'EXCEPTION WHILE LOADING ', name
			print e

def loadSetup():
	try:
		file = open('setup.json');
		json = json_parse.load(file);
		return json['save_path']
	except Exception as e:
		print 'FAILED TO LOAD SETUP FILE'
		print e

loadSongs('songs.json')
