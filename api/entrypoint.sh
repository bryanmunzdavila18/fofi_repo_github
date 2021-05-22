#!/bin/bash

bundle install

# ENVIRONMENT vars export
export SECRET_KEY_BASE=$(rake secret)

rake db:create db:migrate db:seed

rm /fofi/tmp/pids/server.pid

bundle exec rails s -p 3001 -b '0.0.0.0'