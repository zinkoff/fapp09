#!/usr/bin/expect
spawn rsync -rltp --stats  --delete-after  -v --exclude=files  --exclude=.git --exclude=.DS_Store --exclude=img /Users/tosti/Sites/ks/site/fapp09/build/ tosti@77.243.130.109:/var/www/docs/fapp09.tosti.info/ 
expect "password:"
send "256jhbs45y\n"
expect eof
if [catch wait] {
    puts "rsync failed"
    exit 1
}
exit 0
say "Så er overførslen i orden"