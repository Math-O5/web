// Proposed: https://eloquentjavascript.net/07_robot.html

/**
 * 
 */
class VillageState {
    constructor(place, parcels) {
        this.place = place;     // current robot position
        this.parcels = parcels; // all parcels that need to be delivered
    }

    move(destination) {

      // the state remains the same if there is no road to go.
      if(!roadGraph[this.place].includes(destination)) {
        return this;
      } else {
        // Change state of all moving parcel, 
        this.parcels = this.parcels
                           .map(parcel => {
                              if(parcel.address != this.place) 
                                return {place: destination, address: parcel.address};
                              else return parcel;
                           })
                           .filter(parcel => parcel.address != this.place); 
        console.log(this.parcels);
        return new VillageState(destination, this.parcels);
      }
    }
}

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};
