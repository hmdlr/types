import { expect } from 'chai';
import { UUID } from '../../src/UUID';

describe('#UUID Test', () => {
  const VALID_UUID = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';
  const INVALID_UUID = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a1';

  it('should validate a valid UUID', () => {
    expect(UUID.isValid(VALID_UUID)).to.be.true;
  });
  it('should not validate an invalid UUID', () => {
    expect(UUID.isValid(INVALID_UUID)).to.be.false;
  });
});
