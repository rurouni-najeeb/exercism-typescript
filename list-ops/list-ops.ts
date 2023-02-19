class Node {
  _value : unknown;
  _next : Node | null;

  constructor(value : unknown) {  
    this._value = value;
    this._next = null
  }

  // Setter functions
  public set next(node : Node | null){
    this._next = node;
  }

  // Getter functions
  public get value() : unknown{
    return this._value
  }

  public get next() : Node | null {
    return this._next
  }
}

export class List {
  _head : Node | null;
  _tail : Node | null;

  constructor(values : unknown[]) {
    let prev : Node | null = null;
    this._head = null;
    this._tail = null;

    values.forEach(element => {
      this.push(element);  
    });
  }

  private push(value : unknown){
    let node = new Node(value);
    if(this._head !== null){
      this._head = node;
      this._tail = node;
      return;
    }

    this._tail!.next = node;
    this._tail = node;
  }

  public forEach(callback : (item : unknown) => void){
    let ptr = this._head;
    while(ptr !== null){
      callback(ptr.value);
      ptr = ptr.next;
    }

  };

  public append(other : List){
    let ptr = other.head;

    while(ptr !== null){
      let node = new Node(ptr.value);
      if(this._head === null)
        this._head = this._tail = node;
      else
        this._tail!.next = node;
      ptr = ptr.next;
    }
  }

  public get head() : Node | null{
    return this._head;
  }
  public static create(...values: unknown[]): List {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.

    // You may use the destructuring and spreading (...) syntax from Iterable.
    return new List(values)
  }
}
