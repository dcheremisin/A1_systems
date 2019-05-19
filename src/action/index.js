const changeType = (selectedType) => ({
    type: 'CHANGE_TYPE',
    selectedType,
});

const clearFormValues = () => ({
    type: 'CLEAR_FORM_VALUES',
});

const setPage = (page) => ({
  type: 'SET_PAGE',
  page,
});

const setFormPage = (page) => ({
    type: 'SET_FORM_PAGE',
    page,
});

export default {
    changeType,
    clearFormValues,
    setPage,
    setFormPage,
}