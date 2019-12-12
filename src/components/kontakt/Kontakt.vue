<template>
  <div class="kontakt">
      <div class="grid">
        <form>
          <input type="text" id="item1" class="input1" name="firstname" placeholder="First name">
          <input type="text" id="item2" class="input1" name="lastname" placeholder="Last name">
          <input type="text" id="item3" class="input1" placeholder="Email">
          <input type="text" id="item4" class="input2" placeholder="Meddelande">
          <div class="btn" type="submit" @click="post">Skicka</div>
        </form>
      </div>
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