function pluck(objs, name) {
  return objs.map(function (obj) {
    return obj[name];
  });
}