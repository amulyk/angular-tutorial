import { MenuComponent } from './menu.component';

describe('Testing Menu Component', () => {
  const component = new MenuComponent();

  it('Default value for property isOpen should be true', () => {
    const receivedValue = component.isOpen;

    expect(receivedValue).toBe(true);
  });

  it('Method showMenu should change property isOpen into true', () => {
    component.showMenu();
    const receivedValue = component.isOpen;

    expect(receivedValue).toBe(true);
  });

  it('Method hideMenu should change property isOpen into false', () => {
    component.hideMenu();
    const receivedValue = component.isOpen;

    expect(receivedValue).toBe(false);
  });
});
