(function () {
  var currentPage = window.CURRENT_PAGE;
  var testResults = {};
  var supertestName = "";

  function getRowName($el) {
    var $rowName = $el.find("td:first-child > span:first-child").clone();
    $rowName.find(".anchor").remove();
    $rowName.find("sup").remove();
    return jQuery.trim($rowName.text());
  }

  function getRowCurrent($el) {
    return $el.find("td:nth-child(2)").is(".yes");
  }

  setTimeout(function () {
    jQuery("#table-wrapper > tbody > tr").each(function () {
      var $this = $(this);
      if ($this.is(".supertest")) {
        supertestName = getRowName($this);
        testResults[supertestName] = {};
      } else if ($this.is(".subtest")) {
        var subtestName = getRowName($this);
        testResults[supertestName][subtestName] = getRowCurrent($this);
      } else if ($this.attr("significance")) {
        var testName = getRowName($this);
        testResults[testName] = getRowCurrent($this);
      }
    });
    var osVersion = localStorage.getItem("playerOsVersion");
    var playerVersion = localStorage.getItem("playerPlayerVersion");
    var data = {
      osVersion: osVersion,
      playerVersion: playerVersion,
      esVersion: currentPage,
      results: testResults,
    };
    var dataJSON = JSON.stringify(data, null, 2);
    jQuery.post("/upload", dataJSON, function () {
      if (currentPage === "es5") {
        window.location.href = "/es6/index_scraper.html";
      } else if (currentPage === "es6") {
        window.location.href = "/es2016plus/index_scraper.html";
      } else {
        window.location.href = "/#stop";
      }
    });
  }, 15000);
})();
