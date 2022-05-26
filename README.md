[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/palladiumkenya/ushauriILDashboard">
    <img src="public/images/ushauri.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">UshauriIlDashboard</h3>

  <p align="center">
    <!-- need for more description -->
    <br />
    <a href="https://kenyahmis.org/documentation/summary-interoperability/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://github.com/palladiumkenya/ushauriILDashboard">View Demo</a> -->
    ·
    <a href="https://github.com/palladiumkenya/ushauriILDashboard/issues">Report Bug</a>
    ·
    <a href="https://github.com/palladiumkenya/ushauriILDashboard/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[[Product Name Screen Shot][product-screenshot]](public/images/ushauri.jpg)
check the documentation here 
<h3> <a href="https://kenyahmis.org/documentation/summary-interoperability/"><strong>Explore the docs »</strong></a></h3>

### Built With

Technologies used to develop this project are
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
* [Npm](https://npm.com)
* [Javascript](https://javascript.com)
* [Docker](https://docker.com)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running. Follow these simple example steps.

### Prerequisites

Here is a list of things you need to use the software and how to install them.
* pm2
  ```sh
  npm install pm2 -g
  ```
* npm
  ```sh
  npm install npm@latest -g
  ```
* git [click to download depending on your o.s](https://git-scm.com/downloads) 
  

### Installation
#### Linux/Debian Enviroment
<!-- linux Enviroment -->
1. Clone the repo
   ```sh
   git clone https://github.com/palladiumkenya/ushauriILDashboard
   ```
2. Navigate to the project root directory
   ```sh
   cd UshauriILDashboard
   ```
3. Install NPM packages
   ```npm
   npm install
   ```
4. Add your database logins on file named .env 
   ```js
    HOST='<host ip address>'
    USERNAME='<Database username>'
    PASSWORD='<Database Password>'
    PORT=3306
    DATABASE='ushauri_il'
    ```
5. Run PM2
   ```sh
   sudo pm2 start npm -- start
   ```
6. Enable PM2 to Auto Start Node.js App at System Boot
   ```sh
   sudo pm2 startup systemd
   ```
7. freeze a process list for automatic respawn
    ```sh
    sudo pm2 save
    ```
#### Windows Environment
<!-- windows Environment -->
1. Download the following codebase : [code](https://github.com/palladiumkenya/ushauriILDashboard)
1. Copy and Paste the UshauriDashboard folder in Program Files in the Local Disk C Drive.
   
2. Navigate to project to folder pasted
   ```sh
   cd UshauriILDashboard
   ```
3. Install NPM packages
   ```npm
   npm install
   ```
4. Add your database logins on file named .env 
   ```js
    HOST='<host ip address>'
    USERNAME='<Database username>'
    PASSWORD='<Database Password>'
    PORT=3306
    DATABASE='ushauri_il'
    ```
5. Run PM2
   ```sh
   pm2 start npm -- start
   ```
6. Enable PM2 to Auto Start Node.js App at System Boot
   ```sh
   pm2 startup
   ```
7. freeze a process list for automatic respawn
    ```sh
    pm2 save
    ```
#### Docker Enviroment
<!-- Docker Enviroment -->
1. Clone the repo
   ```sh
   git clone https://github.com/palladiumkenya/ushauriILDashboard
   ```
2. Add your database logins on file named .env 
   ```js
    HOST='<host ip address>'
    USERNAME='<Database username>'
    PASSWORD='<Database Password>'
    PORT=3306
    DATABASE='ushauri_il'
    ```
3. Grant privileges to allow docker read and write database
    ```sql
    GRANT ALL PRIVILEGES ON *.* TO 'root'@'172.17.0.2' IDENTIFIED BY '<password>';
    ```
4. Build docker image
    ```sh
    docker build -t ushauriilashboard .
    ```
5. Run Docker image
    ```sh
    docker run -d -p 3001:3001 ushauriilashboard:latest 
    ```
6. view instance 
    ```html
    http://localhost:3001
    ```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/palladiumkenya/ushauriILDashboard/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/palladiumkenya/ushauriILDashboard/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/palladiumkenya/ushauriILDashboard/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/palladiumkenya/ushauriILDashboard/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/palladiumkenya/ushauriILDashboard/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/palladiumkenya/ushauriILDashboard/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: public/images/ushauri.jpg

