# load_music_vk


# workflow

1. add unzipped extension to chrome from folder where you save this project
2. move to http://download-music-vkontakte.org/ and wait 10sec. plugin will ask you every 10sec to start parsing page
3. when you load music and save to file(default name is 'songs.json'. left this name as it is)
4. put file 'songs.json' nere the file 'load_file.py'
5. open the terminal in this folder and run 'python load_file.py'. if you see error like 'python is not defined' - setup python and add path to it to your system environment

# additional

in the folder with 'load_file.py' file you can create a file 'setup.json' where you can store the place where you want to save your songs. variable shoul be called like 'save_path'.

example: 
  `{
    "save_path": "E:\\"
  }`
  
# enjoy :D
