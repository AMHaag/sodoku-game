let failedTries = {
  test1: [
    0, 0, 0, 4, 0, 0, 2, 0, 0, 5, 0, 2, 0, 0, 0, 0, 0, 0, 7, 0, 0, 1, 0, 3, 0,
    0, 0, 0, 7, 9, 0, 0, 0, 4, 0, 5, 6, 0, 0, 0, 7, 0, 0, 0, 9, 4, 0, 1, 0, 0,
    0, 8, 6, 0, 0, 0, 0, 7, 0, 9, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 0, 8, 0, 0, 3,
    0, 0, 1, 0, 0, 0,
  ],
  test2: [
    0, 0, 0, 3, 0, 0, 0, 9, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1, 6, 0, 0, 0, 0, 3,
    5, 0, 0, 0, 0, 0, 4, 0, 0, 2, 9, 0, 0, 8, 6, 0, 3, 5, 0, 0, 7, 1, 0, 0, 5,
    0, 0, 0, 0, 0, 9, 5, 0, 0, 0, 0, 7, 3, 0, 0, 0, 0, 0, 7, 0, 0, 0, 6, 8, 0,
    0, 0, 2, 0, 0, 0,
  ],
  test3: [
    0, 2, 8, 0, 3, 0, 0, 1, 0, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 8, 0,
    0, 0, 0, 0, 1, 0, 7, 0, 0, 0, 6, 0, 0, 0, 2, 8, 6, 0, 0, 0, 2, 0, 0, 0, 9,
    0, 4, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 7, 0, 9, 0,
    0, 6, 0, 8, 3, 0,
  ],
  test4: [
    0, 7, 0, 1, 0, 0, 2, 3, 0, 0, 2, 0, 0, 0, 6, 7, 0, 5, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 8, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 7, 3, 9, 8, 1, 0, 0, 0, 0, 0, 5, 0,
    0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 4, 8, 0, 0, 0, 6, 0, 0, 5, 6,
    0, 0, 3, 0, 4, 0,
  ],
  test5: [
    0, 0, 2, 0, 0, 0, 6, 5, 0, 7, 0, 0, 0, 0, 2, 0, 0, 0, 9, 0, 0, 8, 0, 4, 0,
    0, 0, 0, 9, 0, 0, 1, 0, 8, 0, 0, 3, 0, 0, 9, 0, 5, 0, 0, 4, 0, 0, 1, 0, 4,
    0, 0, 9, 0, 0, 0, 0, 1, 0, 8, 0, 0, 6, 0, 0, 0, 5, 0, 0, 0, 0, 2, 0, 2, 9,
    0, 0, 0, 3, 0, 0,
  ],
  test6: [
    0, 2, 0, 0, 0, 6, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 4, 0, 7,
    0, 9, 0, 5, 0, 0, 8, 0, 2, 0, 0, 0, 0, 9, 7, 0, 2, 1, 0, 0, 0, 0, 1, 0, 6,
    0, 0, 9, 0, 4, 0, 8, 0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 6, 0, 0, 6, 0, 0,
    5, 0, 0, 0, 8, 0,
  ],
  test7: [
    0, 0, 0, 0, 4, 0, 3, 0, 0, 5, 0, 8, 0, 0, 0, 1, 6, 0, 0, 0, 0, 1, 0, 0, 0,
    5, 2, 0, 7, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 3, 5, 4, 0, 0, 0, 0, 0, 9, 0, 0,
    0, 0, 3, 0, 6, 1, 0, 0, 0, 2, 0, 0, 0, 0, 8, 3, 0, 0, 0, 2, 0, 1, 0, 0, 4,
    0, 1, 0, 0, 0, 0,
  ],
  test8: [
    0, 0, 0, 0, 2, 0, 0, 6, 0, 7, 0, 0, 9, 0, 0, 4, 0, 0, 0, 0, 6, 0, 0, 4, 0,
    0, 0, 4, 0, 0, 8, 0, 0, 6, 0, 5, 2, 0, 0, 0, 4, 0, 0, 0, 1, 5, 0, 7, 0, 0,
    9, 0, 0, 4, 0, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 7, 0, 9, 0,
    0, 6, 0, 0, 0, 0,
  ],
  test9: [
    0, 6, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 4, 0, 0, 0, 0, 7,
    5, 6, 0, 8, 1, 0, 0, 9, 0, 0, 0, 4, 0, 0, 5, 0, 6, 0, 0, 8, 0, 0, 0, 3, 0,
    0, 5, 7, 0, 2, 3, 8, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 9, 0, 0, 3, 0,
  ],
  test10: [
    9, 0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 5, 0, 0, 7, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 7, 6, 0, 0, 0, 0, 0, 3, 5, 0, 0, 0, 6, 0, 0, 0, 8, 8, 0, 0, 0, 0,
    0, 4, 9, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 4, 0, 0, 1, 9, 0, 6, 0, 0, 0, 0, 0,
    0, 0, 8, 1, 0, 4,
  ],
  test11: [
    0, 0, 0, 5, 0, 0, 0, 0, 7, 0, 8, 0, 0, 0, 0, 4, 1, 0, 7, 0, 0, 4, 1, 0, 0,
    0, 0, 0, 0, 8, 6, 0, 0, 7, 0, 0, 9, 0, 0, 8, 0, 3, 0, 0, 5, 0, 0, 3, 0, 0,
    2, 1, 0, 0, 0, 0, 0, 0, 7, 4, 0, 0, 3, 0, 4, 6, 0, 0, 0, 0, 7, 0, 2, 0, 0,
    0, 0, 8, 0, 0, 0,
  ],
};


export default failedTries;