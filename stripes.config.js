module.exports = {
  okapi: { 
	'url':'http://localhost:9130', 
	//'url':'http://ec2-52-72-197-19.compute-1.amazonaws.com:9130',
	// 'url':'http://folio-ci10.aws.indexdata.com:9130', 
	'tenant':'diku' 
  },
  config: {
    reduxLog: true,
    // candidate logCategories: 'core,connect,redux,path,mpath,action,perm,xhr'
    // logPrefix
    // logTimestamp
    // showPerms
  },
  modules: {
    '@folio/trivial': {},
    '@folio/items': {},
    '@folio/scan': {},
    '@folio/users': {}
  }
};
