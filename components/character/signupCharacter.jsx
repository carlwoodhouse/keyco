class SignupCharacter {
  constructor(character) {
    this.name = character[0];
    this.class = character[1];
    this.role = character[2];
    this.trial = character[10] !== undefined && character[10].indexOf("Trial") != -1;
    this.limited = character[10] !== undefined && character[10].indexOf("Limited") != -1;
  }
}

export default SignupCharacter;