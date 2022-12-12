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
  'main.talktosales.user': {
    path: 'main/talk-to-sales.mail.html',
    subject: () => 'About Your Talk to Sales Request',
    replacement: ({ fullName }) => ({ fullName }),
    from: () => 'Zaxe 3D | Talk to Sales Request <noreply@zaxe.com>',
    to: ({ emailAddress }) => emailAddress,
  },
  'main.talktosales.admin': {
    path: 'main/admin.talk-to-sales.mail.html',
    subject: ({ fullName }) => `New Talk to Sales Request By ${fullName}`,
    replacement: ({
      fullName,
      emailAddress,
      phoneNumber,
      heardUsFrom,
      autoLocation,
      manualLocation,
      customerType,
      interestedProducts,
    }) => ({
      fullName,
      emailAddress,
      phoneNumber,
      heardUsFrom,
      autoLocation,
      manualLocation,
      customerType,
      interestedProducts,
    }),
    from: () => 'Zaxe 3D | New Talk to Sales Request <noreply@zaxe.com>',
    to: () => ['webdev@zaxe.com'],
  },
};

module.exports = { MailSchemas };
