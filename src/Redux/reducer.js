import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from './actionTypes'

const initialState = {
    contacts:
        JSON.parse(localStorage.getItem("contacts")) || [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CONTACT: {
            let flag = 0;
            if (action.payload.firstName == "" || action.payload.lastName == "") {
                alert('Plz Fill All Details ')
                flag = 1;
            }
            else {
                state.contacts.forEach((contact) => {
                    if (contact.firstName == action.payload.firstName && contact.lastName == action.payload.lastName) {
                        alert("Name already in contact");
                        flag = 1;
                    }
                })
            }

            if (!flag) {
                alert("Contact Saved Successfully :) ");
                let updateContacts = JSON.parse(localStorage.getItem("contacts")) || []
                updateContacts.push({ id: state.contacts.length + 1, ...action.payload })
                localStorage.setItem('contacts', JSON.stringify(updateContacts))
                return {
                    ...state,
                    contacts: [...updateContacts],
                };
            }
        }

        case REMOVE_CONTACT: {
            let Contacts = JSON.parse(localStorage.getItem("contacts"))
            let updateContacts = Contacts.filter((contact) => contact.id != action.payload.id)
            localStorage.setItem('contacts', JSON.stringify(updateContacts))
            return {
                ...state,
                contacts: [...updateContacts]
            };
        }

        case EDIT_CONTACT: {
            if (action.payload.firstName == "" || action.payload.lastName == "") {
                alert("All Fields are required");
                return state;
            }
            else {
                let flag = 0;
                let Contacts = JSON.parse(localStorage.getItem("contacts"))
                Contacts.forEach((contact) => {
                    if (contact.id != action.payload.id && contact.firstName == action.payload.firstName && contact.lastName == action.payload.lastName) {
                        alert("Name Already Exists")
                        flag = 1;
                        return state
                    }
                })
                if (flag) {
                    return state
                }
                else {
                    let updateContacts = Contacts.map((contact) => {
                        if (contact.id == action.payload.id) {
                            return contact = { ...action.payload }
                        }
                        else {
                            return contact
                        }
                    })
                    localStorage.setItem("contacts", JSON.stringify(updateContacts))
                    alert("Contacts Updated Successfully :)")
                    return {
                        ...state,
                        contacts: state.contacts.map((contact) => {
                            if (contact.id == action.payload.id) {
                                return contact = { ...action.payload }
                            }
                            else {
                                return contact
                            }
                        }),
                    };
                }
            }
        }
        default:
            return state;
    }
}