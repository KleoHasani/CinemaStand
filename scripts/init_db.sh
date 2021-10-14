#!/bin/sh

set -e

echo "|-----------------------------|"
echo "|  Welcome to CINEMA STAND    |"
echo "|     Generating Database     |"
echo $'|-----------------------------|\n'

  if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    read -p 'User: ' db_user
    read -p 'Host: ' db_host
    read -p 'Port: ' db_port
    read -sp "Password: " db_pass

    echo $'\nCreating Database\n'

    psql postgresql://$db_user:$db_pass@$db_host:$db_port/postgres -f ./sql/createDb.sql
    
    echo $'\nCreating Tables\n'

    psql postgresql://$db_user:$db_pass@$db_host:$db_port/cinemastand_prod -f ./sql/createTbls.sql

    psql postgresql://$db_user:$db_pass@$db_host:$db_port/cinemastand_dev -f ./sql/createTbls.sql

    psql postgresql://$db_user:$db_pass@$db_host:$db_port/cinemastand_test -f ./sql/createTbls.sql

    echo $'\n|-------------|'
    echo "|  All done   |"
    echo "|-------------|"

  else
    echo "Unsupported OS"
  fi

exit