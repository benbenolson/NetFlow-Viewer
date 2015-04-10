#!/bin/bash

browserify -t jadeify client/amp.js -o client/amp.bundle.js
node server.js
