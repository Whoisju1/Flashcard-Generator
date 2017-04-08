module.exports = function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;

    this.clozeDeleted = function() {
        return this.cloze;
    }();
    this.partial = function() {

        var pattern = new RegExp(cloze, "i");
        //Test to see if the cloze deletion is in the full text
        var result = pattern.test(text);
        //return truncated string
        if (result) {
            return "..." + text.slice(cloze.length);
        } else {
            throw Error;
        }
    }();
    this.fullText = function() {
        // return this.text;
        return text; //when the "this" keyword is placed before "text" the method returnd undefined
    }();
};