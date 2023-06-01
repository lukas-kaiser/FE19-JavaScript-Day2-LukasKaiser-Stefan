function minutesToHours(minutes){
   let hours = Math.floor(minutes / 60);
   let leftoverMinutes = minutes % 60;
    console.log(`${minutes} minutes = ${hours} hour(s) and ${leftoverMinutes} minutes(s).`);
}

minutesToHours(1434);