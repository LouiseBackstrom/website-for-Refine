<template>
  <div class="kontakt">
        <form
          class="grid"
          action="https://formspree.io/mgevgvdp"
          method="POST"
        >
          <label id="item1">Namn</label>
          <input class="input1" id="item2" type="text" name="name">
          
          <label id="item3">Email</label>
          <input class="input1" id="item4" type="email" name="_replyto">
          
          <label id="item5">Meddelande </label>
          <textarea class="input2" id="item6" name="message"></textarea>
         
          <!-- your other form fields go here -->

          <button id="item7" type="submit">Skicka</button>
      </form>
  </div>
</template>

<script>

/*var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
    user: 'backstromlouise@gmail.com',
    pass: 'lollodaj'
});

var mailOptions = {
  from: '',
  to: 'backstromlouise@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});*/

export default {
  name: 'Kontakt'

  
}


</script>

<style lang="scss">
@import './_kontakt.scss';
</style>