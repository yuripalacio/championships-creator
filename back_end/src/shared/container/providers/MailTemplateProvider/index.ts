import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';

import HendlebarsMailTemplateProvider from './implementations/HendlebarsMailTemplateProvider';

const providers = {
  hendlebars: HendlebarsMailTemplateProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.hendlebars,
);
