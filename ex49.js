//for this excersice, we have to check for all three conditions and if all three are false, return not a cord
//so we would need the index position of element 1,2,3
//then use the conditions and the differences between the elements to determine which is true.

function minorOrMajor(chord) {
  let notes = [
    ['C'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'],
    ['F#', 'Gb'], ['G'], ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B']
  ];

  let chordArr = chord.split(' ');
  if (chordArr.length !== 3) {
    console.log('Not a chord');
    return;
  }

  let firstIndex = notes.findIndex(arr => arr.includes(chordArr[0]));
  let secIndex = notes.findIndex(arr => arr.includes(chordArr[1]));
  let thirdIndex = notes.findIndex(arr => arr.includes(chordArr[2]));

  let firstToSecond = Math.abs(secIndex - firstIndex);
  let secondToThird = Math.abs(thirdIndex - secIndex);
  let thirdToFirst = Math.abs(firstIndex - thirdIndex);

  if (firstToSecond === 4 && secondToThird === 3) {
    return('Major');
  } else if (firstToSecond === 3 && secondToThird === 4) {
    return('Minor');
  } else if (thirdToFirst === 7) {
    return('Minor/Major');
  } else {
    return('Not a chord');
  }
}

console.log(minorOrMajor('B D# F#'))


