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
            <div ><img className="sizeGuideImg" src="https://craft-production.imgix.net/2020/08/28123153/Size-guide-Dam-eng.jpg?q=70&fit=clip&w=1287&fm=jpg&auto=format" /></div>

        </>

    )
}