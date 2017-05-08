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

* Scraper - The data in the Digiwhist Project is provided by a REST API. For now it is non public and restricted on project partners. This script downloads the data for by imported by the Backend to the Database.
* Playbook - An ansible install script for server deployment


# Installation

This repository installs and manages a minimal deployment installation with the frontend available on http://localhost:3000

```
opentender
├── backend
├── data  // only folder with read-write access after build
├── frontend
└── scraper
```
