import { Injectable } from '@nestjs/common';
import { dirname, join } from 'path';
import { renderFile } from 'pug';
import { senderEmail, SENDGRID_API_KEY, url } from '../../config';

// eslint-disable-next-line
const sgMail = require('@sendgrid/mail');

const templatesPath = join(dirname(__dirname), 'templates');
const templateFileExt = '.template.pug';

@Injectable()
export class MailService {
  confirmation(to: string, confirmationHash: string) {
    const from = senderEmail;
    const confirmLink = `${url}/auth/confirm/${confirmationHash}`;
    const pugTemplatePath = join(
      templatesPath,
      `account-confirm${templateFileExt}`,
    );

    const html = renderFile(pugTemplatePath, { confirmLink });
    const mail = {
      to,
      from,
      Subject: 'Confirm Your Account',
      text: 'Account confirm',
      html,
    };

    sgMail.setApiKey(SENDGRID_API_KEY);
    return sgMail.send(mail);
  }
}
