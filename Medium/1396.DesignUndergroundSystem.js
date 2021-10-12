var UndergroundSystem = function () {
  this.checkInMap = new Map();
  this.time = new Map();
  this.count = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.checkInMap.set(id, [stationName, t]);
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  let user = this.checkInMap.get(id);
  let prevStation = user[0];
  let startTime = user[1];
  let stationNames = `${prevStation}->${stationName}`;
  let len = t - user[1];
  if (this.time.has(stationNames)) {
    let currLen = this.time.get(stationNames);
    currLen += len;
    this.time.set(stationNames, currLen);
    this.count.set(stationNames, this.count.get(stationNames) + 1);
  } else {
    this.time.set(stationNames, len);
    this.count.set(stationNames, 1);
  }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  let stationNames = `${startStation}->${endStation}`;
  return this.time.get(stationNames) / this.count.get(stationNames);
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
//https://leetcode.com/problems/design-underground-system/
