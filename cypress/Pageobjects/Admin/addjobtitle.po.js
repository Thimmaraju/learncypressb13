class AddJobTitlePage{

    jobsubmenu(){

        return "Job"
    }

    jobtitleoption(){

        return "Job Titles"
    }

    addBtn(){

        return "#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button"
    }

    addJobTitleHeader(){

        return "Add Job Title"
    }

    addJobTitleInput(){

        return "#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input"
    }

    jobDescriptionInput(){

        return 'textarea[placeholder="Type description here"]'
    }

    saveBtn(){

        return 'button[type="submit"]'
    }

    successmessage(){

        return 'Successfully Saved'
    }

    errormessageFirstname(){

        return 'Required'
    }
}

const addjob = new AddJobTitlePage()

export default addjob
