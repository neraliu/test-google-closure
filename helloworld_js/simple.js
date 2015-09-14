// This file was automatically generated from simple.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace examples.simple.
 */

if (typeof examples == 'undefined') { var examples = {}; }
if (typeof examples.simple == 'undefined') { examples.simple = {}; }


examples.simple.helloWorld = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('Hello world!');
};
if (goog.DEBUG) {
  examples.simple.helloWorld.soyTemplateName = 'examples.simple.helloWorld';
}


examples.simple.helloTestHTML = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div>' + soy.$$escapeHtml(opt_data.data) + '</div>');
};
if (goog.DEBUG) {
  examples.simple.helloTestHTML.soyTemplateName = 'examples.simple.helloTestHTML';
}


examples.simple.helloTestAttributeName = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div ' + soy.$$filterHtmlAttributes(opt_data.data) + '>Hello World</div>');
};
if (goog.DEBUG) {
  examples.simple.helloTestAttributeName.soyTemplateName = 'examples.simple.helloTestAttributeName';
}


examples.simple.helloTestDoubleQuotedAttributeValue = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="' + soy.$$escapeHtmlAttribute(opt_data.data) + '">Hello World</div>');
};
if (goog.DEBUG) {
  examples.simple.helloTestDoubleQuotedAttributeValue.soyTemplateName = 'examples.simple.helloTestDoubleQuotedAttributeValue';
}


examples.simple.helloTestSingleQuotedAttributeValue = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class=\'' + soy.$$escapeHtmlAttribute(opt_data.data) + '\'>Hello World</div>');
};
if (goog.DEBUG) {
  examples.simple.helloTestSingleQuotedAttributeValue.soyTemplateName = 'examples.simple.helloTestSingleQuotedAttributeValue';
}


examples.simple.helloTestUnQuotedAttributeValue = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class=' + soy.$$escapeHtmlAttributeNospace(opt_data.data) + '>Hello World</div>');
};
if (goog.DEBUG) {
  examples.simple.helloTestUnQuotedAttributeValue.soyTemplateName = 'examples.simple.helloTestUnQuotedAttributeValue';
}


examples.simple.helloTestDoubleQuotedAttributeValueURI = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.data)) + '">Hello World</a></div>');
};
if (goog.DEBUG) {
  examples.simple.helloTestDoubleQuotedAttributeValueURI.soyTemplateName = 'examples.simple.helloTestDoubleQuotedAttributeValueURI';
}


examples.simple.helloTestDoubleQuotedAttributeValueJSURI = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div><a href="javascript:alert(\'' + soy.$$escapeHtmlAttribute(opt_data.data) + '\')">Hello World</a></div>');
};
if (goog.DEBUG) {
  examples.simple.helloTestDoubleQuotedAttributeValueJSURI.soyTemplateName = 'examples.simple.helloTestDoubleQuotedAttributeValueJSURI';
}


examples.simple.helloTestScript = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<script>' + soy.$$escapeJsValue(opt_data.data) + '<\/script>');
};
if (goog.DEBUG) {
  examples.simple.helloTestScript.soyTemplateName = 'examples.simple.helloTestScript';
}


examples.simple.helloTestStyle = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<style>' + soy.$$filterCssValue(opt_data.data) + '</style>');
};
if (goog.DEBUG) {
  examples.simple.helloTestStyle.soyTemplateName = 'examples.simple.helloTestStyle';
}


examples.simple.helloName = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml((! opt_data.greetingWord) ? 'Hello ' + soy.$$escapeHtml(opt_data.name) + '!' : soy.$$escapeHtml(opt_data.greetingWord) + ' ' + soy.$$escapeHtml(opt_data.name) + '!');
};
if (goog.DEBUG) {
  examples.simple.helloName.soyTemplateName = 'examples.simple.helloName';
}


examples.simple.helloNames = function(opt_data, opt_ignored) {
  var output = examples.simple.helloName(opt_data) + '<br>';
  var additionalNameList54 = opt_data.additionalNames;
  var additionalNameListLen54 = additionalNameList54.length;
  if (additionalNameListLen54 > 0) {
    for (var additionalNameIndex54 = 0; additionalNameIndex54 < additionalNameListLen54; additionalNameIndex54++) {
      var additionalNameData54 = additionalNameList54[additionalNameIndex54];
      output += examples.simple.helloName({name: additionalNameData54}) + ((! (additionalNameIndex54 == additionalNameListLen54 - 1)) ? '<br>' : '');
    }
  } else {
    output += 'No additional people to greet.';
  }
  return output;
};
if (goog.DEBUG) {
  examples.simple.helloNames.soyTemplateName = 'examples.simple.helloNames';
}


examples.simple.helloNamesWithinNonHTML = function(opt_data, opt_ignored) {
  return '<a href="' + examples.simple.helloURI(opt_data) + '">';
};
if (goog.DEBUG) {
  examples.simple.helloNamesWithinNonHTML.soyTemplateName = 'examples.simple.helloNamesWithinNonHTML';
}


examples.simple.helloURI = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedUri(soy.$$filterNormalizeUri(opt_data.data));
};
if (goog.DEBUG) {
  examples.simple.helloURI.soyTemplateName = 'examples.simple.helloURI';
}
