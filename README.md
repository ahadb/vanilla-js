# vanilla-js
Learn to embrace vanilla JavaScript without the kruft, churn, bloat and fluff. This repos is work in progress that aims to address people learning the CORE JavaScript language instead of dropping in new libraries and frameworks (...the proverbial shiny new object).

If you're a serious JavaScript developer you need to know the core language, it's quirks and nuances from the ground up. By learning the fundamentals you'll put yourself ahead of the pack and build great confidence and skill - skill that will be the envy of your colleages. If you look behind the hood of any library or frameworks, you'll see vanilla javascript patterns written over and over and over - this should in itself indicate to you that you don't need a library or framework to do much of the stuff you need to do on a daily basis.

Honestly the advantages are limitless so we won't concentrate on listing them. Below you'll find syntactical examples and short descriptions of popular vanilla javascript in the wild that you should definitely acquaint yourself with in no particualr order. Once this repo grows to a substantial level I'll reorganize it into succinct categories.

Go on build your career, confidence and the respect of other engineers in the industry!

## Assert
The most humble of functions, if you know how to use this function it can take care of 80% of your test cases:

```javascript
function assert(val, descr) {
  if (val) {
    console.log(descr)
    return true
  } else {
    console.log(descr)
    return false
  }
}
```
