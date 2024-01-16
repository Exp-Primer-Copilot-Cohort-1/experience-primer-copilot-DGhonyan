// create web server
// 1. load modules
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
// 2. create server
var server = http.createServer(function (req, res) {
    var url = req.url;
    if (url == '/') {
        url = '/index.html';
    }
    if (url == '/index.html') {
        fs.readFile(path.join(__dirname, 'index.html'), function (err, data) {
            if (err) {
                res.end('server error');
            } else {
                res.setHeader('Content-Type', 'text/html;charset=utf-8');
                res.end(data);
            }
        })
    } else if (url == '/index.css') {
        fs.readFile(path.join(__dirname, 'index.css'), function (err, data) {
            if (err) {
                res.end('server error');
            } else {
                res.setHeader('Content-Type', 'text/css;charset=utf-8');
                res.end(data);
            }
        })
    } else if (url == '/index.js') {
        fs.readFile(path.join(__dirname, 'index.js'), function (err, data) {
            if (err) {
                res.end('server error');
            } else {
                res.setHeader('Content-Type', 'text/javascript;charset=utf-8');
                res.end(data);
            }
        })
    } else if (url == '/jquery-1.12.4.js') {
        fs.readFile(path.join(__dirname, 'jquery-1.12.4.js'), function (err, data) {
            if (err) {
                res.end('server error');
            } else {
                res.setHeader('Content-Type', 'text/javascript;charset=utf-8');
                res.end(data);
            }
        })
    } else if (url == '/images/1.jpg') {
        fs.readFile(path.join(__dirname, 'images/1.jpg'), function (err, data) {
            if (err) {
                res.end('server error');
            } else {
                res.setHeader('Content-Type', 'image/jpeg;charset=utf-8');
                res.end(data);
            }
        })
    } else if (url == '/images/2.jpg') {
        fs.readFile(path.join(__dirname, 'images/2.jpg'), function (err, data) {
            if (err) {
                res.end('server error');
            } else {
                res.setHeader