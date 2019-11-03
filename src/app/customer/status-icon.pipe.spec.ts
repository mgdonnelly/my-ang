import { StatusIconPipe } from './status-icon.pipe';

fdescribe('StatusIconPipe', () => {

  it('empty string should result in fallback value', () => {
    const pipe = new StatusIconPipe();
    const x = pipe.transform('');
    expect(x).toEqual('users');
  });
  it('null should result in fallback value', () => {
    const pipe = new StatusIconPipe();
    const x = pipe.transform(null);
    expect(x).toEqual('users');
  });
});
