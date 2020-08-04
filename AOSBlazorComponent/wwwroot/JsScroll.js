window.addEventListener('scroll', () => {
    var matches = document.querySelectorAll("[data-blazor]");
    matches.forEach(m => {
        var Scroll_position = window.pageYOffset;
        applyClasses(m, Scroll_position);
    });

});

let options = {
    once: false,
};

const applyClasses = (el, top) => {

    var PositionOut = getPositionOut(el);
    var PostionIn = getPositionIn(el)
    if (top >= PositionOut) {
        el.removeAttribute('blazoranimate');
    } else if (top >= PostionIn) {
        el.setAttribute('blazoranimate', 'aos-animate');
    } else if (el.animate && !options.once) {
        el.removeAttribute('blazoranimate');
    }
};


const getPositionOut = (el, defaultOffset) => {
    let finalEl = el;
    const elementOffsetTop = offset(finalEl).top;
    return elementOffsetTop + finalEl.offsetHeight - 0;
};

const getPositionIn = (el, defaultOffset, defaultAnchorPlacement) => {
    const windowHeight = window.innerHeight;
    let finalEl = el;
    let triggerPoint = offset(finalEl).top - windowHeight;
    return triggerPoint + 0;
};

const offset = function (el) {
    let _x = 0;
    let _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - (el.tagName != 'BODY' ? el.scrollLeft : 0);
        _y += el.offsetTop - (el.tagName != 'BODY' ? el.scrollTop : 0);
        el = el.offsetParent;
    }
    return {
        top: _y,
        left: _x
    };
};