#!/bin/bash
npm run build && pm2 start ecosystem.config.js --only love394-prod