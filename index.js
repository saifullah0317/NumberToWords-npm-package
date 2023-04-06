#! /usr/bin/env node

const digitNames = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teenNames = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tenNames = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

export default function convertToEnglish(numberString) {
  if (numberString === '0') {
    return 'zero';
  }

  const words = [];

  // Split the number into groups of three digits
  const groups = splitNumberIntoGroups(numberString);

  // Map each group to its English word representation
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];

    if (group === '000') {
      continue;
    }

    const groupWords = [];

    // Convert the hundreds place
    if (group[0] !== '0') {
      groupWords.push(digitNames[parseInt(group[0])] + ' hundred');
    }

    // Convert the tens and ones places
    const tens = parseInt(group[1] + group[2]);

    if (tens === 0) {
      // Do nothing
    } else if (tens < 10) {
      groupWords.push(digitNames[tens]);
    } else if (tens < 20) {
      groupWords.push(teenNames[tens - 10]);
    } else {
      groupWords.push(tenNames[parseInt(group[1])]);
      if (group[2] !== '0') {
        groupWords.push(digitNames[parseInt(group[2])]);
      }
    }

    // Add the group suffix (thousand, million, billion, etc.)
    const groupSuffix = getGroupSuffix(groups.length - i - 1);
    if (groupSuffix) {
      groupWords.push(groupSuffix);
    }

    // Add the group's words to the total list of words
    words.push(...groupWords);
  }

  // Join the words and return the result
  return words.join(' ');
}

function splitNumberIntoGroups(numberString) {
  const groups = [];

  for (let i = numberString.length - 1; i >= 0; i -= 3) {
    const group = numberString.substring(Math.max(i - 2, 0), i + 1);
    groups.unshift(group.padStart(3, '0'));
  }

  return groups;
}

function getGroupSuffix(groupIndex) {
  const suffixes = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion'];
  return suffixes[groupIndex];
}