// Copyright © 2009 Travis Whitton
// Copyright © 2011 J. Pablo Fernández

;(function() {
    // CommonJS
    typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

    function Brush() {
        function process(match, regexInfo) {
            return [new SyntaxHighlighter.Match(match[1], match.index + 1, "functions")];
        }

        this.regexList = [
            // Explicitly match entities to avoid them matching a comment. https://github.com/alexgorbatchev/SyntaxHighlighter/issues/41
            { regex: new RegExp("&", "gm"),                                 css: "keyword"},
            { regex: new RegExp("&amp;", "gm"),                             css: "keyword"},
            { regex: new RegExp("&gt;", "gm"),                              css: "keyword"},
            { regex: new RegExp("&lt;", "gm"),                              css: "keyword"},

            { regex: new RegExp(";.*$", "gm"),                               css: "comments" },
            { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: "string" },
            { regex: /'[a-z][A-Za-z0-9_\-]*/g,                               css: "constants" }, // symbols
            { regex: /:[a-z][A-Za-z0-9_\-]*/g,                               css: "color1" }, // keywords
            { regex: /\(([a-z][A-Za-z0-9_\-]*)/gm,             func: process },
            { regex: /[\(\)\[\]`@~#]/g,                                         css: "keyword" },
        ];
    }

    Brush.prototype	= new SyntaxHighlighter.Highlighter();
    Brush.aliases	= ["clojure", "Clojure", "clj"];

    SyntaxHighlighter.brushes.Clojure = Brush;

    // CommonJS
    typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();