import { expect } from 'chai';
import * as data from './resources.json';
import { PagedResults, SortDirection } from '../../src';

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
  it('should return the data sorted by ChapterName ascending', () => {
    pagedResults.sort(['ChapterName'], [SortDirection.Asc]);
    for (let i = 0; i < pagedResults.items.length - 1; i++) {
      expect(pagedResults.items[i].ChapterName < pagedResults.items[i + 1].ChapterName).to.be.true;
    }
  });
  it('should return the data sorted by ChapterName descending', () => {
    pagedResults.sort(['ChapterName'], [SortDirection.Desc]);
    for (let i = 0; i < pagedResults.items.length - 1; i++) {
      expect(pagedResults.items[i].ChapterName > pagedResults.items[i + 1].ChapterName).to.be.true;
    }
  });
});
