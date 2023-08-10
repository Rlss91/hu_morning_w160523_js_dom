const defaultParams = (a1, a2 = 5) => a1 + a2;

defaultParams(1, 1); // 1+1
defaultParams(1); // 1+5

const defaultParams2 = (a1 = 5, a2) => a1 + a2;
//! defaultParams2(,5) //syntax error

const defaultParams3 = (a1 = 5, a2 = 5) => a1 + a2;
defaultParams3(); // 5+5
defaultParams3(1); //1+5
defaultParams3(1, 1); //1+1
