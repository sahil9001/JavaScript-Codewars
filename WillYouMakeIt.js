const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    if(mpg*fuelLeft>=distanceToPump) return true;
    else return false;
  };
  module.exports = zeroFuel;