import { AuthService } from './auth.service';

describe('Auth Service tests', () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  it('Default value for field isAccessAllowed should be false', () => {
    expect(service.isAccessAllowed).toBe(false);
  });

  it('Method isUserAuthenticated should return a field isAccessAllowed', () => {
    const expectedValue = service.isAccessAllowed;
    const receivedValue = service.isUserAuthenticated();

    expect(receivedValue).toBe(expectedValue);
  });

  it('Method allowAccess should change property isAccessAllowed into true', () => {
    service.allowAccess();
    expect(service.isAccessAllowed).toBe(true);
  });

  it('Method blockAccess should change property isAccessAllowed into false', () => {
    service.blockAccess();
    expect(service.isAccessAllowed).toBe(false);
  });
});
