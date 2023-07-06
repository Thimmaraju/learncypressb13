class AddEmployeePage{

    addemployeesubmenu(){

        return "Add Employee"
    }

    firstnameInput(){

        return 'input[name="firstName"]'
    }

    lastnameInput(){
    
        return 'input[name="lastName"]'
    }

    saveBtn(){

        return 'button[type="submit"]'
    }

    errormessageFirstname(){

        return "Required"
    }
}

const addemployee = new AddEmployeePage()

export default addemployee