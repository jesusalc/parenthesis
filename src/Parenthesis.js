class ThrowError extends Error {
  constructor(message) {
    super();
    this.message = message; 
    this.stack = (new Error()).stack;
    this.name = this.constructor.name;
    if (typeof console === "object" && typeof console.err === "function" ){
      console.err(message)
    } else {
      console.log(`\u001b[31m${message}`)
    }
  }
} // end class ThrowError

const ERROR_EXPECTED_BOOLEAN = "Error: Expected Boolean Got:"
const ERROR_EXPECTED_STRING = "Error: Expected String Got:"


class Parenthesis {

  
  constructor() {

 
  }

  _test_array(chains) {
    let resultant = []
    for (let chain of chains) {
      is_balanced = this._test_worker(chain)
      resultant.push(this.translate_with_yes_no(is_balanced))
    }
    return resultant
    // console.log(resultant)
  }

  _test_worker(chain) {
    let check_parenthesis = []
    let check_brackets = []
    let check_curly = []
    let unpaired = []
    for (let one_character of chain) {
      switch (one_character) {
        case '(':
          check_parenthesis.push(one_character)
          break
        case '[':
          check_brackets.push(one_character)
          break
        case '{':
          check_curly.push(one_character)
          break
        case ')':
          if (check_parenthesis.length > 0)
            check_parenthesis.pop()
          else
            unpaired.push(one_character)
          break
        case ']':
          if (check_brackets.length > 0)
            check_brackets.pop()
          else
            unpaired.push(one_character)
          break
        case '}':
          if (check_curly.length > 0)
            check_curly.pop()
          else
            unpaired.push(one_character)
          break
        default:
          break
      }
    } // for end

    return (check_parenthesis.length == 0 && check_brackets.length == 0 && check_curly.length == 0 && unpaired.length == 0)

  } // _test_worker end

  balanced(chain){
    if (typeof chain === 'string') {
      return this._test_worker(chain)
    } else {
      new ThrowError(ERROR_EXPECTED_STRING + typeof chain)
      return null
    } 
  }

  translate_with_yes_no(falsy){
    if (typeof falsy === 'boolean') {
      return (falsy ? 'YES' : 'NO')
    } else {
      new ThrowError(ERROR_EXPECTED_BOOLEAN + typeof falsy)
      return 'ERROR'
    }
  }

} // class end
module.exports = Parenthesis