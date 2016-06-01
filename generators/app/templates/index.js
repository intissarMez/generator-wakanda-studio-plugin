/* Copyright (c) Wakanda SAS, 2015
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* The Software shall be used for Good, not Evil.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

var
	actions;
actions = {};


/*
 * STEP 1. Make function name of YOUR_ACTION
 *
 */
actions.YOUR_ACTION = function YOUR_ACTION() {
	"use strict";

	/*
	 *  STEP 2. The definition of YOUR_ACTION here
	 *
	 */
	studio.alert('My First Wakanda Plugin is UP AND RUNNING !!!!');

	return true;
};

/*
 *  STEP 3. (optional) Add new action YOUR_ACTION2 here
 *          You should add an entry in manifest.json
 *
 */
/*
actions.YOUR_ACTION2 = function YOUR_ACTION2() {
	"use strict";
	studio.alert('Define YOUR_ACTION2 here.');
	return true;
};
*/

exports.handleMessage = function handleMessage(message) {
	"use strict";
	var
		actionName;

	actionName = message.action;

	if (!actions.hasOwnProperty(actionName)) {
		studio.alert("I don't know about this message: " + actionName);
		return false;
	}
	actions[actionName](message);
};
