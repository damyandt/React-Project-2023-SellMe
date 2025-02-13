export const postValidation = (data) => {

    const validationErrors = {};

    if (data.name === "") {
        validationErrors.name = "Name is required!";
    }

    if (data.brand === "") {
        validationErrors.brand = "Brand is required!";
    }

    if (!data.categorie) {
        validationErrors.categorie = "Categorie is required!";
    }

    if (!data.type) {
        validationErrors.tyoe = "Type is required!";
    }

    if (!data.photo1.trim() || !data.photo2.trim() || !data.photo3.trim() || !data.photo4.trim()) {
        validationErrors.photo1 = "4 Photos are required!";
    }

    if (!data.size.trim()) {
        validationErrors.size = "Size is required!";
    }

    if (!data.gender) {
        validationErrors.gender = "Gender is required!";
    }
    if (!data.phone.trim()) {
        validationErrors.phone = "Phone is required!";
    }



    if (!data.price) {
        validationErrors.price = "Price is required!";
    } else if (isNaN(data.price)) {
        validationErrors.price = "Price must be number!";
    } else if (data.price < 0) {
        validationErrors.price = "Price must be positiv number!";
    }

    return validationErrors;
}