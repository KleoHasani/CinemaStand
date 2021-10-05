#!/bin/sh

set -e

echo "|-----------------------------|"
echo "|  Welcome to CINEMA STAND    |"
echo $'|-----------------------------|\n'

  if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    read -p 'User: ' db_user
    read -p 'Host: ' db_host
    read -p 'Port: ' db_port
    read -sp "Password: " db_pass

    echo $'\nCreating Database\n'

    #psql -d postgres -U $db_user -h $db_host -p $db_port -W -f ./init.sql

    psql postgresql://$db_user:$db_pass@$db_host:$db_port/postgres -f ./createDb.sql
    
    echo $'\nCreating Tables\n'

    psql postgresql://$db_user:$db_pass@$db_host:$db_port/cinemastand_prod -f ./createTbls.sql
    psql postgresql://$db_user:$db_pass@$db_host:$db_port/cinemastand_prod -f ./populateTbls.sql

    psql postgresql://$db_user:$db_pass@$db_host:$db_port/cinemastand_dev -f ./createTbls.sql
    psql postgresql://$db_user:$db_pass@$db_host:$db_port/cinemastand_dev -f ./populateTbls.sql

    psql postgresql://$db_user:$db_pass@$db_host:$db_port/cinemastand_test -f ./createTbls.sql
    psql postgresql://$db_user:$db_pass@$db_host:$db_port/cinemastand_test -f ./populateTbls.sql

    echo $'\n|-------------|'
    echo "|  All done   |"
    echo "|-------------|"

  else
    echo "Unsupported OS"
  fi

exit