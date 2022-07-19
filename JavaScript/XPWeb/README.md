<p align="center"><img src="https://i.ibb.co/68HXd9x/XPWeb.png" width="728"></p>
<p align="center"><img src="https://img.shields.io/badge/NodeJs-v18.0.0-<yellowgreen>"></p>
<p align="center"><img src="https://img.shields.io/badge/v1.0.1-<yellow>"></p>
<p align="center">A high performance webserver for hosting TOR hidden services built with NodeJS.</p><br>
<p align="center"><a href="https://heroku.com/deploy?template=https://github.com/RPICave/XPWeb"><img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy"></a></p>


Index :
=======
   * [Requirements](#requirements)
   * [Tested On](#tested-on)
   * [Install](#install)
   * [Docker](#docker)
   * [TOR](#tor)
   * [Licence](#licence)
   * [Features](#features)
   * [Contributing](#contributing)
   * [To Do](#to-do)

<br>

## Requirements 
* [Node.js](https://nodejs.org): 14 or newer

<br>

## Tested on 
 
* Kali Linux
* Ubuntu
* Termux (rooted)
* Rasperry Pi OS

<br> 

## Install 

1. Clone the repo.
```bash
git clone https://github.com/RPICave/Projects.git
```
<br>

2. Start the server.
```bash
npm start
```
<br>

4. Navigate to http://localhost:8000/ to verify that the installation was successful.
<br>

## Docker 
1. Build the image.
```bash
docker build . -t XPWeb
```
<br>

2. Run the image.
```bash
docker run -p 49160:8080 -d XPWeb
```

<br>

3. To enter the container.
```bash
docker exec -it <container id> /bin/bash
```
<br>

## TOR 

1. Add your website's files to the 'Site' directory.

<br>

2. Install TOR.
```bash
sudo apt install tor
```

<br>

3. Edit the tor config file.
```bash
sudo nano /etc/tor/torrc
```

<br>

4. Scroll down to "HiddenServiceDir /var/lib/tor/hidden_service/" and "HiddenServicePort" and uncomment them.

<br>

5. Save config file.
```bash
Ctrl X> y> enter
```

<br>

6. Restart TOR.
```bash
sudo service tor restart
```

<br>

7. Check for config errors in TOR.
```bash
sudo service tor status
```
<br>

8. Get your onion address.
```bash
sudo cat /var/lib/tor/hidden_service/hostname
```

<br>

9. Start XPWeb.

While in the 'XPWeb' directory run
```bash
npm start
```

<br>

10. You should now have your onion site running on your onion address.

<br>


## Licence 
gpl-3.0

<br>

## Features 
* NodeJS based
* Support for most NodeJS modules
* Hosts TOR hidden services
* Added filetypes
* Docker container support

<br>

## Contributing
Feel free to make Pull requests/create [issues](https://github.com/RPICave/XPWeb/issues).

<br>

## To do 
* More error pages
