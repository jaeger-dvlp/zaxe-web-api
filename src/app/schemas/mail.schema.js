// ! ToDo : Get "to" & "from" from .env variables

const HandleCareerResume = ({ name, type, url }) => {
  switch (type) {
    case 'base64':
      return `${name} (Attached)`;
    case 'drive':
      return url;
    default:
      return 'An error occurred while processing resume.';
  }
};

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
  'main.requestsample.user': {
    path: 'main/request-sample.mail.html',
    subject: () => 'About Your Request Sample Request',
    replacement: ({ fullName }) => ({ fullName }),
    from: () => 'Zaxe 3D | Request Sample Request <noreply@zaxe.com',
    to: ({ emailAddress }) => emailAddress,
  },
  'main.requestsample.admin': {
    path: 'main/admin.request-sample.mail.html',
    subject: ({ fullName }) => `New Request Sample Request By ${fullName}`,
    replacement: ({
      fullName,
      fullAddress,
      emailAddress,
      phoneNumber,
      companyName,
      layerHeight,
      fillDensity,
      city,
      country,
      message,
    }) => ({
      fullName,
      fullAddress,
      emailAddress,
      phoneNumber,
      companyName,
      layerHeight,
      fillDensity,
      city,
      country,
      message,
    }),
    attachment: ({ file }) => file,
    from: () => `Zaxe 3D | New Request Sample Request <noreply@zaxe.com>`,
    to: () => ['webdev@zaxe.com'],
  },
  'knowledgebase.fb.positive': {
    path: 'knowledge-base/admin.kb-positive-fb.mail.html',
    subject: () => 'New Feedback',
    replacement: ({ title, language, url }) => ({ title, language, url }),
    from: () =>
      'Zaxe Knowledge Base | New Positive Feedback <noreply@zaxe.com>',
    to: () => ['webdev@zaxe.com'],
  },
  'knowledgebase.fb.user': {
    path: 'knowledge-base/kb-feedback.mail.html',
    subject: () => 'About Your Feedback',
    replacement: ({ fullName }) => ({ fullName }),
    from: () => 'Zaxe Knowledge Base | Feedback <noreply@zaxe.com>',
    to: ({ emailAddress }) => emailAddress,
  },
  'knowledgebase.fb.admin': {
    path: 'knowledge-base/admin.kb-feedback.mail.html',
    subject: ({ fullName }) => `New Feedback By ${fullName}`,
    replacement: ({
      fullName,
      emailAddress,
      message,
      article: { title, url, language },
    }) => ({
      fullName,
      emailAddress,
      message,
      title,
      url,
      language,
    }),
    from: () => 'Zaxe Knowledge Base | New Feedback <noreply@zaxe.com>',
    to: () => ['webdev@zaxe.com'],
  },
  'careers.apply.user': {
    path: 'careers/careers-apply.mail.html',
    subject: () => 'About Your Application',
    replacement: ({ person: { fullName }, role: { title } }) => ({
      pFullName: fullName,
      rTitle: title,
    }),
    from: () => 'Zaxe Careers | Application <noreply@zaxe.com>',
    to: ({ person: { emailAddress } }) => emailAddress,
  },
  'careers.apply.admin': {
    path: 'careers/admin.careers-apply.mail.html',
    subject: ({ person: { fullName } }) => `New Application By ${fullName}`,
    replacement: ({
      person: {
        fullName,
        phoneNumber,
        emailAddress,
        fullAddress,
        githubURL,
        behanceURL,
        portfolioURL,
        linkedinURL,
        resume: { type, name, url },
        coverLetter,
        legallyEligible,
        eligibilityBasedOnWorkVisa,
      },
      role: { id, title, team, location, type: roleType },
    }) => ({
      pFullName: fullName,
      pPhoneNumber: phoneNumber,
      pEmailAddress: emailAddress,
      pFullAddress: fullAddress,
      pGithubURL: githubURL,
      pBehanceURL: behanceURL,
      pPortfolioURL: portfolioURL,
      pLinkedinURL: linkedinURL,
      pResumeName: HandleCareerResume({ name, type, url }),
      pCoverLetter: coverLetter,
      pLegallyEligible: legallyEligible,
      pEligibilityBasedOnWorkVisa: eligibilityBasedOnWorkVisa,
      rID: id,
      rTitle: title,
      rTeam: team,
      rLocation: location,
      rType: roleType,
    }),
    from: () => 'Zaxe Careers | New Application <noreply@zaxe.com>',
    to: () => ['webdev@zaxe.com'],
    attachment: async ({ person: { resume } }) => resume,
  },
};

module.exports = { MailSchemas };
