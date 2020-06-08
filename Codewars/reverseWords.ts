// 2codes à faire tourner
function reverseWords(str: string): string {
    if (str === "")
        return"";
    else
      return reverseWords(str.substr(1)) + str.charAt(0);
  }
  //var essai="ok";
  reverseWords("essai");

  function reverseWords(str) {
    return (str === '') ? '' : reverseWords(str.substr(1)) + str.charAt(0);
  }
  reverseWords("hello");
