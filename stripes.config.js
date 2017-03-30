module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    disableAuth: true
    // candidate logCategories: 'core,connect,redux,path,mpath,action,perm,xhr'
    // logPrefix
    // logTimestamp
    // showPerms
  },
  modules: {
    '@folio/trivial': {},
    '@folio/users': {}
  }
};
