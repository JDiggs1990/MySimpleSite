

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckBoxPage extends Page {
    /**
     * define selectors using getter methods
     */
    get checkbox1 () {}
return $('checkboxes' > //form/input[2])
}

get checkbox2
return $('#checkboxes > input [type= checkbox]:nth-child(3)');
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('checkboxes');
    }
}

export default new CheckBoxPage();
