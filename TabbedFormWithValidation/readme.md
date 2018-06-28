## TabbedFormWithValidation

**Aim**: To segregate a long form with tab panes on modal and display all errors in the form.

#### Features/Functionalities Implemented:
- [x] Dividing a modal form over tabs.
- [x] Validation of all types of fields like dynamic fields or dependent fields.
- [x] Activating the tab automatically on encountering any invalid field on non-active tab pane.
- [x] Display of all errors after validation.
- [x] Form submission without page refresh on browser window.
- [x] Execution on browser and Electron.

#### Challenges/Motivation:
- Too much form controls to adjust on single non scrollable modal window.
- Normal HTML form validation not to able to focus on form controls on non-active tab panes.
- Need to show customize alert with all invalid fields info after form validation.
- Resetting form and validator without page refresh.
- Validation of dynamic for controls like form controls enabled after activating validator, or like dropdowns whose options can be changed upon change of other control.

#### Dependencies:
- jQuery
- Bootstrap 3
- Bootstrap Validator
- Node.js & Electron (optional)

#### How to install/run?
- Just download and go on!
- If wanted to run on electron, just do `npm init` and application is ready to run (`npm start`).

**_References:_**
- http://getbootstrap.com/docs/3.3/
- http://1000hz.github.io/bootstrap-validator/
