function sendMail()
{
   var mailBody=document.getElementById('canvas').innerHTML;
   window.location="mailto:tosti@mac.com?subject=hii&body="+mailBody;
}