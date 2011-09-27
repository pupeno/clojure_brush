// Copyright © 2009 Travis Whitton
// Copyright © 2011 J. Pablo Fernández

SyntaxHighlighter.brushes.Clojure = function() {
  var funcs = ":arglists :doc :file :line :macro :name :ns :private :tag :test new alias alter " +
              "and apply assert class cond conj count def defmacro defn defstruct deref do "     +
              "doall dorun doseq dosync eval filter finally find first fn gen-class gensym if "  +
              "import inc keys let list loop map ns or print println quote rand recur reduce "   +
              "ref repeat require rest send seq set sort str struct sync take test throw "       +
              "trampoline try type use var vec when while";

  this.regexList = [
          // Explicitly match entities to avoid them matching a comment. https://github.com/alexgorbatchev/SyntaxHighlighter/issues/41
          { regex: new RegExp("&", "gm"),                                 css: "keyword"},
          { regex: new RegExp("&amp;", "gm"),                             css: "keyword"},
          { regex: new RegExp("&gt;", "gm"),                              css: "keyword"},
          { regex: new RegExp("&lt;", "gm"),                              css: "keyword"},

          { regex: new RegExp(";.*$", "gm"),                               css: "comments" },
          { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: "string" },
          { regex: /\[|\]/g,                                               css: "keyword" },
          { regex: /'[a-z][A-Za-z0-9_\-]*/g,                               css: "color1" }, // symbols
          { regex: /:[a-z][A-Za-z0-9_\-]*/g,                               css: "color2" }, // keywords
          { regex: new RegExp(this.getKeywords(funcs), "gmi"),             css: "functions" }
      ];
}

SyntaxHighlighter.brushes.Clojure.prototype     = new SyntaxHighlighter.Highlighter(); 
SyntaxHighlighter.brushes.Clojure.aliases       = ["clojure", "Clojure", "clj"];