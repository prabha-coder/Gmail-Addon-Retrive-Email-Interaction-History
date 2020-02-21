function getContextualAddOn(event) {
  
  var message = getCurrentMessage(event).getFrom();
  Logger.log(message);
  var mail = AutoSearch(message);
  var card = CardService.newCardBuilder();
  card.setHeader(CardService.newTextParagraph().setText(mail));

  return [card.build()];
}

function AutoSearch(message)
{
var ListOfMsg = new Array();
var thread = GmailApp.search(message,0,10);
for(var i = 0; i < thread.length; ++i){
var threads = thread[i]; // Get first thread in inbox
var message = threads.getMessages()[0]; // Get first message
  ListOfMsg [i]= "-----Subject:----"+"\n"+ message.getSubject() +"\n"+ "------Messages:-------" +"\n"+ message.getPlainBody()+"\n";
}

return ListOfMsg;

}

function getCurrentMessage(event) {
  var accessToken = event.messageMetadata.accessToken;
  var messageId = event.messageMetadata.messageId;
  GmailApp.setCurrentMessageAccessToken(accessToken);
  return GmailApp.getMessageById(messageId);
}


