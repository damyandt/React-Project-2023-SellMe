import { useForm } from "../hooks/useForm";
import { useClothingContext } from "../contexts/clothingContext"

export const Sell = () => {

    const { onPostSubmit } = useClothingContext();

    const { values, changeHandler, onSubmit } = useForm(
        {
            name: "",
            brand: "",
            photo1: "",
            photo2: "",
            photo3: "",
            photo4: "",
            gender: "",
            price: "",
            size: "",
            contact: "",
            categorie: "",
            type: "",
            likes: [],
        },
        onPostSubmit
    );


    return (

        <div className="sellPage">
            <div className="discount">
                <p>NEW HERE? Get 15% off everything!</p>
                <p>With code: HELLOSELLME</p>
            </div>
            <p>Sell your clothing! </p>
            <form id="sell" method="POST" onSubmit={onSubmit}>
                <div className="productInputs">

                    <div className="gridProduct">
                        <div>
                            <label htmlFor="name">Name*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter name..."
                                value={values.name}
                                onChange={changeHandler}
                            />

                        </div>

                        <div>
                            <label htmlFor="brand">Brand*</label>
                            <input
                                type="text"
                                id="brand"
                                name="brand"
                                placeholder="Enter brand..."
                                value={values.brand}
                                onChange={changeHandler}
                            />
                        </div>

                        <div>
                            <label htmlFor="categorie">Categorie*</label>
                            {/* <input
                                type="text"
                                id="categorie"
                                name="categorie"
                                placeholder="Enter categorie..."
                                value={values.categorie}
                                onChange={changeHandler}
                            /> */}
                            <select name="categorie" id="categorie" value={values.categorie} onChange={changeHandler}>
                                <option value="-">--Please choose an option--</option>
                                <option value="clothing">Clothing</option>
                                <option value="accessories">Accessorie</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="type">Type*</label>
                            {/* <input
                                type="text"
                                id="type"
                                name="type"
                                placeholder="Enter type..."
                                value={values.type}
                                onChange={changeHandler}
                            /> */}
                            <select name="type" id="type" value={values.type} onChange={changeHandler}>
                                <option value="-">--Please choose an option--</option>
                                <option value="t-shirts">T-shirt & tops</option>
                                <option value="hoodies">Hoodie & Sweatshirts</option>
                                <option value="jeans">Jeans</option>
                                <option value="dresses">Dresses & skirts</option>
                                <option value="jackets">Jacket & coats</option>
                                <option value="swimmwear">Swimmwear</option>
                                <option value="underwear">Underwear</option>
                            </select>
                        </div>
                    </div>

                </div>


                <div className="photosInputs">
                    <label htmlFor="photos">Photos*</label>
                    <div className="gridPhotos">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>
                            <input
                                type="text"
                                id="photo1"
                                name="photo1"
                                value={values.photo1}
                                onChange={changeHandler}
                            />
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>

                            <input
                                type="text"
                                id="photo2"
                                name="photo2"
                                value={values.photo2}
                                onChange={changeHandler}
                            />
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>

                            <input
                                type="text"
                                id="photo3"
                                name="photo3"
                                value={values.photo3}
                                onChange={changeHandler}
                            />
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>
                            <input
                                type="text"
                                id="photo4"
                                name="photo4"
                                value={values.photo4}
                                onChange={changeHandler}
                            />
                        </div>

                    </div>

                </div>


                <div className="detailsInputs">
                    <label htmlFor="price">Price*</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="Enter price...($)"
                        value={values.price}
                        onChange={changeHandler}
                    />

                    <label htmlFor="size">Size*</label>
                    <input
                        type="text"
                        id="size"
                        name="size"
                        placeholder="Enter size..."
                        value={values.size}
                        onChange={changeHandler}
                    />

                    <label htmlFor="gender">Gender*</label>
                    {/* <input
                        type="text"
                        id="gender"
                        name="gender"
                        placeholder="Enter gender..."
                        value={values.gender}
                        onChange={changeHandler}
                    /> */}
                    <select name="gender" id="gender" value={values.gender} onChange={changeHandler}>
                        <option value="-">--Please choose an option--</option>
                        <option value="man">Male</option>
                        <option value="woman">Female</option>
                    </select>
                </div>

                <div className="contactsInputs">

                    <label htmlFor="brand">Phone*</label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        placeholder="Enter phone..."
                        value={values.contact}
                        onChange={changeHandler}
                    />
                </div>

                <input type="submit" value="Create Post" className="postBtn" />
            </form>


        </div>
    )
}