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
                    <label htmlFor="name">Name*</label>

                    <input
                        type="text"
                        id="name"
                        name="name"

                        value={values.name}
                        onChange={changeHandler}
                    />

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

                    <label htmlFor="brand">Size*</label>
                    <input
                        type="text"
                        id="size"
                        name="size"
                        placeholder="Enter size..."
                        value={values.size}
                        onChange={changeHandler}
                    />

                    <label htmlFor="brand">Gender*</label>
                    <input
                        type="list"
                        id="size"
                        name="size"
                        placeholder="Enter size..."
                        value={values.size}
                        onChange={changeHandler}
                    />
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