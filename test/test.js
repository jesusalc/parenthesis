const chai = require('chai'),
      chai_http = require('chai-http'),
      should = chai.should(),
      path = require('path'),
      Parenthesis = require(path.join(__dirname, '../src/', 'Parenthesis')),
      chains = [
        '() [] () ([] ([]))',
        '((] ([)]',
        '{} [] ()',
        '{{}]}',
        '{[}',
        '[}]'
      ]

chai.use(chai_http)
chai.should()



describe('Parenthesis', () => {
  let parenthesis

  beforeEach(() => {
    parenthesis = new Parenthesis()
  })

  
  it('should balanced () [] () ([] ([])) parenthesis return true and YES', () => {
    let r = parenthesis.balanced('() [] () ([] ([]))')
    r.should.equal(true)
    parenthesis.translate_with_yes_no(r).should.equal('YES')
    console.log('() [] () ([] ([])) -> ' + parenthesis.translate_with_yes_no(r))
  })

  it('should balanced ((] ([)] parenthesis return false NO', () => {
    let r = parenthesis.balanced('((] ([)]')
    r.should.equal(false)
    parenthesis.translate_with_yes_no(r).should.equal('NO')
    console.log('((] ([)] -> ' + parenthesis.translate_with_yes_no(r))
  })

  it('should balanced {} [] () parenthesis return true', () => {
    let r = parenthesis.balanced('{} [] ()')
    r.should.equal(true)
    parenthesis.translate_with_yes_no(r).should.equal('YES')
    console.log('{} [] () -> ' + parenthesis.translate_with_yes_no(r))
  })

  it('should balanced {{}]} parenthesis return false', () => {
    let r = parenthesis.balanced('{{}]}')
    r.should.equal(false)
    parenthesis.translate_with_yes_no(r).should.equal('NO')
    console.log('{{}]} -> ' + parenthesis.translate_with_yes_no(r))
  })

  it('should balanced {[} parenthesis return false', () => {
    let r = parenthesis.balanced('{[}')
    r.should.equal(false)
    parenthesis.translate_with_yes_no(r).should.equal('NO')
    console.log('{[} -> ' + parenthesis.translate_with_yes_no(r))
  })

  it('should balanced [}] parenthesis return false', () => {
    let r = parenthesis.balanced('[}]')
    r.should.equal(false)
    parenthesis.translate_with_yes_no(r).should.equal('NO')
    console.log('[}] -> ' + parenthesis.translate_with_yes_no(r))
  })




})


