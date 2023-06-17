function validatePassword(password) {
  const result = {
    valid: true,
    reasons: [],
  };

  if (password.length < 10) {
    result.valid = false;
    result.reasons.push("minimum length");
  }

  if (/^[^A-Za-z]+$/.test(password)) {
    result.valid = false;
    result.reasons.push("no character");
  }

  if (/[0-9]/.test(password)) {
    result.valid = false;
    result.reasons.push("no number");
  }

  if (/^[^!#?]+$/.test(password)) {
    result.valid = false;
    result.reasons.push("no special character");
  }

  if (/(.).*?\1/.test(password)) {
    result.valid = false;
    result.reasons.push("duplicate special character");
  }

  if (/([A-Za-z])\1/.test(password)) {
    result.valid = false;
    result.reasons.push("consecutive character");
  }

  if (/([0-9])\1/.test(password)) {
    result.valid = false;
    result.reasons.push("consecutive number");
  }

  if (/(.)\1/.test(password)) {
    result.valid = false;
    result.reasons.push("duplicate character");
  }

  return result;
}

let result;

result = validatePassword("?a1b2c3d4!");
console.log(result);
/*
{  
    valid: true, 
    reasons: []
}
*/

result = validatePassword("!a1b2c3d4!");
console.log(result);
/*
{  
    valid: true, 
    reasons: ["duplicate special character"]
}
*/

result = validatePassword("?ab18c3d4!");
console.log(result);
/*
{  
    valid: false, 
    reasons: ["consecutive character"]
}
*/

result = validatePassword("?a12c3d4!9");
console.log(result);
/*
{  
    valid: false, 
    reasons: ["consecutive number"]
}
*/

result = validatePassword("?a2b2c3d4!");
console.log(result);
/*
{  
    valid: false, 
    reasons: ["duplicate number"]
}
*/

result = validatePassword("");
console.log(result);
/*
{  
    valid: false, 
    reasons: ["min length", "no number", "no character", "no special character"]
}
*/
