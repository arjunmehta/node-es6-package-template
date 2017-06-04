import { expect } from '../util';
import { moduleA } from '../../src';


describe('Basic Test', () => {
  it('should execute expect', () => {
    expect(moduleA).to.equal('module A');
  });
});
