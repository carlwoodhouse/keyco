class SignupCharacter {
  constructor(character) {
    this.name = character[0];
    this.class = character[1];

    let role = character[2];
    let validRoles = ["TANK", "HEALER", "DPS"];
    
    if (!validRoles.includes(role)) {
      role = "DPS";
    } 

    this.role = role;
    this.trial = character[10] !== undefined && character[10].indexOf("Trial") != -1;
    this.limited = character[10] !== undefined && character[10].indexOf("Limited") != -1;
  }
}

export default SignupCharacter;