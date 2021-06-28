<b> Linux / Debian Installation </b>

Navigate to the opt directory : cd /opt

Install git if it is not present : sudo apt-get install git

Install nodejs if it is not present : sudo apt-get install nodejs

Clone the repository : git clone https://github.com/mHealthKenya/UshauriILDashboard

cd into the newly created "UshauriILDashboard" folder

Run "npm install"

open the .env file, update the username and password according to your mysql credentials, then save

run "sudo pm2 start npm -- start"

run "sudo pm2 startup systemd"

run "sudo pm2 save"


<b> Windows Installation </b>

Download the following codebase : https://github.com/mHealthKenya/UshauriILDashboard

Copy and Paste the UshauriDashboard folder in Program Files in the Local Disk C Drive. 

cd into the newly created "UshauriILDashboard" folder

Open the command line and run : npm install

open the .env file, update the username and password according to your mysql credentials, then save

run "pm2 start npm -- start"

run "pm2 startup"

run "pm2 save"
