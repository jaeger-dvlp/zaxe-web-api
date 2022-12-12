// ! ToDo : Get "to" & "from" from .env variables

const MailSchemas = {
  'main.contact.user': {
    path: 'main/contact.mail.html',
    subject: () => 'About Your Contact Request',
    replacement: ({ fullName }) => ({ fullName }),
    from: () => 'Zaxe 3D | Contact Request <noreply@zaxe.com>',
    to: ({ emailAddress }) => emailAddress,
  },
  'main.contact.admin': {
    path: 'main/admin.contact.mail.html',
    subject: ({ fullName }) => `New Contact Request By ${fullName}`,
    replacement: ({
      fullName,
      emailAddress,
      phoneNumber,
      heardUsFrom,
      subject,
      message,
    }) => ({
      fullName,
      emailAddress,
      phoneNumber,
      heardUsFrom,
      subject,
      message,
    }),
    from: () => 'Zaxe 3D | New Contact Request <noreply@zaxe.com>',
    to: () => ['webdev@zaxe.com'],
  },
};

module.exports = { MailSchemas };
