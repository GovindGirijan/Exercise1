export const update_user = (username) => {
    return {
        type: 'UPDATE_USER',
        payload: username
    };
};

export const form_submit = () => {
    return {
        type: 'SUBMIT'
    };
};

export const update_firstname = (firstname) => {
    return {
        type: 'UPDATE_FIRSTNAME',
        payload: firstname
    };
};

export const update_lastname = (lastname) => {
    return {
        type: 'UPDATE_LASTNAME',
        payload: lastname
    };
};

export const update_gender = (gender) => {
    return {
        type: 'UPDATE_GENDER',
        payload: gender
    };
};

export const update_age = (age) => {
    return {
        type: 'UPDATE_AGE',
        payload: age
    };
};