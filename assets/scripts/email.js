exports.firestoreEmail = functions.firestore.document('messages/{messagesId}')
  .onCreate((snap, context) => {

    const messagesId = snap.id; // get the id
    const db = admin.firestore();

    return db.collection('messages').doc(messagesId)
        .get()
        .then(doc => {
           const request = doc.data();
           const msg = {
             to: 'jpqueirozperez@gmail.com',
             from: request.email,

             subject: request.subject,
             templateId: 'd-3cd6b40ad6674f33702107d2',
             substitutionWrappers: ['{{', '}}'],
             substitutions: {
                 name: request.name,
                 email: request.email,
                 subject: request.subject,
                 message: request.message
                 // and other custom properties here
             }
         };

         return sgMail.send(msg)
     })
     .then(() => console.log('email sent!') )
     .catch(err => console.log(err) )
  });