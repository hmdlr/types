import { SortDirection } from './enums/SortDirection';

export class PagedResults<T> {
  private _count?: number;

  private _pageCount?: number;

  private _pageNumber: number;

  private _pageSize: number;

  private _sortBy?: Array<keyof T>;

  private _sortDir?: Array<SortDirection>;

  private _items: Array<T>;

  get count(): number | undefined {
    return this._count;
  }

  set count(count: number | undefined) {
    this._count = count;
    this.calculatePageCount();
  }

  get pageCount(): number | undefined {
    return this._pageCount;
  }

  sort(columns?: (keyof T)[], directions?: SortDirection[]): void {
    this._sortBy = columns || [];
    this._sortDir = [
      ...directions || [],
      ...Array(
        Math.max(((columns.length || 0) - (directions.length || 0)), 0)
      ).fill(SortDirection.Asc),
    ];
    // reduce sortDir to have the same length as sortBy
    this._sortDir = this._sortDir.slice(0, this._sortBy.length);
  }

  get sortBy(): Array<keyof T> {
    return this._sortBy;
  }

  get sortDir(): SortDirection[] {
    return this._sortDir;
  }

  static newInstance<T, K>(data: Array<K>, mapper: ((obj: K) => T)): PagedResults<T> {
    const results = new PagedResults<T>();
    results.items = data.map(mapper);
    return results;
  }

  set pageNumber(pageNumber: number) {
    this._pageNumber = pageNumber;
  }

  get pageNumber(): number {
    return this._pageNumber;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(pageSize: number) {
    this._pageSize = pageSize;
  }

  get items(): Array<T> {
    const start = (this.pageNumber - 1) * this.pageSize;
    const end = this.pageSize !== -1 ? start + this.pageSize : this._items?.length || 0;
    return this._items?.slice(start, end) || [];
  }

  set items(items: Array<T>) {
    this._items = items;
  }

  get itemsAll(): Array<T> {
    return this._items || [];
  }

  private calculatePageCount() {
    if (this.count && this.pageSize) {
      this._pageCount = Math.ceil(this.count / this.pageSize);
    }
  }

  static fromArray<A>(
    arr: Array<A>,
    pageNumber?: number,
    pageSize?: number,
    count?: number
  ): PagedResults<A> {
    const results = new PagedResults<A>();
    results.items = arr;
    results.pageNumber = pageNumber || 1;
    results.pageSize = pageSize || 3;
    results.count = count || arr.length;
    return results;
  }

  static fromPagedJson<T>({
    _items,
    _count,
    _pageNumber,
    _pageSize,
  }:
  {
    _items: Array<T>,
    _count?: number,
    _pageCount?: number,
    _pageNumber: number,
    _pageSize: number,
  }) {
    /* eslint-disable no-underscore-dangle */
    return PagedResults.fromArray(
      _items,
      _pageNumber,
      _pageSize,
      _count
    );
    /* eslint-enable no-underscore-dangle */
  }
}
