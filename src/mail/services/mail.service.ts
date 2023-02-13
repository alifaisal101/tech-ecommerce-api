import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { senderEmail, url } from '../../config';

@Injectable()
export class MailService {
  constructor(private readonly mailerSrv: MailerService) {}

  confirmation(to: string, confirmationHash: string) {
    const from = senderEmail;

    return this.mailerSrv.sendMail({
      to,
      from,
      subject: 'Confirming Your Account',
      template: './account-confirm',
      context: {
        confirmLink: `${url}/auth/confirm/${confirmationHash}`,
      },
    });
  }
}
