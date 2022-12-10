import * as data from './resources.json';
import { expect } from 'chai';
import { buildPagedResults, PagedResults } from '../../src';

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
  it('should return the correct count', () => {
    expect(pagedResults.count).to.be.eql(data.books.length);
  });
});

describe('#PagedRequest Test', () => {
  it('should generate a PagedResults from an object', () => {
    const request = {pageNumber: 2, pageSize: 3};
    const pagedResults = buildPagedResults({ query: request });
    expect(pagedResults.pageNumber).to.be.eql(request.pageNumber);
    expect(pagedResults.pageSize).to.be.eql(request.pageSize);
    expect(pagedResults.sortBy).to.be.eql([]);
    expect(pagedResults.sortDir).to.be.eql([]);
  });

  it('should generate a PagedResults from an object with sort', () => {
    type Book = {name: string, author: string};
    const request = {pageNumber: 2, pageSize: 3, sortBy: 'name', sortDir: 'asc'};
    const pagedResults = buildPagedResults<Book>({ query: request });
    expect(pagedResults.pageNumber).to.be.eql(request.pageNumber);
    expect(pagedResults.pageSize).to.be.eql(request.pageSize);
    expect(pagedResults.sortBy).to.be.eql(['name']);
    expect(pagedResults.sortDir).to.be.eql(['asc']);
  });

  it('should generate a PagedResults from an object with multiple sort', () => {
    type Book = {name: string, author: string};
    const request = {pageNumber: 2, pageSize: 3, sortBy: 'name,author', sortDir: 'asc,desc'};
    const pagedResults = buildPagedResults<Book>({ query: request });
    expect(pagedResults.pageNumber).to.be.eql(request.pageNumber);
    expect(pagedResults.pageSize).to.be.eql(request.pageSize);
    expect(pagedResults.sortBy).to.be.eql(['name', 'author']);
    expect(pagedResults.sortDir).to.be.eql(['asc', 'desc']);
  });

  it('should generate a PagedResults from an object with multiple sort and missing sortDir', () => {
    type Book = {name: string, author: string};
    const request = {pageNumber: 2, pageSize: 3, sortBy: 'name,author'};
    const pagedResults = buildPagedResults<Book>({ query: request });
    expect(pagedResults.pageNumber).to.be.eql(request.pageNumber);
    expect(pagedResults.pageSize).to.be.eql(request.pageSize);
    expect(pagedResults.sortBy).to.be.eql(['name', 'author']);
    expect(pagedResults.sortDir).to.be.eql(['asc', 'asc']);
  });

  it('should generate a PagedResults from an object with multiple sort and missing sortBy', () => {
    type Book = {name: string, author: string};
    const request = {pageNumber: 2, pageSize: 3, sortDir: 'asc,desc'};
    const pagedResults = buildPagedResults<Book>({ query: request });
    expect(pagedResults.pageNumber).to.be.eql(request.pageNumber);
    expect(pagedResults.pageSize).to.be.eql(request.pageSize);
    expect(pagedResults.sortBy).to.be.eql([]);
    expect(pagedResults.sortDir).to.be.eql([]);
  });

  it('should generate a PagedResults from nothing', () => {
    const pagedResults = buildPagedResults();
    expect(pagedResults.pageNumber).to.be.eql(1);
    expect(pagedResults.pageSize).to.be.eql(50);
    expect(pagedResults.sortBy).to.be.eql([]);
    expect(pagedResults.sortDir).to.be.eql([]);
  });
});
