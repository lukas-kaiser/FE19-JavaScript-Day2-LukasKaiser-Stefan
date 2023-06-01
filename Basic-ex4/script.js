function ageCalculator(birthYear){
    const older = new Date().getFullYear() - birthYear;
    const younger = new Date().getFullYear() - birthYear - 1;
    console.log(`You are either ${older} or ${younger} years old.`);
}
ageCalculator(1991);