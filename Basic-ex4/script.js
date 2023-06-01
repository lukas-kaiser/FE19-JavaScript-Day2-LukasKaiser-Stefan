function ageCalculator(birthYear, currentYear){
    const older = currentYear - birthYear;
    const younger = currentYear - birthYear - 1;
    console.log(`You are either ${older} or ${younger} years old.`);
}
ageCalculator(1988, 2023);