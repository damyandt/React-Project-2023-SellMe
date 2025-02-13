import { useEffect } from "react";

export const SizeGuide = () => {

    useEffect(() => {

        let blur = document.querySelector("#blur");
        blur.classList.add("active")
        return () => {
            blur.classList.remove("active")
        }

    }, [])





    return (
        <>
            <div><img className="sizeGuideImg" src="/photos/size-guide.jpeg" alt="size guide"/></div>
        </>
    )
}