Header set Access-Control-Allow-Origin "*"
<Limit GET POST PUT DELETE HEAD OPTIONS>
        Order allow,deny
        # You might want something a little more secure here, this is a dev setup
        Allow from all
    </Limit>
    <LimitExcept GET POST PUT DELETE HEAD OPTIONS>
        Order deny,allow
        Deny from all
    </LimitExcept>
    Script PUT /Users/tosti/Sites/www.frugtplukkerne.dk/api
    Script DELETE /Users/tosti/Sites/www.frugtplukkerne.dk/api
