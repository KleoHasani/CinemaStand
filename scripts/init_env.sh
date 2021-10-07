#!/bin/sh

set -e

echo "|-----------------------------|"
echo "|  Welcome to CINEMA STAND    |"
echo "|       Generating ENV        |"
echo $'|-----------------------------|\n'

cwd="${PWD##*/}"

if [ $cwd == "scripts" ]; then
  cd ../
fi

echo "ENV will be generated here: $(pwd)"

read -r -p "Continue? [y/N] " exec_continue

if [[ "$exec_continue" =~ ^([yY])$ ]]; then
  if [[ -d "./env" ]]; then
    rm -r ./env
  fi

  mkdir ./env

  cd ./env

  echo $'\n|----------------|'
  echo "|  Creating ENV  |"
  echo $'|----------------|\n'

  read -p 'DB HOST: ' db_host
  read -p 'DB PORT: ' db_port
  read -p 'Username: ' db_user
  read -sp "Password: " db_pass

  # Create .env files for each dev env.
  echo "DOMAIN=\"localhost\"
PORT=8080
DB_HOST=\"$db_host\"
DB_PORT=$db_port
DB_DATABASE=\"cinemastand_dev\"
DB_NAME=\"$db_user\"
DB_PASSWORD=\"$db_pass\"" >> .env.dev

  echo "DOMAIN=\"localhost\"
PORT=8080
DB_HOST=\"$db_host\"
DB_PORT=$db_port
DB_DATABASE=\"cinemastand_test\"
DB_NAME=\"$db_user\"
DB_PASSWORD=\"$db_pass\"" >> .env.test

else
  echo $'\n|-------------|'
  echo "|  All done   |"
  echo "|-------------|"
fi

exit