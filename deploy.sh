sudo apt update && sudo apt install nodejs npm
sudo npm install -q pm2
pm2 stop example_app
cd DevOpsSecCA/
npm install
echo $PRIVATE_KEY > privatekey.pem
echo $SERVER > server.crt 
pm2 start ./bin/www --name example_app
