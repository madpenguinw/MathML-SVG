function transformate(InputXml) {
    const xsltStylesheet = document.getElementById('stylesheet').textContent;
    const parser = new DOMParser();
    const xsltStylesheetNode = parser.parseFromString(xsltStylesheet, 'text/xml');
    const xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsltStylesheetNode);
    const xmlString = document.getElementById(InputXml).textContent;
    const xmlDocument = parser.parseFromString(xmlString, 'text/xml');
    const transformedString = new XMLSerializer().serializeToString(
        xsltProcessor.transformToDocument(xmlDocument),
    );

    return transformedString;
};

function mainProcess(process) {
    window.onload = function renderTransformedXml() {
        document.getElementById('result').innerHTML = transformate(process);
      };
}