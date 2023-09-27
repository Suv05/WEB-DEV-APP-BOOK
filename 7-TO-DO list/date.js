module.exports = function () {

    let toDay = new Date();

    let option = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }

    let day = toDay.toLocaleDateString('en-US', option);

    return day;
}
