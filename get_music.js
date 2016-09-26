var id = setInterval(function(){
	if(confirm('load music now?')){
		var number = parseInt(prompt('how many songs load?'));
		if(!number){
			alert('invalid number');
			return;
		}

		var songs = [];
		var links = $('a.download');
		if(links.length < number)
			number = links;

		for(var i = 0; i < number; ++i){
			var link = $(links[i]);
			songs.push({
				name: link.attr('download'),
				url: link.attr('href')
			});
		}
		download('songs.json', JSON.stringify(songs, null, 4));
	
		clearInterval(id);
		alert('reload page to trigger loading again');
	}
}, 10000);


function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}