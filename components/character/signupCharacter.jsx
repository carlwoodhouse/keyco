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
    this.trial = character[4] !== undefined && character[4].indexOf("Trial") != -1;
    this.limited = character[4] !== undefined && character[4].indexOf("Limited") != -1;
  }
}

export default SignupCharacter;