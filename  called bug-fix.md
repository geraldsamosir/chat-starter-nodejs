bugs:
1. new message is not appear immediately 
caused by : 
- when listening to socket-io "new-message", data.sender is always return null, so it will never meet the condition sender != null
solving : 
- in Input.js -> handlingSubmit function, switch if else case in when theres conversation id it will return user
code before : 
 sender: conversationId ? null : user,
code after : 
 sender: conversationId ? user : null,

2. messages are shown in the wrong order when the page loads
caused by : 
- when getting conversation from GET /conversations it sorted by desc 
solving : 
- change the sorting method to asc
code before : 
- order: [[Message, "createdAt", "DESC"]],
code after: 
- order: [[Message, "createdAt", "ASC"]],

3. forgot to await saveMessage in home js
  code before:
     const data = saveMessage(body);
  code after:
     const data = await saveMessage(body);