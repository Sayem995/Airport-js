'use strict';

function Plane(){}
Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
  this._lcoation = airport;
};
Plane.prototype.takeoff = function(){
  this._location.clearForTakeOff();
};
