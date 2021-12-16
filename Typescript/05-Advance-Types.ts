/*  
Intersection Types
Union Types
Generic Types
*/

// Intersection Types
type LeftType = {
  id: number
  left: string
}

type RightType = {
  id: number
  right: string
}

type IntersectionType = LeftType & RightType

function showType(args: IntersectionType) {
  console.log(args)
}

showType({ id: 1, left: "test", right: "test" })

// Union Types
/* type UnionType = string | number

function showType(arg: UnionType) {
  console.log(arg)
}

showType("test")

showType(7) */


// Generic Types
/* function showType<T>(args: T) {
  console.log(args)
}

showType("test")
// Output: "test"

showType(1) */
