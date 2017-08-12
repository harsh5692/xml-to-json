function convertHyphenToUnderscore(str){
	return str.split("-").join("_");
}

function parseElement(xml) {
  var data = {};

  // if it's text just return it
  if (xml.nodeType === 3) {
    return xml.nodeValue.trim();
  }

  // if it doesn't have any children or attributes, just return the contents
  if ((!xml.children || !xml.children.length) && (!xml.attributes || !xml.attributes.length)) {
    return xml.textContent;
  }

  // if it doesn't have children but does have body content, add it to text
  if ((!xml.children || !xml.children.length) && xml.textContent) {
    data.text = xml.textContent;
  }

  // if it's an element with attributes, add them to data.attributes
  if (xml.nodeType === 1 && xml.attributes && xml.attributes.length > 0) {
    data.attributes = _.reduce(xml.attributes, function(obj, name, id) {
      var attr = xml.attributes.item(id);
      obj[convertHyphenToUnderscore(attr.name)] = attr.value;
      return obj;
    }, {});
  }

// recursively call parseElement over children
  _.each(xml.children, function(child) {
    var name = convertHyphenToUnderscore(child.nodeName);

    // if name not in data, add and return
    if (!_.has(data, name)) {
      data[name] = parseElement(child);
      return;
    }

    // if name already in data, but not as an array, make it array
    if (!_.isArray(data[name])) { data[name] = [data[name]]; }

    // now push the new child
    data[name].push(parseElement(child));
  });
  return data;
}

// load XML
var xmlText = getXML();
// use the DOMParser browser API to convert string to a Document
var XML = new DOMParser().parseFromString(xmlText, "text/xml");
var obj = parseElement(XML);

console.log("JSON Object : ", JSON.stringify(obj));