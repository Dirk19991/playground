// Input: votes = ["ABC","ACB","ABC","ACB","ACB"]
// Output: "ACB"
// Explanation:
// Team A was ranked first place by 5 voters. No other team was voted as first place, so team A is the first team.
// Team B was ranked second by 2 voters and ranked third by 3 voters.
// Team C was ranked second by 3 voters and ranked third by 2 voters.
// As most of the voters ranked C second, team C is the second team, and team B is the third.

var rankTeams = function (votes) {
  let hashMap = {};

  for (let letter of votes[0]) {
    hashMap[letter] = Array(votes[0].length).fill(0);
  }

  for (let vote of votes) {
    for (let i = 0; i < vote.length; i++) {
      console.log(hashMap[vote[i]]);
      hashMap[vote[i]][i]++;
    }
  }

  let count = 0;

  function sorter(a, b) {
    for (let count = 0; count < b[1].length; count++) {
      if (b[1][count] - a[1][count] > 0) {
        return 1;
      }
      if (b[1][count] - a[1][count] < 0) {
        return -1;
      }
    }
    return b[0] < a[0] ? -1 : 1;
  }

  console.log(hashMap);
  let entries = Object.entries(hashMap);
  entries = entries.sort(sorter);
  return entries.reduce((acc, elem) => (acc += elem[0]), '');
};

console.log(rankTeams(['WXYA', 'XYZA', 'YAWX']));
