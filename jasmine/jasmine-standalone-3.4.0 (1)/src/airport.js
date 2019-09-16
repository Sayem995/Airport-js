function Plane() {
  var in_airport = false;
  Plane.land = function() {
    in_airport = true;
 }
 Plane.landed = function() {
   return in_airport;
 }
}
