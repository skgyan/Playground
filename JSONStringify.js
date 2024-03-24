const obj = {
    name: "Sushil",
    age: 40,
    location: "Mount Pleasant, SC",
    sal: 200000,
    car: "Jeep",
  };
  
  
  function jsonStringify(param) {
      if(typeof param === 'string') {
          return `"${param}"`;
      } else if (typeof param === 'number') {
          return param.toString();
      } else if (param === null) {
          return 'null';
      } else if (param === undefined) {
          return undefined;
      }
  
      if(Array.isArray(param)) {
          return `[${param.map(jsonStringify).join(',')}]`;
      }
  
      if(typeof param === 'object') {
          console.log('object -----------------');
  
          const props = [];
  
          for (const key in param) {
              if (Object.hasOwnProperty.call(param, key)) {
                  const element = param[key];
                  
                  if(element !== undefined) {
                      props.push(`"${key}":"${element}"`);
                  }
              }
          }
  
          return `{${props.join(',')}}`;
      }
  }
  
  // console.log("-------------------------- Array -------------------------------");
  // console.log("JSON.stringify = ", JSON.stringify([10, "abc", undefined, null]));
  // console.log("jsonStringify ", jsonStringify([10, "abc", undefined, null]));
  
  console.log(
    "-------------------------- Object -------------------------------"
  );
  
  console.log("JSON.stringify = ", JSON.stringify(obj));
  console.log("jsonStringify ", jsonStringify(obj));
  