// const { name, height, message } = require("../index.js");


// describe('what-is-a-test', () => {
//   describe('Name', () => {
//     it('returns "Susan"', () => {
//       expect(name).toEqual('Susan')
//     })
//   })


//   describe('Height', () => {
//     it('is less than 40', () => {
//       expect(height).toBeLessThan(40)
//     })
//   })

//   describe('Message', () => {
//     it('gives the name and height', () => {
//       expect(message).toInclude(name)
//       expect(message).toInclude(height)
//     })
//   })
// })

describe('introduction(name)', function() {
  it('takes in an argument of a name and returns a phrase with that name using string interpolation', function() {
    expect(introduction("Aki")).toEqual("Hi, my name is Aki.");
    expect(introduction("Samip")).toEqual("Hi, my name is Samip.");
  })
})

describe('introductionWithLanguage(name, language)', function() {
  it('takes in two arguments, a name and a language, and returns a phrase using those arguments', function() {
    expect(introductionWithLanguage("Aki", "Ember.js")).toEqual("Hi, my name is Aki and I am learning to program in Ember.js.");
    expect(introductionWithLanguage("Samip", "React")).toEqual("Hi, my name is Samip and I am learning to program in React.");
  })
})

describe('introductionWithLanguageOptional(name, language)', function() {
  it('takes in two arguments, a name and a language, and language defaults to JavaScript', function() {
    expect(introductionWithLanguageOptional("Gracie")).toEqual("Hi, my name is Gracie and I am learning to program in JavaScript.");
  })
})

describe('introductionWithLanguageOptional(name, language)', function() {
  it('takes in two arguments, a name and a language, and the default value can be overridden with an argument', function() {
    expect(introductionWithLanguageOptional("Gracie", "Python")).toEqual("Hi, my name is Gracie and I am learning to program in Python.");
  })
})

