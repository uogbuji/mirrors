Pro-bono maintenance of mirrors, mostly literary, at mirrors.ogbuji.net 


# Paul Stevens sites

For some reason had to manually do:

```
$ cd www.shitcreekreview.com/issue5/images
$ wget http://www.shitcreekreview.com/issue5/images/homebg.jpg
$ cd -
$ cd www.the-flea.com/images
$ wget http://www.the-flea.com/images/bgBot762x58.png
$ wget http://www.the-flea.com/images/bgMid762x30.png
$ wget http://www.the-flea.com/images/bgtextPageTop762x64.png
$ wget http://www.the-flea.com/images/bgTop762x120.png
$ wget http://www.the-flea.com/images/issueHeadertext.gif
$ wget http://www.the-flea.com/images/theFleaRptIssue.gif
```

Then:

```
$ vi shitcreek.auszine.com/author-index/index.html
```

To change from:

```
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
```

to:

```
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
```
