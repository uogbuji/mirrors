function gopage(turn) {
	var pagenum = parseInt(location.search.replace("?","")) + turn;
	location="page" + pagenum + ".htm?" + pagenum;
}

function goauthor(author) {
	location="contributors.html#" + author;
}