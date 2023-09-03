let greetings = "Assalam-O-Alaikum"

greetings.toLowerCase()
console.log(greetings)

/* number 
 this userId: number, this depicts/annotates that this is a number and should always be number
 and this is called annotation
 we need to infer the annotation of the type
 and we only have number as type for int or float in TypeScript or. JavaScript
 if you're declaring and inializing a variable at the same time then you can skip the annotation as TypeScript is smart enought to know it 
*/
let userId = 334466

userId.toFixed()
// but it will give error when assigning string value to number
// userId = "trying to assign string";


// boolean
let isLoggedIn = false

// any
// don't use any everywhere as it's not a good practice
// any is not a type but works like a marker if you want to avoid type checking errors for something
// implicit means TypeScript will infer and explicit means you'll tell the type explicitly e.g. userId: number
// you can turn on the noImplicityAny flag from tsconfig and you'll not fall in the problem
let hero

function getHero(){
    return "iron man"
}
// TypeScript will incur this as type any 
hero = getHero()

export {}