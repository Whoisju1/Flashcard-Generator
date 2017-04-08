module.exports = function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;

    this.clozeDeleted = function() {
        return this.cloze;
    }.bind(this)();
    this.partial = function() {

        var pattern = new RegExp(cloze, "i");
        var result = pattern.test(text);
        if (result) {
            return "..." + text.slice(cloze.length);
        } else {
            throw Error;
        }
    }.bind(this)();
    this.fullText = function() {

        return this.text;
    }.bind(this)();
};