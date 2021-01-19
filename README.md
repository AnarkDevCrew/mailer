# mailer

#### paste this on your package.json

```json
  "dependencies": {
    "nodemailer": "^6.4.17"
  }
```

#### then import mailer.js and use it as below:

```javascript
const Mailer = require('./mailer')

const transportOptions = {
  service: 'Hotmail',
  user: '<your@email>',
  pass: '<Y0urP4ssW0rD>'
}
const mailOptions = {
  from: '"<Name of the sender>" <your@email>',
  to: '<receiver@email>',
  subject: '<subject>',
  text: 'Plain text of email',
  html: '<h1>Html of email</h1>'
}

Mailer.sendMail(transportOptions, mailOptions)
```
