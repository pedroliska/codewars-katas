var vms, i, weight;
vms = [];
weight = 0;

for (i = 0; i < 100; i++) {
    vms.push({
        vend: function () {
            weight += 100;
        }
    });
}
vms[42].vend = function () {
    weight += 101;
};
vms.weigh = function () {
    return weight;
};

var heavyCandyCount;
function isInRange(vms, inclusiveMin, exclusiveMax) {
    var i;
    for (i = inclusiveMin; i < exclusiveMax; i++) {
        vms[i].vend();
    }
    var foundHeavy = ((vms.weigh() - heavyCandyCount) % 100) !== 0;
    if (foundHeavy)
        heavyCandyCount++;
    return foundHeavy;
}
function fetchNumber(vms, inclusiveMin, exclusiveMax) {
    var midPoint;

    inclusiveMin = Math.floor(inclusiveMin);
    exclusiveMax = Math.floor(exclusiveMax);
    if (inclusiveMin === exclusiveMax - 1)
        return inclusiveMin;

    midPoint = Math.floor(((exclusiveMax - inclusiveMin) / 2) + inclusiveMin);

    // check lower half
    var isInLower = isInRange(vms, inclusiveMin, midPoint);
    if (isInLower) {
        return fetchNumber(vms, inclusiveMin, (midPoint));
    } else {
        return fetchNumber(vms, (midPoint), exclusiveMax);
    }
}
function findSpecialIdx(vms) {
    heavyCandyCount = 0;
    return fetchNumber(vms, 41, 43);
}