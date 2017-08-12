const XMLstring = '<test-data>\
  <title>Hello, world</title>\
  <about>\
    Sample XML File to be converted to JSON\
  </about>\
  <attr-example item="selfClosing" href="http://google.com" />\
  <array>\
    <head>Head1</head>\
    <desc>Desc1</desc>\
    <more-dashed-tag>tag with dash in name 1</more-dashed-tag>\
  </array>\
  <array>\
    <head>Head2</head>\
    <desc>Desc2</desc>\
    <more-dashed-tag>tag with dash in name 2</more-dashed-tag>\
  </array>\
  <object>\
    <objName>Object Name</objName>\
    <objDesc>Object described as Camel cased tags</objDesc>\
    <someRandomTag>Randomness!!!</someRandomTag>\
  </object>\
</test-data>'

var getXML = function() {
  return XMLstring;
}