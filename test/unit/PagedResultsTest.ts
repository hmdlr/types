import { expect } from 'chai';
import * as data from './resources.json';
import { PagedResults } from '../../src';

describe('#PagedResults Test', () => {
  const pagedResults = PagedResults.fromArray(data.books, 1, 3);
  it('should return the correct page number', () => {
    expect(pagedResults.pageNumber).to.be.eql(1);
  });
  it('should return the correct page size', () => {
    expect(pagedResults.pageSize).to.be.eql(3);
  });
  it('should return the correct page count', () => {
    expect(pagedResults.pageCount).to.be.eql(Math.ceil(data.books.length / 3));
  });
});
