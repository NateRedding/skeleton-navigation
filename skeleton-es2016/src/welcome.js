
export class Welcome {
  heading = 'Welcome to the Aurelia Navigation App!';

  activate() {
    this.name = {
      first: null,
      last: null
    };
    this.pristine = {
      first: null,
      last: null
    };
  }

  get isPristine() {
    let strippedName = JSON.parse(JSON.stringify(this.name));
    return this.areEqual(strippedName, this.pristine);
  }

  // borrowed from app-contacts
  areEqual(obj1, obj2) {
    return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]))
  }

  meltdown() {
    this.name = {
      first: null,
      last: null
    };
    // when this.name is set to a new object, any input fields that are bound to a null value are subsequently given the
    // value '' and therefore our pristine copy no longer is equal to our pristine copy.
  }
}
