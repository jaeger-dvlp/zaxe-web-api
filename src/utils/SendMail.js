const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');
const SMTP = require('@/app/configs/config.nodemailer');
const { MailSchemas } = require('@/app/schemas');

const ReadHTMLfile = async (templateName) => {
  try {
    const MailSchema = MailSchemas[templateName] || null;
    const templatePath = path.join(
      __dirname,
      `../mailing/templates/${MailSchema.path}`
    );

    return fs.readFileSync(templatePath, { encoding: 'utf-8' }, (err, html) => {
      if (err) {
        console.log(err);
        return null;
      }
      return html;
    });
  } catch (error) {
    throw new Error(error);
  }
};

const ReplaceTemplate = async (templateName, data) => {
  try {
    const MailSchema = MailSchemas[templateName] || null;
    const HTMLfile = await ReadHTMLfile(templateName);

    if (HTMLfile) {
      const Template = handlebars.compile(HTMLfile);
      const Replacement = MailSchema.replacement(data);
      return Template(Replacement);
    }
    return new Error('An error occurred while reading the mail template file.');
  } catch (error) {
    throw new Error(error);
  }
};

const SendMail = async (templateName, data) => {
  try {
    const MailSchema = MailSchemas[templateName] || null;
    const { to, from, subject } = MailSchema;
    const HTML = await ReplaceTemplate(templateName, data);

    const mailOptions = {
      from: from(data),
      to: to(data),
      subject: subject(data),
      html: HTML,
    };

    return SMTP.sendMail(mailOptions)
      .then(() => 'sent')
      .catch((err) => {
        throw new Error(err);
      });
  } catch (error) {
    console.log(error);
    throw new Error('An error occurred while sending the mail.');
  }
};

module.exports = { SendMail };
