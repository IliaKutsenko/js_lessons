class Valid2 extends Valid {
    constructor(email, password) {
        super(email, password);
        this.error_message = '';
    }
    validate() {
        this.error_message = '';
        super.validate();
        if (this.isValid == false) {
            this.error_message = 'password error';
            return this.isValid
        }
        if (this.isValid == true) {
            if (this.email == '') {
                this.error_message = 'email error';
                this.isValid = false;
                return this.isValid;
            }
            return this.isValid
        }
    }
}