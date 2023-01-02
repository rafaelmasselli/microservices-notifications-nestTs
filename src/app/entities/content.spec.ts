import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Voce recebeu uma solicitação ded amizade');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('aaa'.repeat(241))).toThrow();
  });
});
