/**
* Написать функцию sostavChisla(massivChisel: number[], chislo: number), 
  которая бы находила все возможные комбинации чисел из massivChisel, 
  сумма которых равна chislo. При этом:
  1) massivChisel содержит, только уникальные положительные числа (> 0)
  2) в комбинации не должно быть повторений чисел
  3) все комбинации должны быть уникальными
  
  Для проверки работоспособности функции запустить runTests()
  
  @param massivChisel: number[]
  @param chislo: number[]
  @return Array<Array<number>>
*/

// chislo: 8,
// massivChisel: [1, 2, 3, 4, 5, 6, 7, 8],
// result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]]

function sostavChisla(massivChisel, chislo) {
  const currentResults = [];
  const results = [];

  function search(startIndex, targetSum) {
    if (targetSum === 0) {
      if (currentResults.length !== new Set(currentResults).size) {
        return;
      }
      results.push(currentResults.slice());
      return;
    } else if (targetSum < 0) {
      return;
    } else if (startIndex === massivChisel.length) {
      return;
    } else {
      currentResults.push(massivChisel[startIndex]);
      search(startIndex, targetSum - massivChisel[startIndex]);
      currentResults.pop();
      search(startIndex + 1, targetSum);
    }
  }

  search(0, chislo);

  return results;
}

sostavChisla([1, 2, 3, 4, 5, 6, 7, 8], 8);
