function link2mail(body){
alert(body);
document.write('<form style="background:orange;" method="POST" action="http://ks.tosti.info/canvas/postoffice/sendmail.php"><input type="hidden" name="message" value="' + body + '" /><input type="hidden" name="subject" value="test canvas" /><input type="submit" value="send billede" /></form>');

}