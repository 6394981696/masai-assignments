function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  const original = {
    name: "Alice",
    hobbies: ["reading", "traveling"]
  };
  
  const cloned = deepClone(original);
  
  cloned.hobbies.push("cooking");
  
  console.log("Original:", original);
  console.log("Clone:", cloned);
  