var data = require("../data.json");
var _ = require('underscore');

exports.editFolder = function(req, res) {   

  //Change Folder Name
  if(req.query.newFolderName != (null || '' || "")){
    for(var i = 0; i < _.size(data.folders); i++){
      if(data.folders[i].folderID == req.params.folderID){
        data.folders[i].name = req.query.newFolderName;
        break;
      }
    }
  }
  //Delete Folder
  if(req.query.confirmDelete == "DELETE"){
    for(var i = 0; i < _.size(data.folders); i++){
      if(data.folders[i].folderID == req.params.folderID){
        delete data.folders[i];
        break;
      }
    }    
    res.redirect('/index');
  }

  console.log(data);
  res.redirect('/folder/' + req.params.folderID);
};
