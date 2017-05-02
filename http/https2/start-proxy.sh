#! /bin/bash

ps -ef|grep nginx| awk '{print $2}'|xargs sudo kill -9
sudo nginx -c /Users/sang/workspace/github/book-source/http/https2/conf/nginx-proxy.conf
node app.js
