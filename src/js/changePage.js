class PageChanger {
  constructor() {
    paths: [
      "",
      "src/lang/fundamentals/dataTypes/dataTypes.html",
      "src/lang/fundamentals/Interaction/interaction.html",
      "src/lang/fundamentals/typeConversions/typeConversions.html",
      "src/lang/fundamentals/operators/operators.html",
      "src/lang/fundamentals/comparsions/comparsions.html",
      "src/lang/fundamentals/conditionalBranching/conditionalBranching.html",
      "src/lang/fundamentals/logicalOperators/logicalOperators.html",
      "src/lang/fundamentals/whileFor/whileFor.html",
      "src/lang/fundamentals/switch/switch.html",
      "src/lang/fundamentals/functions/functions.html",
      "src/lang/fundamentals/arrowFuncBasis/arrowFuncBasis.html",
      "src/lang/objects/objects/objects.html",
      "src/lang/objects/referencesCopying/referencesCopying.html",
      "src/lang/objects/methodsThis/methodsThis.html",
      "src/lang/objects/constructorNew/constructorNew.html",
      "src/lang/objects/optionalChaining/optionalChaining.html",
      "src/lang/objects/symbol/symbol.html",
      "src/lang/objects/toPrimitive/toPrimitive.html",
      "src/lang/dataTypes/numbers/numbers.html",
      "src/lang/dataTypes/strings/strings.html",
      "src/lang/dataTypes/arrays/arrays.html",
      "src/lang/dataTypes/arrayMethods/arrayMethods.html",
      "src/lang/dataTypes/iterables/iterables.html",
      "src/lang/dataTypes/mapSet/mapSet.html",
      "src/lang/dataTypes/weakMapSet/weakMapSet.html",
      "src/lang/dataTypes/keysValuesEntries/keysValuesEntries.html",
      "src/lang/dataTypes/destrAssignment/destrAssignment.html",
      "src/lang/dataTypes/date/date.html",
      "src/lang/dataTypes/json/json.html",
      "src/lang/funcs/recursionStack/recursionStack.html",
      "src/lang/funcs/restSpread/restSpread.html",
      "src/lang/funcs/scopeClosure/scopeClosure.html",
      "src/lang/funcs/oldVar/oldVar.html",
      "src/lang/funcs/globalObject/globalObject.html",
      "src/lang/funcs/funObjNFE/funObjNFE.html",
      "src/lang/funcs/newFunction/newFunction.html",
      "src/lang/funcs/scheduling/scheduling.html",
      "src/lang/funcs/decoratorsForwarding/decoratorsForwarding.html",
      "src/lang/funcs/funcBinding/funcBinding.html",
      "src/lang/funcs/arrowFnRev/arrowFnRev.html",
      "src/lang/propsConfig/flagsDescriptors/flagsDescriptors.html",
      "src/lang/propsConfig/gettsSetts/gettsSetts.html",
      "src/lang/protoInherit/protInheritance/protInheritance.html",
      "src/lang/protoInherit/Fprototype/Fprototype.html",
      "src/lang/protoInherit/nativeProts/nativeProts.html",
      "src/lang/protoInherit/protMethods/protMethods.html",
      "src/lang/classes/basicSyntax/basicSyntax.html",
      "src/lang/classes/inheritance/inheritance.html",
      "src/lang/classes/staticPropMeth/staticPropMeth.html",
      "src/lang/classes/privateProtected/privateProtected.html",
      "src/lang/classes/extending/extending.html",
      "src/lang/classes/classChecking/classChecking.html",
      "src/lang/classes/mixins/mixins.html",
      "src/lang/errorHandl/errorHandling/errorHandling.html",
      "src/lang/errorHandl/customErrors/customErrors.html",
      "src/lang/promiseAsync/callbacks/callbacks.html",
      "src/lang/promiseAsync/promise/promise.html",
      "src/lang/promiseAsync/chaining/chaining.html",
      "src/lang/promiseAsync/errorHandling/errorHandling.html",
      "src/lang/promiseAsync/promiseAPI/promiseAPI.html",
      "src/lang/promiseAsync/promisification/promisification.html",
      "src/lang/promiseAsync/microtasks/microtasks.html",
      "src/lang/promiseAsync/asyncAwait/asyncAwait.html",
      "src/lang/generators/generators/generators.html",
      "src/lang/generators/asyncIterGen/asyncIterGen.html",
      "src/lang/misc/proxyReflect/proxyReflect.html",
      "src/lang/misc/eval/eval.html",
      "src/lang/misc/currying/currying.html",
      "src/lang/misc/referenceType/referenceType.html",
      "src/lang/misc/bigint/bigint.html",
      "src/lang/misc/unicStrInt/unicStrInt.html",
      "src/lang/misc/weakRefFinRed/weakRefFinRed.html",
      "src/lang/misc/bitwiseOper/bitwiseOper.html",
      "src/lang/misc/internationalization/internationalization.html",
      "src/browser/document/envSpecs/envSpecs.html",
      "src/browser/document/domTree/domTree.html",
      "src/browser/document/walkingDOM/walkingDOM.html",
      "src/browser/document/searching/searching.html",
      "src/browser/document/nodeProperties/nodeProperties.html",
      "src/browser/document/attrProps/attrProps.html",
      "src/browser/document/modifDoc/modifDoc.html",
      "src/browser/document/styleClasses/styleClasses.html",
      "src/browser/document/elementSizeScroll/elementSizeScroll.html",
      "src/browser/document/windowSizeScroll/windowSizeScroll.html",
      "src/browser/document/coordinates/coordinates.html",
      "src/browser/eventsIntro/introBrowserEvents/introBrowserEvents.html",
      "src/browser/eventsIntro/bubblCapt/bubblCapt.html",
      "src/browser/eventsIntro/eventDelegation/eventDelegation.html",
      "src/browser/eventsIntro/browserDefaultActs/browserDefaultActs.html",
      "src/browser/eventsIntro/dispatchCustomEvs/dispatchCustomEvs.html",
      "src/browser/uiEvents/mouseEvents/mouseEvents.html",
      "src/browser/uiEvents/movingMouse/movingMouse.html",
      "src/browser/uiEvents/dragNDrop/dragNDrop.html",
      "src/browser/uiEvents/keyboard/keyboard.html",
      "src/browser/uiEvents/scrolling/scrolling.html",
      "src/browser/formsControls/formPropsMeths/formPropsMeths.html",
      "src/browser/formsControls/focusing/focusing.html",
      "src/browser/formsControls/events/events.html",
      "src/browser/formsControls/forms/forms.html",
      "src/browser/docResourceLoad/page/page.html",
      "src/browser/docResourceLoad/resourceLoading/resourceLoading.html",
      "src/browser/mics/mutationObserver/mutationObserver.html",
      "src/browser/mics/selectionRange/selectionRange.html",
      "src/browser/mics/eventLoop/eventLoop.html",
      "src/additional/frameWindow/popups/popups.html",
      "src/additional/frameWindow/crossCommunication/crossCommunication.html",
      "src/additional/binDataFiles/arrBufferBinArr/arrBufferBinArr.html",
      "src/additional/binDataFiles/textDecoderEncoder/textDecoderEncoder.html",
      "src/additional/binDataFiles/blob/blob.html",
      "src/additional/binDataFiles/fileFileReader/fileFileReader.html"
    ]
  }

  
}

const pageSrcs = [
  "",
  "src/lang/fundamentals/dataTypes/dataTypes.html",
  "src/lang/fundamentals/Interaction/interaction.html",
  "src/lang/fundamentals/typeConversions/typeConversions.html",
  "src/lang/fundamentals/operators/operators.html",
  "src/lang/fundamentals/comparsions/comparsions.html",
  "src/lang/fundamentals/conditionalBranching/conditionalBranching.html",
  "src/lang/fundamentals/logicalOperators/logicalOperators.html",
  "src/lang/fundamentals/whileFor/whileFor.html",
  "src/lang/fundamentals/switch/switch.html",
  "src/lang/fundamentals/functions/functions.html",
  "src/lang/fundamentals/arrowFuncBasis/arrowFuncBasis.html",
  "src/lang/objects/objects/objects.html",
  "src/lang/objects/referencesCopying/referencesCopying.html",
  "src/lang/objects/methodsThis/methodsThis.html",
  "src/lang/objects/constructorNew/constructorNew.html",
  "src/lang/objects/optionalChaining/optionalChaining.html",
  "src/lang/objects/symbol/symbol.html",
  "src/lang/objects/toPrimitive/toPrimitive.html",
  "src/lang/dataTypes/numbers/numbers.html",
  "src/lang/dataTypes/strings/strings.html",
  "src/lang/dataTypes/arrays/arrays.html",
  "src/lang/dataTypes/arrayMethods/arrayMethods.html",
  "src/lang/dataTypes/iterables/iterables.html",
  "src/lang/dataTypes/mapSet/mapSet.html",
  "src/lang/dataTypes/weakMapSet/weakMapSet.html",
  "src/lang/dataTypes/keysValuesEntries/keysValuesEntries.html",
  "src/lang/dataTypes/destrAssignment/destrAssignment.html",
  "src/lang/dataTypes/date/date.html",
  "src/lang/dataTypes/json/json.html",
  "src/lang/funcs/recursionStack/recursionStack.html",
  "src/lang/funcs/restSpread/restSpread.html",
  "src/lang/funcs/scopeClosure/scopeClosure.html",
  "src/lang/funcs/oldVar/oldVar.html",
  "src/lang/funcs/globalObject/globalObject.html",
  "src/lang/funcs/funObjNFE/funObjNFE.html",
  "src/lang/funcs/newFunction/newFunction.html",
  "src/lang/funcs/scheduling/scheduling.html",
  "src/lang/funcs/decoratorsForwarding/decoratorsForwarding.html",
  "src/lang/funcs/funcBinding/funcBinding.html",
  "src/lang/funcs/arrowFnRev/arrowFnRev.html",
  "src/lang/propsConfig/flagsDescriptors/flagsDescriptors.html",
  "src/lang/propsConfig/gettsSetts/gettsSetts.html",
  "src/lang/protoInherit/protInheritance/protInheritance.html",
  "src/lang/protoInherit/Fprototype/Fprototype.html",
  "src/lang/protoInherit/nativeProts/nativeProts.html",
  "src/lang/protoInherit/protMethods/protMethods.html",
  "src/lang/classes/basicSyntax/basicSyntax.html",
  "src/lang/classes/inheritance/inheritance.html",
  "src/lang/classes/staticPropMeth/staticPropMeth.html",
  "src/lang/classes/privateProtected/privateProtected.html",
  "src/lang/classes/extending/extending.html",
  "src/lang/classes/classChecking/classChecking.html",
  "src/lang/classes/mixins/mixins.html",
  "src/lang/errorHandl/errorHandling/errorHandling.html",
  "src/lang/errorHandl/customErrors/customErrors.html",
  "src/lang/promiseAsync/callbacks/callbacks.html",
  "src/lang/promiseAsync/promise/promise.html",
  "src/lang/promiseAsync/chaining/chaining.html",
  "src/lang/promiseAsync/errorHandling/errorHandling.html",
  "src/lang/promiseAsync/promiseAPI/promiseAPI.html",
  "src/lang/promiseAsync/promisification/promisification.html",
  "src/lang/promiseAsync/microtasks/microtasks.html",
  "src/lang/promiseAsync/asyncAwait/asyncAwait.html",
  "src/lang/generators/generators/generators.html",
  "src/lang/generators/asyncIterGen/asyncIterGen.html",
  "src/lang/misc/proxyReflect/proxyReflect.html",
  "src/lang/misc/eval/eval.html",
  "src/lang/misc/currying/currying.html",
  "src/lang/misc/referenceType/referenceType.html",
  "src/lang/misc/bigint/bigint.html",
  "src/lang/misc/unicStrInt/unicStrInt.html",
  "src/lang/misc/weakRefFinRed/weakRefFinRed.html",
  "src/lang/misc/bitwiseOper/bitwiseOper.html",
  "src/lang/misc/internationalization/internationalization.html",
  "src/browser/document/envSpecs/envSpecs.html",
  "src/browser/document/domTree/domTree.html",
  "src/browser/document/walkingDOM/walkingDOM.html",
  "src/browser/document/searching/searching.html",
  "src/browser/document/nodeProperties/nodeProperties.html",
  "src/browser/document/attrProps/attrProps.html",
  "src/browser/document/modifDoc/modifDoc.html",
  "src/browser/document/styleClasses/styleClasses.html",
  "src/browser/document/elementSizeScroll/elementSizeScroll.html",
  "src/browser/document/windowSizeScroll/windowSizeScroll.html",
  "src/browser/document/coordinates/coordinates.html",
  "src/browser/eventsIntro/introBrowserEvents/introBrowserEvents.html",
  "src/browser/eventsIntro/bubblCapt/bubblCapt.html",
  "src/browser/eventsIntro/eventDelegation/eventDelegation.html",
  "src/browser/eventsIntro/browserDefaultActs/browserDefaultActs.html",
  "src/browser/eventsIntro/dispatchCustomEvs/dispatchCustomEvs.html",
  "src/browser/uiEvents/mouseEvents/mouseEvents.html",
  "src/browser/uiEvents/movingMouse/movingMouse.html",
  "src/browser/uiEvents/dragNDrop/dragNDrop.html",
  "src/browser/uiEvents/keyboard/keyboard.html",
  "src/browser/uiEvents/scrolling/scrolling.html",
  "src/browser/formsControls/formPropsMeths/formPropsMeths.html",
  "src/browser/formsControls/focusing/focusing.html",
  "src/browser/formsControls/events/events.html",
  "src/browser/formsControls/forms/forms.html",
  "src/browser/docResourceLoad/page/page.html",
  "src/browser/docResourceLoad/resourceLoading/resourceLoading.html",
  "src/browser/mics/mutationObserver/mutationObserver.html",
  "src/browser/mics/selectionRange/selectionRange.html",
  "src/browser/mics/eventLoop/eventLoop.html",
  "src/additional/frameWindow/popups/popups.html",
  "src/additional/frameWindow/crossCommunication/crossCommunication.html",
  "src/additional/binDataFiles/arrBufferBinArr/arrBufferBinArr.html",
  "src/additional/binDataFiles/textDecoderEncoder/textDecoderEncoder.html",
  "src/additional/binDataFiles/blob/blob.html",
  "src/additional/binDataFiles/fileFileReader/fileFileReader.html"
];


document.addEventListener("DOMContentLoaded", () => {
	const [prev, next] = createUI();
	const src = location.pathname.slice(1);
	const srcInd = pageSrcs.indexOf(src);

  createPageCounter(srcInd, pageSrcs.length - 1);
  createPageTopic(src)

	prev.addEventListener('click', () => changePage(srcInd, '-'));
	next.addEventListener('click', () => changePage(srcInd, '+'));
});


function createPageTopic(src) {
  const container = document.createElement('h1');
  container.className = 'page-topic';
  container.textContent = localStorage.getItem(src);
  document.querySelector('.page-counter').after(container);
}


function createPageCounter(curr, total) {
  const container = document.createElement('div');
  container.className = 'page-counter';
  container.innerHTML = `page ${curr} of ${total}`;
  document.body.prepend(container);
}


function changePage(currInd, direction) {
	let ind;
  if (currInd === 0 && direction === '-') return;
  if (currInd === pageSrcs.length -1  && direction === '+') return;
	if (direction === '-') {
		ind = currInd - 1;
	} else {
		ind = currInd + 1;
	}
	window.location.assign(`/${pageSrcs[ind]}`);
}


function createUI() {
	const backBtn = document.createElement('button');
	const forwardBtn = document.createElement('button');
	backBtn.textContent = '<';
	backBtn.className = 'chp-back-btn';
	forwardBtn.textContent = '>';
	forwardBtn.className = 'chp-forward-btn';
	document.body.append(backBtn);
	document.body.append(forwardBtn);
	return [backBtn, forwardBtn];
}


function _getPagesSrc() {
	const links = document.querySelectorAll('h4>a');
	const srcs = ['/'];
	for (let i = 0; i < links.length; i += 1) {
		srcs.push(links[i].getAttribute('href'));
	}
	console.log(JSON.stringify(srcs, null, 2));
}

//_getPagesSrc();