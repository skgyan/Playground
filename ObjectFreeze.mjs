function freeze() {
  const obj = Object.freeze({
    name: "John",
  });

  console.log(obj);

  // obj.name = "Bob"; // Cannot assign to read only property 'name' of object '#<Object>'

  console.log(obj);
}

function anotherFreeze() {
  const address = Object.freeze({
    city: "Mount Pleasant",
  });
  const person = {name: "John", address: {...address}};

  Object.freeze(person);

  const personProxy = new Proxy(person, {
    set(...args) {Reflect.set(...args)},
  });

  personProxy.name = "Bob";
  personProxy.address.city = "Charleston";

}

export {freeze, anotherFreeze};