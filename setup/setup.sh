FILE=config_backend.js
if [ -f $FILE ]; then
    cd ..
    git clone https://github.com/digiwhist/opentender-data.git data
    git clone https://github.com/digiwhist/opentender-backend.git backend
    git clone https://github.com/digiwhist/opentender-frontend.git frontend
    git clone https://github.com/digiwhist/tenderapi-scraper scraper
    cp setup/config_backend.js backend/config.js
    cp setup/config_frontend.js frontend/config.js
    cd backend
    npm install
    cd ..
    cd frontend
    npm install
    cd ..
    cd scraper
    npm install
    cd ..
    cd setup
else
   echo "You must run this file in the /setup/ folder"
fi

