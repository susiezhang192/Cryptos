1. Deployment on Windows VM
 
 (1) Install MongoDb
     
	 a. Download installer at https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
	 	 
	 b. Run the MongoDB installer
	 msiexec.exe /l*v mdbinstall.log  /qb /i mongodb-windows-x86_64-4.4.1-signed.msi
	 
	 c. Start mongoDb 
	 open a Command prompt with Administrative privileges and run:
	 "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"

(2) Install MongoDb Tools
     
	 a. Download installer at https://www.mongodb.com/try/download/database-tools

	 b. Run MongoDb Tools installer

(3) Import the excel file using MongDb tools

    	a. mongoimport --type csv -d Cryptos -c cryptos --headerline --drop crypto_historical.csv
	 
(4) Install Node.js

    a. Download nodejs at https://nodejs.org/en/download/
	
	b. Run nodejs installer
	
(5) Get the code from github
    git clone https://github.com/susiezhang192/Cryptos

(6) Open a Command prompt with Administrative privileges, got to the Cryptos folder.
    cd \path\to\Cryptos
	
(7) From the Cryptos directory, run npm install to install the dependent packages.
    npm install
	
(8) From the Cryptos directory, install Cryptos service app as windows service
    npm install -g qckwinsvc

(9) Open port 80 on VM	

(10) From a separate browser tab, navigate to your VM's public IP address.
    You should see the forms for add new Cryptos, as in the attached screenshot.
