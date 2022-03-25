indexNumbers = ["1", "2", "3", "4", "5", "6"]

row1str = "<div class=\"col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3\"><div type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#img";
row2str = "modal\"><div class=\"img-";
row3str = "\"></div></div></div>";
strRow = "";

for (var i = 0; i < indexNumbers.length; i++) {
    strRow = strRow + row1str + indexNumbers[i] + row2str + indexNumbers[i] + row3str;
}

document.getElementById("row").innerHTML = strRow;

imgCodes = ["CLD0001", "CLD0002", "CLD0003", "CLD0004", "CLD0005", "CLD0006"]

modal1str = "<div class=\"modal fade\" id=\"img";
modal2str = "modal\" tabindex=\"-1\" aria-labelledby=\"img";
modal3str = "modal\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\" id=\"img";
modal4str = "modalLabel\">Calling Card Design</h5><button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button></div><div class=\"modal-body\"><img src=\"/assets/services/graphic-design/calling-card-design/";
modal5str = ".jpg\" alt=\"\" width=\"100%\"></div><div class=\"modal-footer\"><span class=\"text-muted\">Libra Techno Code: ";
modal6str = "</span></div></div></div></div>";
strModal = "";

for (var i = 0; i < indexNumbers.length; i++) {
    strModal = strModal + modal1str + indexNumbers[i] + modal2str + indexNumbers[i] + modal3str + indexNumbers[i] + modal4str + indexNumbers[i] + modal5str + imgCodes[i] + modal6str;
}

document.getElementById("modal-div").innerHTML = strModal;