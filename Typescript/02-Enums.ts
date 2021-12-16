
// Numeric enum
enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  console.log(message);
}

respond("UserResponse", UserResponse.Yes);



/*
// String enum
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function respond(recipient: string, message: Direction): void {
  console.log(recipient + ': ' + message);
}

respond("Direction", Direction.Left);
*/


/*
// Heterogeneous enum
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

function respond(recipient: string, message: BooleanLikeHeterogeneousEnum): void {
  console.log(recipient + ': ' + message);
}

respond("Respond", BooleanLikeHeterogeneousEnum.Yes);
*/
