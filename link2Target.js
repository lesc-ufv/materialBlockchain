/**
 * Make all link to another domain to open in a named window or tab
 * @param {String} host The base domain.
 * @param {String} target The window or tab name.
 * @returns {Number} Total of links affected
 */
function link2Target(host, target) {
    target = [target === undefined? "_blank": target].join("");
    host = [host === undefined? window.location.host: host].join("");

    var regexp = new RegExp("^(https?:\/\/)?" + host.split(".").join("\\.") , "i");
    var links = document.getElementsByTagName("a");
    var link = links.item(0);
    var count = 0;

    for (var i = 0; link !== null; link = links.item(++i)) {
        if (!regexp.test(link.href)){
            link.setAttribute("target", target);
            ++count;
        }
    }

    return count;
}
