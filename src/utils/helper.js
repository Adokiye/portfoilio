export const determineActiveMenu = link => {
    return window.location.href.includes(link) ? console.log(true) : '';
};
