# terminal-server

## Getting Started:
- Clone git repo
- Run `npm i`
- Run `npm start` - This will run the server with `nodemon` so that chagnes are updated in real time
- Direct traffic to port `3000`

## Live server:
If you would rather test out the endpoints on my live server, you can use the the URL `api.devsteve.net`

Currently hosting/serving the data for my terminal style portfolio website

## Endpoints:
### `/card`
- There are three endpoints here that server the data for the site
  - `/` Will give the Home page cards
  - `/projects` Will give the Project cards
  - `/contact` Will give the contact cards
### `/products`
- Eventually will have more products, but right now it serves up the powerade endpoint
  - `/powerade` - This endpoint calls a function that will go and scrape the local smiths and grab the Blue Powerade price at that time.
### `/pico`
- I would like this to be a place where the user can interface with my pi pico
  - `/humidity` - grabs the most recent reading from my raspberry pi pico DHT11 sensor in the crawlspace of my house.
