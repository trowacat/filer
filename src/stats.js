var Constants = require('./constants.js');

function Stats(fileNode, devName) {
  this.node = fileNode.id;
  this.dev = devName;
  this.size = fileNode.size;
  this.nlinks = fileNode.nlinks;
  this.atime = fileNode.atime;
  this.mtime = fileNode.mtime;
  this.ctime = fileNode.ctime;
  this.type = fileNode.type;
  // Expose extra Plan 9 bits too
  this.p9 = fileNode.p9;
}

Stats.prototype.isFile = function() {
  return this.type === Constants.NODE_TYPE_FILE;
};

Stats.prototype.isDirectory = function() {
  return this.type === Constants.NODE_TYPE_DIRECTORY;
};

Stats.prototype.isSymbolicLink = function() {
  return this.type === Constants.NODE_TYPE_SYMBOLIC_LINK;
};

// These will always be false in Filer.
Stats.prototype.isSocket          =
Stats.prototype.isFIFO            =
Stats.prototype.isCharacterDevice =
Stats.prototype.isBlockDevice     =
function() {
  return false;
};

module.exports = Stats;
