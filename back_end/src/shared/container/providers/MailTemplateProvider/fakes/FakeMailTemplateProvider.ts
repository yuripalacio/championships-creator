import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTramplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return '';
  }
}

export default FakeMailTramplateProvider;
