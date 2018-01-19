# Opentender Portal

* Linux/Mac

## Deployment Structure

Opentender Portal provides an aggregated view on a large database of Public Tenders in separate country portals and one universal portal. 

One installation can serve one, several or all country portals depending on the configuration.

It is divided in 3 Parts:

* Backend - Server app that answers on data api calls, aggregate data

* Frontend - Server app that renders static HTML and delivers a dynamic Web App.

* Data-Folder - A folder structure where write access is needed on runtime

Some database aggregation request can be resource consuming, so several instances with one databases can be installed for load balancing on local or remote machines.

Possible Deployment:

```
+----+                                        
| DB +----+                                 +--+ User
+----+    |   +---------+                   |  
          +---+ Backend +--+                |  
+----+    |   +---------+  |                +--+ User
| DB +----+                |  +----------+  |  
+----+                     +--+ Frontend +--+  
                           |  +----------+  +--+ User
                           |                |  
+----+        +---------+  |                |  
| DB +--------+ Backend +--+                +--+ User 
+----+        +---------+                   
```

Minimal Deployment on one machine

```
                                     +--+ User
+----+   +---------+   +----------+  |
| DB +---+ Backend +---+ Frontend +--+--+ User 
+----+   +---------+   +----------+  |
                                     +--+ User
```


# Tools

* Scraper - The data in the Digiwhist Project is provided by a REST API. For now it is non public and restricted on project partners. This script downloads the data to be imported by the Backend to the Database.
* Playbook - An ansible install script for server deployment


# Installation

This repository helps installing and managing a minimal deployment installation with the frontend available on http://localhost:3000

```
opentender
├── backend
├── data
├── frontend
└── scraper
```

- install [NodeJS](https://nodejs.org/) 6.x and [NPM](https://www.npmjs.com/)

- install [Elasticsearch](https://www.elastic.co/) 2.4.6

- install system global [pm2 Process Manager](http://pm2.keymetrics.io/)

- run script `./setup.sh` in the `setup`-folder 

  this installs all opentender parts and copies the default configuration
  
  please note: you need configure the tenderapi scraper with your digiwhist partner info, since it is currently non-public 

# Starting

run script `./start.sh`

if you want to start not as a daemon and with log in the console `./start-no-daemon.sh`

# Stopping

run script `./stop.sh`
  
# Updating

run script `./update.sh`
