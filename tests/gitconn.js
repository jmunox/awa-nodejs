#! /usr/local/bin/node

/**
 * Created by jmunoza on 17/04/15.
 */
var github = require('octonode');

var gitclient = github.client('3a63c2b0625dfa7d1dc5605cf0b768d930bc95f1');

//gitclient.get('/user', {}, function (err, status, body, headers) {
    //console.log(body); //json object
//});

var ghrepo = gitclient.repo('jmunox/id-research');

//ghrepo.commits(function (err,  data, headers) {
//   console.log(data);
//});

ghrepo.contents('adhoc_design_collab_tools',function (err,  data, headers) {
    var b = new Buffer(data.content, 'base64');
    console.log(b.toString());

});