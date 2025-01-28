import LOGIN from "../../support/PageObject/Login";
import NAVBAR from "../../support/PageObject/Navbar";
import CONTAIN from "../../support/PageObject/DynamicPage";

describe('Validate functionality of Orange Hrm', () => {
        const login1 = new LOGIN;
        const navbar1 = new NAVBAR;
        const contain1 = new CONTAIN;

    it('Site Activities', () => {
        login1.EnterUrl();
        login1.loginrOrm();
        navbar1.NavbarOrm();
        contain1.containOrm();
    });

    it('Site Activities', () => {
        login1.EnterUrl();
        login1.loginrOrm();
        contain1.containOrm();
    });
});

