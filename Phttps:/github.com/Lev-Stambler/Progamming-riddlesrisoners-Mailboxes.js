let goodRuns = 0;
function main() {
  for (var i = 0; i < 500; i++) {
    const mailBoxes = createMailBoxes();
    runStrat(mailBoxes, 0, 0, 0)
  }
  console.log(`${goodRuns} were succesful out of 500`);
  return goodRuns
}

function runStrat(mailBoxes, i, boxInd, currCounter) {
  if (i === 100) { goodRuns++; return true; }
  if (currCounter === 50) return false
  if (mailBoxes.mailBoxKeyed[boxInd] === i) {
    // console.log('bbbb')
    runStrat(mailBoxes, i + 1, i + 1, 0);
  }
  else {
    const newBoxInd = mailBoxes.mailBoxKeyed[boxInd];
    // console.log(mailBoxes.mailBoxKeyed[boxInd], i)
    runStrat(mailBoxes, i, newBoxInd, currCounter + 1);
  }
}

function createMailBoxes() {
  let mailBoxes = {
    cellKeyed: {},
    mailBoxKeyed: {}
  };
  for (var i = 0; i < 100; i++) {
    // look for non taken cell
    let randCell = Math.floor(Math.random() * 100);
    while (mailBoxes.cellKeyed[randCell] !== undefined) {
      randCell = Math.floor(Math.random() * 100);
    }
    mailBoxes.cellKeyed[randCell] = i;
    mailBoxes.mailBoxKeyed[i] = randCell;
  }
  return mailBoxes;
}

console.log(main())
setTimeout(() => {console.log(goodRuns)}, 1000)
