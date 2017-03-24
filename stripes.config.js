module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    reduxLog: true,
    disableAuth: true
    // candidate logCategories: 'core,connect,redux,path,mpath,action,perm,xhr'
  },
  modules: {
    '@folio/trivial': {},
    '@folio/users': {}
  }
};
